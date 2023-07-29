import type { SidebarNavItem } from "@/types"

export type DashboardConfig = {
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "home",
      items: [],
    },
    {
      title: "Account",
      href: "/dashboard/account",
      icon: "user",
      items: [],
    },
    {
      title: "History",
      href: "/dashboard/history",
      icon: "history",
      items: [],
    },
  ],
}
