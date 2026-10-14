import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './App';

export function render(url: string) {
  const helmetContext: Record<string, any> = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]}>
        <AppRoutes />
      </MemoryRouter>
    </HelmetProvider>
  );

  return {
    appHtml,
    helmet: helmetContext.helmet,
  };
}
