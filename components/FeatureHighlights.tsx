"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, PieChart, TrendingUp, Shield } from 'lucide-react'
import { useState, useEffect } from 'react'
  const features = [
  { 
    icon: BarChart2, 
    title: 'Airdrop Analytics', 
    description: 'Track and analyze the performance of various airdrops with real-time data and insights.' 
  },
  { 
    icon: PieChart, 
    title: 'Airdrop Management', 
    description: 'Efficiently manage and keep track of multiple airdrop campaigns and rewards in one place.' 
  },
  { 
    icon: TrendingUp, 
    title: 'Trending Airdrops', 
    description: 'Stay up-to-date with the most promising and trending airdrops across the crypto space.' 
  },
  { 
    icon: Shield, 
    title: 'Secure Participation', 
    description: 'Join airdrops with confidence, knowing your personal information and assets are protected.' 
  }
]



export default function FeatureHighlights() {
    const [mounted, setMounted] = useState(false)
  // ... other state variables

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading placeholder
  }
  return (
    <section id="why-choose-us" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Why Choose MasterCrypto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

