"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie'
import { Button } from "@/components/ui/button"
import { ArrowRight, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
// Import your Lottie JSON file
import cryptoAnimation from '@/components/ui/crypto.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Hero() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    setIsSubscribed(localStorage.getItem("subscribed") === 'true')
  }, [])

  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cryptoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <section id="hero" className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">MasterCrypto</span>
              <span className="block">Potential Airdrop Hunter</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              MasterCrypto is the best platform to find and join the latest airdrops. Get free tokens and coins by participating in airdrops from the top crypto projects
            </p>
            <div className="mt-10 flex space-x-4">
              {!isSubscribed ? (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Join Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ) : null}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button size="lg" variant="outline" className="bg-transparent border-white text-white dark:border-white dark:text-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white">
    Learn More
  </Button>
</motion.div>

            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px]"
          >
            <Lottie options={defaultOptions} height={400} width={400} style={{ position: 'absolute', top: 0, left: '20%', width: '75%', height: '100%' }} />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-6 p-8">
        <Link href="https://x.com/al_habeshee?s=21" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
          <Twitter className="h-8 w-8" />
        </Link>
        <Link href="https://t.me/mastercryptoet" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
          </svg>
        </Link>
        <Link href="https://www.tiktok.com/@master_crypto_et?_t=8sTdbeXZxQM&_r=1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
          <FontAwesomeIcon icon={faTiktok} style={{ fontSize: '2rem'}} className="h-8 w-8"/>
        </Link>
        <Link href="https://youtube.com/@mastercrypto-pl3ub?si=Cd5RHhbDQg7YttdA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
          <Youtube className="h-8 w-8" />
        </Link>
        {/* <Link href="https://linkedin.com/company/MasterCrypto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
          <Linkedin className="h-8 w-8" />
        </Link>
        <Link href="https://warpcast.com/MasterCrypto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
          </svg>
        </Link> */}
      </div>
    </section>
  )
}

