"use client"

import { buttonVariants } from "@/components/ui/button"
import { env } from "@/env.mjs"
import { cn } from "@/lib/utils"
import axios from "axios"
import Link from "next/link"

export default function DashboardPage() {

  async function getActivePrograms() {
    try {
      const response = await axios.post(`${env.NEXT_PUBLIC_API_URL}/hackathons`+'',
        {
          headers: {
            Accept: "application/vnd.github+json",
          },
          next: {
            revalidate: 60,
          },
        }
      )
    } catch (error) {
      return null
    }
  }

  return (
    <div className="gap-12">
      <section
        id="featured-products"
        aria-labelledby="featured-products-heading"
        className="space-y-6"
      >
        {/* <div className="flex items-center">
          <h2 className="flex-1 text-2xl font-medium sm:text-3xl">
            Featured products
          </h2>
          <Link href="/products">
            <div
              className={cn(
                buttonVariants({
                  size: "sm",
                })
              )}
            >
              View all
              <span className="sr-only">View all products</span>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
          {/* {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
        {/* </div> */}
      </section>
    </div>
  )
}
