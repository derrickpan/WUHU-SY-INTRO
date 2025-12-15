import { LucideIcon } from 'lucide-react';

export interface ReportSectionItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ReportSection {
  id: string;
  category: string;
  headline: string;
  subheadline: string;
  items: ReportSectionItem[];
  colorTheme: string; // e.g., 'blue', 'teal', 'indigo'
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}