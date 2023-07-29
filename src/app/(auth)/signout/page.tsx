import { LogOutButtons } from "@/components/auth/logout-buttons"
import { Header } from "@/components/header"

// Running out of edge function execution units on vercel free plan
// export const runtime = "edge"

export default function SignOutPage() {
  return (
    <div className="max-w-xs">
      <Header
        title="Sign out"
        description="Are you sure you want to sign out?"
        size="sm"
        className="text-center"
      />
      <LogOutButtons />
    </div>
  )
}
