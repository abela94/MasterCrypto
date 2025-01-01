import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const trendingAirdrops = [
  { id: 1, name: 'DeFi Token', category: 'DeFi', endDate: '2023-07-31', participants: 15000 },
  { id: 2, name: 'GameFi Coin', category: 'Gaming', endDate: '2023-08-15', participants: 22000 },
  { id: 3, name: 'MetaToken', category: 'Metaverse', endDate: '2023-08-07', participants: 18500 },
]

export default function TrendingAirdrops() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Trending Airdrops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingAirdrops.map((airdrop) => (
            <Card key={airdrop.id}>
              <CardHeader>
                <CardTitle>{airdrop.name}</CardTitle>
                <Badge>{airdrop.category}</Badge>
              </CardHeader>
              <CardContent>
                <p>Ends: {airdrop.endDate}</p>
                <p>Participants: {airdrop.participants.toLocaleString()}</p>
                <Button className="mt-4">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

