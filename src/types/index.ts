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

export type MainNavItem = NavItemWithOptionalChildren

export declare class User {
  readonly id: string;
  readonly banned: boolean;
  readonly createdAt: number;
  readonly updatedAt: number;
  readonly profileImageUrl: string;
  readonly imageUrl: string;
  readonly gender: string;
  readonly birthday: string;
  readonly primaryEmailAddressId: string | null;
  readonly primaryPhoneNumberId: string | null;
  readonly lastSignInAt: number | null;
  readonly username: string | null;
  readonly firstName: string | null;
  readonly lastName: string | null;
  constructor(id: string, banned: boolean, createdAt: number, updatedAt: number, profileImageUrl: string, imageUrl: string, gender: string, birthday: string, primaryEmailAddressId: string | null, primaryPhoneNumberId: string | null, lastSignInAt: number | null, username: string | null, firstName: string | null, lastName: string | null);
}
