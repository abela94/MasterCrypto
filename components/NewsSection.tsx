import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const newsItems = [
  { id: 1, title: 'Bitcoin Reaches New All-Time High', date: '2023-07-15' },
  { id: 2, title: 'Major DeFi Protocol Launches Governance Token', date: '2023-07-14' },
  { id: 3, title: 'Ethereum 2.0 Upgrade: What You Need to Know', date: '2023-07-13' },
]

export default function NewsSection() {
  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Latest Crypto News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

