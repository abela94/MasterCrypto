"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for crypto news
const mockNews = [
  { id: 1, title: 'Bitcoin Reaches New All-Time High', date: '2023-07-10', source: 'CryptoNews' },
  { id: 2, title: 'Ethereum 2.0 Launch Date Announced', date: '2023-07-09', source: 'BlockchainToday' },
  { id: 3, title: 'New Regulations for Cryptocurrency Exchanges', date: '2023-07-08', source: 'CoinDesk' },
]

export default function CryptoNewsFeed() {
  const [news, setNews] = useState(mockNews)

  useEffect(() => {
    // Here you would typically fetch real-time news from an API
    // For this example, we'll just use the mock data
    const interval = setInterval(() => {
      setNews(prevNews => [
        {
          id: prevNews.length + 1,
          title: `New Crypto Trend Emerges - ${new Date().toLocaleDateString()}`,
          date: new Date().toISOString().split('T')[0],
          source: 'MasterCrypto'
        },
        ...prevNews.slice(0, 2)
      ])
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Crypto News</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Source: {item.source}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

