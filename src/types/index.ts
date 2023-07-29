import { type Icons } from "@/components/icons"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export interface FooterItem {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}

export type SidebarNavItem = NavItemWithChildren

export type MainNavItem = NavItemWithOptionalChildren

export interface User {
  _id: string,
  first_name: string,
  last_name: string,
  email: string,
  profileImageUrl: string | undefined,
  phone: string | null,
  organization: any | null,
  lastSignInAt: number | null,
  createdAt: number,
  updatedAt: number,
  banned: boolean,
}

export interface Project {
  _id: string;
  name: string;
  uri: string;
  tasks: any;
  tags: string[];
  monitor_interval: number;
  upload_interval: number;
  time_spent: string;
  created_at: string;
  updated_at: string;
}

export interface Organization {
  _id: string;
  name: string;
  projects?: Project[];
  monitor_interval: number;
  upload_interval: number;
  created_at: string;
  updated_at: string;
}

export interface Hackathon {
  _id: string;
  name: string;
  description: string;
  banner_url: string;
  organization: Organization;
  project: Project;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
}