"use client"

import * as React from "react"
import { redirect, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import axios from "axios"

import { authSchema } from "@/lib/validations/auth"
import { Button, buttonVariants } from "@/components/ui/button"
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
import { env } from "@/env.mjs"
import { AuthContext } from "@/context/auth-context"
import { toast } from "sonner"
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from "@/lib/utils"

type Inputs = z.infer<typeof authSchema>

export function SignInForm() {
  const [isPending, startTransition] = React.useTransition()

  const router = useRouter()
  const authContext = React.useContext(AuthContext)
  if (authContext.user) redirect("/")

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        const response = await axios.post(env.NEXT_PUBLIC_API_URL + "/login", {
          email: data.email,
          password: data.password
        }, {
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.status === 200) {
          authContext.setIsAuth!(true)
          authContext.setAccessToken!(response.data.access)
          authContext.setRefreshToken!(response.data.refresh)
          authContext.setUser!(response.data)
          redirect(`${window.location.origin}`)
        }
      } catch (e) {
        console.log(e)
        toast.message("Something went wrong", {
          description: `${e}`,
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4 w-80"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="rodneymullen180@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
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
          Sign in
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  )
}
