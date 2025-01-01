"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'

// Mock data for top performing cryptos
const mockCryptos = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 35000, change: 5.2, marketCap: 650000000000 },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 2000, change: -2.1, marketCap: 230000000000 },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 1.2, change: 10.5, marketCap: 40000000000 },
]

export default function TopPerformingCryptos() {
  const [cryptos, setCryptos] = useState(mockCryptos)

  useEffect(() => {
    // Here you would typically fetch real-time data from an API
    // For this example, we'll just use the mock data
    const interval = setInterval(() => {
      setCryptos(cryptos.map(crypto => ({
        ...crypto,
        price: crypto.price * (1 + (Math.random() - 0.5) * 0.01),
        change: crypto.change + (Math.random() - 0.5) * 0.5,
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Top Performing Cryptocurrencies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cryptos.map((crypto) => (
            <Card key={crypto.id}>
              <CardHeader>
                <CardTitle>{crypto.name} ({crypto.symbol})</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">${crypto.price.toFixed(2)}</p>
                <p className={`flex items-center ${crypto.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.change > 0 ? <ArrowUpIcon className="mr-1" /> : <ArrowDownIcon className="mr-1" />}
                  {Math.abs(crypto.change).toFixed(2)}%
                </p>
                <p>Market Cap: ${(crypto.marketCap / 1e9).toFixed(2)}B</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

