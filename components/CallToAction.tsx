"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Move localStorage check here
    if (typeof window !== 'undefined') {
      setIsSubscribed(localStorage.getItem("subscribed") === 'true')
    }
  }, [])

  if (!mounted) {
    return null // or a loading placeholder
  }

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to elevate your Earning with Airdrop?</h2>
        <p className="text-xl mb-8">Join MasterCrypto today and access Potential Airdrops.</p>
        <Link href='/'>
          <Button size="lg" variant="secondary">
            {isSubscribed ? "Learn More Now" : "Join Us Now"}
          </Button>
        </Link>
      </div>
    </section>
  )
}

