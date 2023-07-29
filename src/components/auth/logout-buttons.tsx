"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"
import { Button, buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"
import { AuthContext } from "@/context/auth-context"

export function LogOutButtons() {
  const router = useRouter()
  const mounted = useMounted()
  const authContext = React.useContext(AuthContext)
  const [isPending, startTransition] = React.useTransition()
  
  const handleLogout = () => {
    startTransition(() => {
      authContext.setIsAuth!(false)
      authContext.setAccessToken!(null)
      authContext.setRefreshToken!(null)
      authContext.setUser!(null)
      router.push(`${window.location.origin}/?redirect=false`)
    })
  }

  return (
    <div className="flex w-full items-center space-x-2">
      {mounted ? (
          <Button
            aria-label="Log out"
            size="sm"
            className="w-full"
            disabled={isPending}
            onClick={handleLogout}
          >
            {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Log out
          </Button>
      ) : (
        <Skeleton
          className={cn(
            buttonVariants({ size: "sm" }),
            "w-full bg-muted text-muted-foreground"
          )}
        >
          Log out
        </Skeleton>
      )}
      <Button
        aria-label="Go back to the previous page"
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => router.back()}
        disabled={isPending}
      >
        Go back
      </Button>
    </div>
  )
}
