import { Icons } from "@/components/icons";

export type TSignin = {
  email: string;
  pwd: string;
};

export type TSignup = TSignin & {
  name: string;
  confirmPwd: string;
  isAdmin: boolean;
  isVerified: boolean;
};

export type TFeatureCard = {
  icon: string;
  characteristic: string;
  description: string;
};

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
