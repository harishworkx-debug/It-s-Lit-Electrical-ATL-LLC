import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distSsrDir = path.resolve(rootDir, 'dist-ssr');

const routes = [
  '/',
  '/about',
  '/services',
  '/service-areas',
  '/contact',
  '/faq',
  // 12 core services
  '/electrical-repair-atlanta',
  '/residential-electrician-atlanta',
  '/electrical-panel-upgrade-atlanta',
  '/electrical-wiring-atlanta',
  '/outlet-switch-repair-atlanta',
  '/lighting-installation-atlanta',
  '/ceiling-fan-installation-atlanta',
  '/ev-charger-installation-atlanta',
  '/electrical-troubleshooting-atlanta',
  '/electrical-inspection-atlanta',
  '/emergency-electrician-atlanta',
  '/commercial-electrician-atlanta',
  // 10 city locations
  '/electrician-sandy-springs',
  '/electrician-marietta',
  '/electrician-roswell',
  '/electrician-smyrna',
  '/electrician-kennesaw',
  '/electrician-decatur',
  '/electrician-mableton',
  '/electrician-powder-springs',
  '/electrician-austell',
  '/electrician-tucker',
];

async function prerender() {
  console.log('🚀 Starting SSG Prerendering for 28 routes...');
  
  // Suppress React 18 useLayoutEffect warning during SSR prerender
  const originalError = console.error;
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('useLayoutEffect does nothing on the server')) {
      return;
    }
    originalError(...args);
  };
  
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found! Run vite build first.`);
  }
  const template = fs.readFileSync(templatePath, 'utf8');

  // Import server render bundle
  const serverEntryPath = path.join(distSsrDir, 'entry-server.js');
  const serverModule = await import(pathToFileURL(serverEntryPath).href);
  const { render } = serverModule;

  for (const route of routes) {
    const { appHtml, helmet } = render(route);

    let html = template;

    // Inject App HTML into #root
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Prepare Helmet tags
    const helmetTitle = helmet?.title?.toString() || '';
    const helmetMeta = helmet?.meta?.toString() || '';
    const helmetLink = helmet?.link?.toString() || '';
    const helmetScript = helmet?.script?.toString() || '';

    // Replace <title> tag if provided by helmet
    if (helmetTitle) {
      html = html.replace(/<title>.*?<\/title>/i, helmetTitle);
    }

    // Replace <meta name="description" ...> if provided
    if (helmetMeta) {
      // Remove any existing default meta description/og/twitter in template head
      html = html.replace(/<meta\s+name=["']description["'][^>]*>/gi, '');
      html = html.replace(/<meta\s+property=["']og:title["'][^>]*>/gi, '');
      html = html.replace(/<meta\s+property=["']og:description["'][^>]*>/gi, '');
      html = html.replace(/<meta\s+property=["']og:url["'][^>]*>/gi, '');
      html = html.replace(/<meta\s+name=["']twitter:title["'][^>]*>/gi, '');
      html = html.replace(/<meta\s+name=["']twitter:description["'][^>]*>/gi, '');
    }

    // Remove default canonical if replacing
    if (helmetLink) {
      html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '');
    }

    // Inject helmet head elements right before </head>
    const headInjection = [helmetMeta, helmetLink, helmetScript].filter(Boolean).join('\n    ');
    if (headInjection) {
      html = html.replace('</head>', `  ${headInjection}\n  </head>`);
    }

    // Determine output file path
    const outputPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route.replace(/^\//, ''), 'index.html');

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, 'utf8');

    const relativePath = path.relative(rootDir, outputPath).replace(/\\/g, '/');
    const sizeKb = (Buffer.byteLength(html, 'utf8') / 1024).toFixed(2);
    console.log(`  ✓ Prerendered ${route.padEnd(36)} -> ${relativePath} (${sizeKb} kB)`);
  }

  // Cleanup temporary dist-ssr
  if (fs.existsSync(distSsrDir)) {
    fs.rmSync(distSsrDir, { recursive: true, force: true });
    console.log('🧹 Cleaned up temporary dist-ssr directory.');
  }

  console.log(`\n🎉 Successfully prerendered all ${routes.length} pages as static HTML!`);
}

prerender().catch((err) => {
  console.error('❌ Prerendering failed:', err);
  process.exit(1);
});
