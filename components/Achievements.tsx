"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trophy, Rocket } from 'lucide-react'

interface Achievement {
  id: number
  title: string
  description: string
  requiredScore: number
  reward: string
  icon: React.ElementType
}

const userAchievements: Achievement[] = [
  { id: 1, title: "Novice Explorer", description: "Join your first airdrop", requiredScore: 1, reward: "1 potential airdrop revealed", icon: Trophy },
  { id: 2, title: "Airdrop Enthusiast", description: "Join 5 airdrops", requiredScore: 5, reward: "3 potential airdrops revealed", icon: Trophy },
  { id: 3, title: "Crypto Adventurer", description: "Join 10 airdrops", requiredScore: 10, reward: "5 potential airdrops revealed", icon: Trophy },
  { id: 4, title: "Airdrop Master", description: "Join 25 airdrops", requiredScore: 25, reward: "10 potential airdrops revealed", icon: Trophy },
  { id: 5, title: "Legendary Collector", description: "Join 50 airdrops", requiredScore: 50, reward: "All potential airdrops revealed", icon: Trophy },
]

const MasterCryptoAchievements: Achievement[] = [
  { id: 6, title: "Rising Star", description: "MasterCrypto lists 100 airdrops", requiredScore: 100, reward: "5 exclusive airdrops revealed", icon: Rocket },
  { id: 7, title: "Airdrop Central", description: "MasterCrypto lists 500 airdrops", requiredScore: 500, reward: "10 exclusive airdrops revealed", icon: Rocket },
  { id: 8, title: "Crypto Paradise", description: "MasterCrypto lists 1000 airdrops", requiredScore: 1000, reward: "20 exclusive airdrops revealed", icon: Rocket },
]

export default function Achievements({ userScore = 0, MasterCryptoScore = 0 }: { userScore?: number, MasterCryptoScore?: number }) {
  const [score, setScore] = useState(userScore)
  const [hubScore, setHubScore] = useState(MasterCryptoScore)

  useEffect(() => {
    setScore(userScore)
    setHubScore(MasterCryptoScore)
  }, [userScore, MasterCryptoScore])

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Achievements</h2>
      <p className="text-muted-foreground">Unlock achievements to reveal potential airdrops!</p>
      <h3 className="text-2xl font-semibold mt-8">Your Achievements</h3>
      {userAchievements.map((achievement) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <achievement.icon className={`mr-2 h-5 w-5 ${score >= achievement.requiredScore ? 'text-yellow-500' : 'text-gray-400'}`} />
                {achievement.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{achievement.description}</p>
              <p className="text-sm text-muted-foreground mb-2">Reward: {achievement.reward}</p>
              <Progress value={(score / achievement.requiredScore) * 100} max={100} className="h-2" />
              <p className="text-sm text-right mt-1">
                {Math.min(score, achievement.requiredScore)} / {achievement.requiredScore}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
      <h1 className="text-2xl font-semibold mt-8">Our Achievements</h1>
      {MasterCryptoAchievements.map((achievement) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <achievement.icon className={`mr-2 h-5 w-5 ${hubScore >= achievement.requiredScore ? 'text-blue-500' : 'text-gray-400'}`} />
                {achievement.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{achievement.description}</p>
              <p className="text-sm text-muted-foreground mb-2">Reward: {achievement.reward}</p>
              <Progress value={(hubScore / achievement.requiredScore) * 100} max={100} className="h-2" />
              <p className="text-sm text-right mt-1">
                {Math.min(hubScore, achievement.requiredScore)} / {achievement.requiredScore}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

