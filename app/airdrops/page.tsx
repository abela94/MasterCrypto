"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
interface Airdrop {
  id: number
  name: string
  token_symbol: string
  description: string
  image: string
  date: string
  reward_date: string
  status: 'upcoming' | 'ongoing' | 'ended'
}

const AirdropsPage: React.FC = () => {
  const [airdrops, setAirdrops] = useState<Airdrop[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // State for filters
  const [searchName, setSearchName] = useState<string>("")
  const [statusFilter, setStatusFilter] = useState<string>("")

  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const response = await fetch('https://mastercrypto.org/airdrops/')
        if (!response.ok) {
          throw new Error('Failed to fetch airdrops')
        }
        const data = await response.json()
        setAirdrops(data)
      } catch (err) {
        setError('Failed to load airdrops. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchAirdrops()
  }, [])

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>
  }

  // Filter logic
  const filteredAirdrops = airdrops.filter((airdrop) =>
    airdrop.name.toLowerCase().includes(searchName.toLowerCase()) &&
    (statusFilter === "" || airdrop.status === statusFilter)
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Airdrops</h1>

      {/* Filters */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border p-2 rounded w-full mb-4"
          style={{width:'50%'}}
        />
        <select
        style={{width:'70%'}}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="" className="border p-2 rounded w-full">All Statuses</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
          <option value="ended">Ended</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAirdrops.map((airdrop) => (
          <Card key={airdrop.id}>
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
              <p className="text-muted-foreground mb-4">{airdrop.description.substring(0, 100)}...</p>
              <div className="flex justify-between items-center text-sm mb-4">
                <span>Start: {new Date(airdrop.date).toLocaleDateString()}</span>
                <span>End: {new Date(airdrop.reward_date).toLocaleDateString()}</span>
              </div>
              <div className={`text-sm font-semibold mb-4 ${
                airdrop.status === 'upcoming' ? 'text-blue-500' :
                airdrop.status === 'ongoing' ? 'text-green-500' : 'text-red-500'
              }`}>
                Status: {airdrop.status.charAt(0).toUpperCase() + airdrop.status.slice(1)}
              </div>
              <Button asChild className="w-full">
                <Link href={`/airdrops/${airdrop.id}`}>
                  View Details
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AirdropsPage
