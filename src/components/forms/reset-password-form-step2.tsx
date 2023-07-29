"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
// import { useRouter } from 'next/router'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"
import { env } from "@/env.mjs"

import { resetPasswordSchema } from "@/lib/validations/auth"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { PasswordInput } from "@/components/password-input"
import axios from "axios"

type Inputs = z.infer<typeof resetPasswordSchema>

export function ResetPasswordStep2Form({ params }: { params: { slug: string } }) {

  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })
  function onSubmit(data: Inputs) {

    startTransition(async () => {
      try {
        const response = await axios.post(`${env.NEXT_PUBLIC_API_URL}/login/reset-password/${params.slug}`, {
          password1: data.password,
          password2: data.confirmPassword
        })
        if (response.status === 200){
          toast.success("Password Reset Successful")
          router.push("/signin")
        }
      } catch (err) {
        console.log(err)
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="*********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="*********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Reset password
          <span className="sr-only">Reset password</span>
        </Button>
      </form>
    </Form>
  )
}
