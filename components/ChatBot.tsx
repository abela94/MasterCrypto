"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {  Send, X,Bot } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Linkify from 'react-linkify';
interface Message {
  text: string
  isUser: boolean
}
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleSend = async () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, isUser: true }])
      setInput('')
      
      try {
        const response = await fetch('http://localhost:8000/chat/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input })
        })
        
        if (!response.ok) throw new Error('Failed to get response')
        
        const data = await response.json()
        setMessages(prev => [...prev, { text: data.answer, isUser: false }])
      } catch (error) {
        console.error('Error:', error)
        setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting to the server. Please try again later.", isUser: false }])
      }
    }
  }
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

  return (
    <>
     <Button
  style={{ height: '10%', width: '5%', borderRadius: '1000px' }}
  className="fixed bottom-4 right-4 rounded-full p-4"
  onClick={() => setIsOpen((prev) => !prev)}
>
  <Bot 
    style={{ height: '2em', width: '2em' }} // Change size here
  />
</Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 sm:w-96"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  AI Customer Support
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 overflow-y-auto mb-4">
                  <div
                      style={{backgroundColor:'#2b2b2b'}}
                      className={`mb-2 p-2 rounded-lg `}
                    >
                      How can i Help You Today ?
                    </div>
                  {messages.map((message, index) => (
                    
                    <div
                      key={index}
                      className={`mb-2 p-2 rounded-lg ${
                        message.isUser ? 'bg-primary text-primary-foreground ml-auto' : 'bg-secondary'
                      } max-w-[80%] ${message.isUser ? 'ml-auto' : 'mr-auto'}`}
                    >
                      <p style={{ whiteSpace: 'pre-wrap'}}><Linkify componentDecorator={componentDecorator}>{message.text}</Linkify></p>
                    </div>
                   
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                <div className="flex">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-grow mr-2"
                  />
                  <Button onClick={handleSend}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

