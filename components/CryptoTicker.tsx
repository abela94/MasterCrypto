"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

interface Crypto {
  id: string
  name: string
  symbol: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
}

export default function CryptoTicker() {
  const [cryptos, setCryptos] = useState<Crypto[]>([])

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        const data = await response.json()
        setCryptos(data)
      } catch (error) {
        console.error('Error fetching crypto data:', error)
      }
    }

    fetchCryptos()
    const interval = setInterval(fetchCryptos, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-secondary/10 py-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Top Cryptocurrencies
        </motion.h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {cryptos.map((crypto, index) => (
            <motion.div
              key={crypto.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex-shrink-0 w-64">
                <CardContent className="p-4">
                  <h3 className="font-bold">{crypto.name} ({crypto.symbol.toUpperCase()})</h3>
                  <p className="text-lg">${crypto.current_price.toLocaleString()}</p>
                  <p className={crypto.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}>
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Market Cap: ${(crypto.market_cap / 1e9).toFixed(2)}B
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

