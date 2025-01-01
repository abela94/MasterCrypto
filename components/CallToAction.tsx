"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from 'react'
export default function CallToAction() {
   const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    setIsSubscribed(localStorage.getItem("subscribed") === 'true')
  }, [])
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to elevate your Earning with Airdrop ?</h2>
        <p className="text-xl mb-8">Join MasterCrypto today and access Potential Airdrops.</p>
        {!isSubscribed ? (
          <Link href='/'>
            <Button size="lg" variant="secondary">
              Join Us Now
            </Button>
          </Link>
        ) : (
          <Link href='/'>
          <Button size="lg" variant="secondary">
            Learn More Now
          </Button>
            </Link>
        )
        } 
      </div>
    </section>
  )
}