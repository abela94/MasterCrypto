"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

export default function SubscriptionPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [mounted, setMounted] = useState(false)

  const isRegistered = () => {
    return localStorage.getItem('subscribed') === 'true'
  }

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined' && !isRegistered()) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!mounted) {
    return null
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (email) {
      try {
        const response = await fetch('https://mastercrypto.org/register-email/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`)
        }

        const data = await response.json()
        console.log('Registration successful:', data)
        localStorage.setItem('subscribed', 'true')
        setIsVisible(false)
      } catch (error) {
        console.error('There was a problem with the registration request:', error)
      }
    } else {
      console.error("Email cannot be empty")
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Subscribe to MasterCrypto
                <Button variant="ghost" size="icon" onClick={handleClose}>
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Stay updated with the latest crypto trends and insights!</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

