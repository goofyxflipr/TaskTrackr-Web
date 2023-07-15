"use client"

import { SiteFooter } from "@/components/layouts/site-footer"
import { SiteHeader } from "@/components/layouts/site-header"
import { AuthContext } from '../../context/auth-context';
import { useContext } from "react";

interface LandingLayoutProps {
  children: React.ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  const authContext = useContext(AuthContext)

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={authContext.user} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
