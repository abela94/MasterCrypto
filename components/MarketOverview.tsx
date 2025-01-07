"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Marquee from 'react-fast-marquee'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton"
import CountUp from 'react-countup'

interface Crypto {
  id: string
  name: string
  symbol: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
}

interface Airdrop {
  id: number
  name: string
  description: string
  date: string
  link: string
  cost: number
  status: 'ongoing' | 'upcoming' | 'ended'
  reward_date: string
  airdrop_confidentiality: 'confirmed' | 'not-confirmed'
  fund_raised: number
  backers: string
  website: string
  social_medias: Record<string, string>
  eligibility_checker: string
  claim_airdrop: string
  image: string
}

export default function MarketOverview() {
  const [cryptos, setCryptos] = useState<Crypto[]>([])
  const [airdrops, setAirdrops] = useState<Airdrop[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const [listedAirdrops, setListedAirdrops] = useState(0)
  const [revealedAirdrops, setRevealedAirdrops] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
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
    }
  }, [mounted])

  useEffect(() => {
    if (mounted) {
      const fetchUpcomingAirdrops = async () => {
        try {
          setLoading(true)
          const response = await fetch('https://mastercrypto.org/airdrops?status=upcoming')
          if (!response.ok) {
            throw new Error('Failed to fetch upcoming airdrops')
          }
          const data = await response.json()
          console.log(data)
          setAirdrops(data)
        } catch (error) {
          console.error('Error fetching upcoming airdrops:', error)
          setError('Failed to load airdrops. Please try again later.')
        } finally {
          setLoading(false)
        }
      }

      fetchUpcomingAirdrops()
    }
  }, [mounted])

  useEffect(() => {
    if (mounted) {
      // Simulating fetching the number of listed airdrops
      setListedAirdrops(150)
      // Calculate revealed airdrops based on some logic
      setRevealedAirdrops(Math.floor(150 / 50) * 5)
    }
  }, [mounted])

  if (!mounted) {
    return null // or a loading placeholder
  }

  return (
    <section className="py-16 bg-secondary/10">
      <div id="welcome-video" className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Welcome to MasterCrypto</h2>
        <div className="relative overflow-hidden pb-[35%] h-0 max-w-4xl mx-auto rounded-lg shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/erzVdnTaBKk"
            title="Welcome to Master Crypto"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div id="market-trends" className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-4">Current Market Trends</h2>
        <div className="bg-background/50 backdrop-blur-sm rounded-lg shadow-lg p-4">
          <Marquee gradient={false} speed={40} className="py-2">
            {cryptos.map((crypto) => (
              <div key={crypto.id} className="flex items-center mr-8 bg-background/80 rounded-full px-4 py-2 shadow-md">
                <span className="font-bold">{crypto.symbol.toUpperCase()}:</span>
                <span className="ml-2">${crypto.current_price.toLocaleString()}</span>
                <span className={`ml-2 ${crypto.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.price_change_percentage_24h > 0 ? <ArrowUpIcon className="inline h-4 w-4" /> : <ArrowDownIcon className="inline h-4 w-4" />}
                  {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div id="upcoming-airdrops" className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Upcoming Airdrops</h2>
        {error ? (
          <div className="text-center py-16 text-red-500">
            <p>{error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Try Again
            </Button>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="h-full">
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {airdrops.map((airdrop, index) => (
              <motion.div
                key={airdrop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="relative h-48">
                    <Image
                      src={`https://mastercrypto.org${airdrop.image}`}
                      alt={airdrop.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{airdrop.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                   <p className="text-sm text-muted-foreground mb-2">
  {airdrop.description.length > 30 ? airdrop.description.substring(0, 30) + "..." : airdrop.description}
</p>
                    <p className="text-sm">Cost: ${airdrop.cost}</p>
                    <p className="text-sm">Fund Raised: ${ airdrop.fund_raised ==null ? airdrop.fund_raised : airdrop.fund_raised.toLocaleString()}</p>
                    <p className="text-sm mb-4">Confidentiality: {airdrop.airdrop_confidentiality}</p>
                    <Button 
                      className="w-full"
                      onClick={() => router.push('/airdrops')}
                    >
                      See Detail
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
        <div className="mt-8 text-center">
          <Button 
            size="lg"
            onClick={() => router.push('/airdrops')}
          >
            See All Airdrops
          </Button>
        </div>
        <div className="mt-16 bg-secondary/10 p-6 rounded-lg text-center">
          <h1 className="text-2xl font-bold mb-4" style={{fontSize:'250%', fontWeight:'bold'}}>Our Achievements</h1>
          <h2 className="mb-4" style={{fontSize:'150%', fontWeight:'bold', color:'green'}}>
            <CountUp end={listedAirdrops} duration={2} separator="," /> + Airdrops
          </h2>
          <h1 className="text-2xl font-bold mb-4" style={{fontSize:'250%', fontWeight:'bold'}}>Earned Amount</h1>
          <h2 className="mb-4" style={{fontSize:'150%', fontWeight:'bold', color:'green'}}>
            $<CountUp end={100000} duration={2} separator="," /> +
          </h2>
        </div>
      </div>
    </section>
  )
}

