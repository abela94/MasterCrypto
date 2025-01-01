"use client"

import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question:"What is MasterCrypto",
    answer:"MasterCrypto is the best platform to find and join the latest airdrops. Get free tokens and coins by participating in airdrops from the top crypto projects"
  },
  {
    question: "What is an airdrop in cryptocurrency?",
    answer: "An airdrop in cryptocurrency refers to the distribution of free tokens or coins to multiple wallet addresses. It's often used as a marketing strategy to promote awareness and adoption of a new cryptocurrency project."
  },
  {
    question: "How do I participate in an airdrop?",
    answer: "To participate in an airdrop, you typically need to complete specific tasks such as joining a Telegram group, following social media accounts, or signing up on the project's platform. After completing the required actions, you'll receive free tokens or coins in your wallet."
  },
  {
    question: "What do I need to qualify for an airdrop?",
    answer: "The requirements to qualify for an airdrop can vary. Common requirements include having a cryptocurrency wallet, joining certain social media groups or channels, completing forms, or sharing project-related content. Always check the specific instructions provided by the project."
  },
  {
    question: "How do I find airdrops on MasterCrypto?",
    answer: "On MasterCrypto, you can find airdrops by visiting the Airdrops section of the platform. We list all the ongoing and upcoming airdrops, along with the details and instructions on how to participate."
  },
  {
    question: "Are airdrops safe?",
    answer: "Airdrops are generally safe, but caution should always be exercised. Avoid sharing sensitive information or participating in suspicious airdrops. Make sure to do research and ensure the legitimacy of the project before participating."
  },
  {
    question: "Do I need to pay for an airdrop?",
    answer: "Legitimate airdrops are usually free, and you should never be asked to pay in order to receive tokens. Be cautious of scams that ask for payment or private keys in exchange for free airdrops."
  },
  {
    question: "How long does it take to receive tokens from an airdrop?",
    answer: "The time it takes to receive tokens from an airdrop can vary depending on the project. It can take anywhere from a few days to a few weeks. Always follow up on the project's communication channels for updates."
  }
]
export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger onClick={() => setOpenItem(openItem === `item-${index}` ? null : `item-${index}`)}>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

