import { type Metadata } from "next"
import { env } from "@/env.mjs"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ResetPasswordStep2Form } from "@/components/forms/reset-password-form-step2"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Reset Password",
  description: "Enter your email to reset your password",
}

export default function ResetPasswordStep2Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-96 max-w-2xl">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Reset password</CardTitle>
          <CardDescription>
            Enter new password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResetPasswordStep2Form params={{
            slug: params.slug
          }}/>
        </CardContent>
      </Card>
    </div>
  )
}
