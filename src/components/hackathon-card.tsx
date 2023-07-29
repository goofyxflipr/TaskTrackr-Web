"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

import { Hackathon } from "@/types"
import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { registerForEvent } from "@/app/_actions/hackathons"
import { AuthContext } from '../context/auth-context';


interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Hackathon
  variant?: "default" | "switchable"
  onSwitch?: () => Promise<void>
}

export function ProjectCard({
  product,
  variant = "default",
  onSwitch,
  className,
  ...props
}: ProjectCardProps) {
  const [isPending, startTransition] = React.useTransition()
  const authContext = React.useContext(AuthContext)

  return (
    <Card
      className={cn("h-full overflow-hidden rounded-sm", className)}
      {...props}
    >
      <Link
        aria-label={`View ${product.name} details`}
        href={`/product/${product._id}`}
      >
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {product.banner_url ? (
              <Image
                src={
                  product.banner_url ?? "/images/product-placeholder.webp"
                }
                alt={product.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover"
                loading="lazy"
              />
            ) : (
              <div
                aria-label="Placeholder"
                role="img"
                aria-roledescription="placeholder"
                className="flex h-full w-full items-center justify-center bg-secondary"
              >
                <Icons.placeholder
                  className="h-9 w-9 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            )}
          </AspectRatio>
        </CardHeader>
      </Link>
      <Link
        aria-label={`View ${product.name} details`}
        href={`/product/${product._id}`}
      >
        <CardContent className="grid gap-2.5 p-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="line-clamp-5">
            {product.description}
          </CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="p-4">
        {/* {variant === "default" ? (
          <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <Link
              aria-label="Preview product"
              href={`/product-preview/${product._id}`}
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "h-8 w-full rounded-sm",
              })}
            >
              Preview
            </Link>
            <Button
              aria-label="Add to cart"
              size="sm"
              className="h-8 w-full rounded-sm"
              onClick={() => {
                startTransition(async () => {
                  try {
                    await registerForEvent({
                      bearerToken: authContext.accessToken,
                      hackathonId: product._id,
                      emails: [],
                      submissionUri: "",
                    })
                    toast.success("Added to cart.")
                  } catch (error) {
                    error instanceof Error
                      ? toast.error(error.message)
                      : toast.error("Something went wrong, please try again.")
                  }
                })
              }}
              disabled={isPending}
            >
              {isPending && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              Add to cart
            </Button>
          </div>
        ) : (
          <Button
            aria-label={isAddedToCart ? "Remove from cart" : "Add to cart"}
            size="sm"
            className="h-8 w-full rounded-sm"
            onClick={() => {
              startTransition(async () => {
                await onSwitch?.()
              })
            }}
            disabled={isPending}
          >
            {isPending ? (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : isAddedToCart ? (
              <Icons.check className="mr-2 h-4 w-4" aria-hidden="true" />
            ) : (
              <Icons.add className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            {isAddedToCart ? "Added" : "Add to cart"}
          </Button>
        )} */}
      </CardFooter>
    </Card>
  )
}
