"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock data for airdrops
const mockAirdrops = [
  { id: 1, name: 'TokenX', date: '2023-07-15', eligibility: 'Open', coinType: 'ERC-20' },
  { id: 2, name: 'CryptoY', date: '2023-07-20', eligibility: 'Whitelist', coinType: 'BEP-20' },
  { id: 3, name: 'BlockchainZ', date: '2023-07-25', eligibility: 'Holder', coinType: 'ERC-20' },
]

export default function AirdropSection() {
  const [airdrops, setAirdrops] = useState(mockAirdrops)
  const [filters, setFilters] = useState({ date: '', eligibility: '', coinType: '' })

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value })
    // Here you would typically call an API to fetch filtered results
    // For this example, we'll just filter the mock data
    const filteredAirdrops = mockAirdrops.filter(airdrop => 
      (!filters.date || airdrop.date >= filters.date) &&
      (!filters.eligibility || airdrop.eligibility === filters.eligibility) &&
      (!filters.coinType || airdrop.coinType === filters.coinType)
    )
    setAirdrops(filteredAirdrops)
  }

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Airdrops</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          <Input
            type="date"
            placeholder="Filter by date"
            onChange={(e) => handleFilterChange('date', e.target.value)}
            className="w-full sm:w-auto"
          />
          <Select onValueChange={(value) => handleFilterChange('eligibility', value)}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Eligibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="Whitelist">Whitelist</SelectItem>
              <SelectItem value="Holder">Holder</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => handleFilterChange('coinType', value)}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Coin Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ERC-20">ERC-20</SelectItem>
              <SelectItem value="BEP-20">BEP-20</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {airdrops.map((airdrop) => (
            <Card key={airdrop.id}>
              <CardHeader>
                <CardTitle>{airdrop.name}</CardTitle>
                <CardDescription>Date: {airdrop.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Eligibility: {airdrop.eligibility}</p>
                <p>Coin Type: {airdrop.coinType}</p>
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

