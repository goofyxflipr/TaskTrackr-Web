"use client"

import * as React from "react"
import Link from "next/link"
// import type { MainNavItem } from "@/types"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

// interface MainNavProps {
//   items?: MainNavItem[]
// }

export function MainNav() {
  return (
    <div className="hidden gap-6 lg:flex">
      <Link
        aria-label="Home"
        href="/"
        className="hidden items-center space-x-2 lg:flex"
      >
        <Icons.logo className="h-6 w-6" aria-hidden="true" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
