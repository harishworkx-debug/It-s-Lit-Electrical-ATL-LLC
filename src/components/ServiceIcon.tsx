import {
  AlertTriangle,
  Building,
  Wrench,
  Home,
  Zap,
  Cable,
  Plug,
  Lightbulb,
  Fan,
  BatteryCharging,
  Search,
  ClipboardCheck,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  Building,
  Wrench,
  Home,
  Zap,
  Cable,
  Plug,
  Lightbulb,
  Fan,
  BatteryCharging,
  Search,
  ClipboardCheck,
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export default function ServiceIcon({ name, className = 'w-6 h-6' }: ServiceIconProps) {
  const IconComponent = iconMap[name] || Zap;
  return <IconComponent className={className} />;
}
