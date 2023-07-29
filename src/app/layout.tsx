"use client"

import "@/styles/globals.css"

import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { Toaster } from "@/components/ui/toaster"
import { fontMono, fontSans } from "@/lib/fonts"
import { AuthContext, defaultState } from '@/context/auth-context'
import { useState } from "react"
import { User } from "@/types"

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {

  const [isAuth, setIsAuth] = useState(defaultState.isAuth)
  const [accessToken, setAccessToken] = useState<string | null>(defaultState.accessToken)
  const [refreshToken, setRefreshToken] = useState<string | null>(defaultState.refreshToken)
  const [user, setUser] = useState<User | null>(defaultState.user)

  

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthContext.Provider value={{
              isAuth, setIsAuth,
              accessToken, setAccessToken,
              refreshToken, setRefreshToken,
              user, setUser
            }}>
              {children}
            </AuthContext.Provider>
            <TailwindIndicator />
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </>
  )
}
