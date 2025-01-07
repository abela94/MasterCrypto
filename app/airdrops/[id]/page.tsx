"use client"

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Airdrop } from '@/types/airdrop'
import { CalendarDays, DollarSign, Users, LinkIcon, Twitter, TextIcon as Telegram, DiscIcon as Discord } from 'lucide-react'
import Image from 'next/image'
import Linkify from 'react-linkify';
function CountdownTimer({ endDate }: { endDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const end = new Date(endDate).getTime()
      const difference = end - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="bg-secondary rounded-lg p-2">
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-xs uppercase">{key}</div>
        </div>
      ))}
    </div>
  )
}

export default function AirdropDetailPage() {
  const { id } = useParams()
  const [airdrop, setAirdrop] = useState<Airdrop | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
const componentDecorator = (href:string, text:string, key:number) => (
  <a
    href={href}
    key={key}
    className="text-blue-500 underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

  useEffect(() => {
    const fetchAirdrop = async () => {
      try {
        const response = await fetch(`https://mastercrypto.org/airdrops/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch airdrop')
        }
        const data = await response.json()
        setAirdrop(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchAirdrop()
  }, [id])

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  if (!airdrop) {
    return <div className="flex justify-center items-center h-screen">Airdrop not found</div>
  }

  const fundRaisedPercentage = airdrop.total_fund_goal 
  ? (airdrop.fund_raised / airdrop.total_fund_goal) * 100 
  : 0

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-64 rounded-xl overflow-hidden mb-8">
        <Image src={airdrop.image} alt={airdrop.name} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{airdrop.name}  Airdrop</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Airdrop Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3" style={{display:'grid', padding :'5px'}}>
                <TabsTrigger value="overview">Overview  </TabsTrigger>
                <TabsTrigger value="participation">How to Participate   </TabsTrigger>
                <TabsTrigger value="about">About Project</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="space-y-4">
                  <p><strong>Description :</strong><Linkify componentDecorator={componentDecorator}>{airdrop.description}</Linkify></p>
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <span><strong>Start Date :</strong> {airdrop.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <span><strong>End Date :</strong> {airdrop.reward_date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span><strong>Cost :</strong> ${airdrop.cost}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span><strong>Backed By :</strong> {airdrop.backers}</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="participation">
                <ol className="list-decimal list-inside space-y-4">
                  {airdrop.steps.map((step, index) => (
                  <li key={index} className="space-y-2" value='hidden'>
                    <h2>Step {index + 1}</h2>
                    <p style={{ whiteSpace: 'pre-wrap'}}><Linkify componentDecorator={componentDecorator}>{step.description}</Linkify></p>
                    <Image src={step.image} alt={`Step ${index + 1}`} width={10000} height={10000} style={{ height: '10%', width: '100%' }} />
                  </li>
                  ))}
                </ol>
                <div className="mt-4 space-x-4">
              <Button 
  asChild 
  disabled={!airdrop.eligibility_checker} // Disable button if the link is empty
  style={{
    backgroundColor: !airdrop.eligibility_checker ? "gray" : "color-primary",
    cursor: !airdrop.eligibility_checker ? "not-allowed" : "pointer",
  }}
>
  {airdrop.eligibility_checker ? (
    <a href={airdrop.eligibility_checker} target="_blank" rel="noopener noreferrer">
      Check Eligibility
    </a>
  ) : (
    <span>Check Eligibility</span> // Display text instead of a link
  )}
</Button>

<Button 
  asChild 
  disabled={!airdrop.claim_airdrop} // Disable button if the link is empty
  style={{
    backgroundColor: !airdrop.claim_airdrop ? "gray" : "color-primary",
    cursor: !airdrop.claim_airdrop ? "not-allowed" : "pointer",
  }}
>
  {airdrop.claim_airdrop ? (
    <a href={airdrop.claim_airdrop} target="_blank" rel="noopener noreferrer">
      Claim Airdrop
    </a>
  ) : (
    <span>Claim Airdrop</span> // Display text instead of a link
  )}
</Button>

                </div>
              </TabsContent>
              <TabsContent value="about">
                <p style={{ whiteSpace: 'pre-wrap'}}><Linkify componentDecorator={componentDecorator}>{airdrop.description}</Linkify></p>
                <div className="mt-4">
                  <Button asChild variant="outline">
                    <a href={airdrop.website} target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Visit Website
                    </a>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Airdrop Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{airdrop.status.charAt(0).toUpperCase() + airdrop.status.slice(1)}</div>
              {airdrop.status === 'upcoming' && (
                <div>
                  <div className="text-sm mb-2">Airdrop starts in:</div>
                  <CountdownTimer endDate={airdrop.start_date} />
                </div>
              )}
              {airdrop.status === 'ongoing' && (
                <div>
                  <div className="text-sm mb-2">Airdrop ends in:</div>
                  <CountdownTimer endDate={airdrop.reward_date} />
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fund Raised</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2" style={{color:'green'}}>
                ${airdrop.fund_raised?.toLocaleString() ?? '0'} M
              </div>
              {/* <Progress value={fundRaisedPercentage} className="h-2" />
              <div className="text-sm text-right mt-1">{fundRaisedPercentage.toFixed(2)}% Complete</div> */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                {airdrop.social_medias ==null ? '': airdrop.social_medias.twitter && (
                  <a href={ airdrop.social_medias.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-6 w-6 text-primary" />
                  </a>
                )}
                {airdrop.social_medias ==null ? '' : airdrop.social_medias.telegram  && (
                  <a href={airdrop.social_medias.telegram } target="_blank" rel="noopener noreferrer">
                    <Telegram className="h-6 w-6 text-primary" />
                  </a>
                )}
                {airdrop.social_medias ==null ? '' : airdrop.social_medias.discord && (
                  <a href={airdrop.social_medias.discord} target="_blank" rel="noopener noreferrer">
                    <Discord className="h-6 w-6 text-primary" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: `${airdrop.name} Airdrop`,
                text: airdrop.description,
                url: window.location.href,
              })
            } else {
              // Fallback for browsers that don't support Web Share API
              navigator.clipboard.writeText(window.location.href)
              alert('Link copied to clipboard!')
            }
          }}>
            Share This Airdrop
          </Button>
        </div>
      </div>
    </div>
  )
}

