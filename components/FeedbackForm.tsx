"use client"

// import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from 'react'
export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [toast, setToast] = useState({ show: false, message: "", type: "success" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }
  const [mounted, setMounted] = useState(false)
  // ... other state variables

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading placeholder
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("https://mastercrypto.onrender.com/feedback/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setToast({ show: true, message: "Thank you for your feedback!", type: "success" })
        setFormData({ name: "", email: "", message: "" })
      } else {
        const errorData = await response.json()
        setToast({ show: true, message: errorData.error || "Failed to send feedback.", type: "error" })
      }
    } catch (error) {
      console.error("Error submitting feedback:", error)
      setToast({ show: true, message: "An unexpected error occurred.", type: "error" })
    }

    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000) // Hide toast after 3 seconds
  }

  return (
    <section className="py-20 bg-secondary/10 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">We Value Your Feedback</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit">Submit Feedback</Button>
        </form>
      </div>
      {toast.show && (
        <div
          className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {toast.message}
        </div>
      )}
    </section>
  )
}
