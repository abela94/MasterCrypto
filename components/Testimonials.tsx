"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Crypto Enthusiast",
    content: "MasterCrypto's airdrop listings have been a game-changer for me. I've discovered so many exciting new projects and tokens!",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Blockchain Developer",
    content: "As a developer, I appreciate the comprehensive information MasterCrypto provides about each airdrop. It helps me evaluate projects quickly.",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Crypto Investor",
    content: "Thanks to MasterCrypto's airdrop alerts, I've never missed an opportunity. The platform has significantly boosted my crypto portfolio.",
    image: "https://i.pravatar.cc/150?img=3"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="max-w-3xl mx-auto">
                <CardContent className="p-6 flex items-center">
                  <div className="flex-shrink-0 mr-6">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full border-4 border-primary shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-lg mb-4 italic">&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
                    <p className="font-bold text-primary">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-0 transform -translate-y-1/2"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-0 transform -translate-y-1/2"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

