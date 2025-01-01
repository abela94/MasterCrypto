"use client"

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const policies = {
  terms: {
    title: "Terms of Service",
    content: `Terms of Service
Welcome to MasterCrypto. By accessing or using our platform, you agree to be bound by the following Terms of Service:

Acceptance of Terms:
By using MasterCrypto, you agree to comply with these terms. If you do not agree, please discontinue using our services.

Use of Platform:

You must be at least 18 years old or have parental consent to use our platform.
You agree not to engage in unauthorized activities such as hacking, spamming, or misrepresentation.
User Accounts:

You are responsible for maintaining the confidentiality of your account credentials.
Notify us immediately if you suspect unauthorized access to your account.
Content and Intellectual Property:

Content on MasterCrypto is for informational purposes and is not financial or legal advice.
You may not copy, modify, or distribute our content without permission.
Disclaimer of Warranties:

We do not guarantee the accuracy or reliability of the information on our platform.
Use our platform at your own risk.
Limitation of Liability:

MasterCrypto is not responsible for losses incurred while using our services.
Modifications:
We reserve the right to modify these terms at any time. Continued use of the platform signifies your acceptance of changes.

Termination:
We may suspend or terminate your access if you violate these terms.`
  },
  privacy: {
    title: "Privacy Policy",
    content: `Privacy Policy
MasterCrypto is committed to protecting your personal information. This Privacy Policy outlines how we handle your data:

Information We Collect:

Personal Information: When you create an account or contact us, we may collect your name, email, and other relevant details.
Usage Data: Information about how you interact with our platform, including IP addresses and cookies.
How We Use Your Information:

To provide and improve our services.
To communicate with you about updates or support.
To comply with legal obligations.
Data Sharing:

We do not sell your personal information to third parties.
We may share data with trusted partners for service delivery or compliance purposes.
Data Security:

We implement security measures to protect your information.
However, no system is completely secure; use our platform with caution.
Your Rights:

Access, correct, or delete your data by contacting us.
Opt-out of marketing communications at any time.
Policy Updates:

This Privacy Policy may be updated periodically. Continued use of our platform constitutes acceptance of changes.`
  },
  cookie: {
    title: "Cookie Policy",
    content: `Cookie Policy
MasterCrypto uses cookies to enhance your experience. This Cookie Policy explains how and why we use cookies:

What Are Cookies?

Cookies are small files stored on your device to improve functionality and user experience.
Types of Cookies We Use:

Essential Cookies: Required for basic functionality of the platform.
Performance Cookies: Help us understand how users interact with the platform.
Marketing Cookies: Used to deliver relevant advertisements.
How We Use Cookies:

To keep you signed in.
To track usage patterns and preferences.
To personalize content and advertisements.
Managing Cookies:

You can manage or disable cookies through your browser settings. However, this may affect functionality.
Third-Party Cookies:

We may use third-party services like analytics tools, which also use cookies.
Consent:
By using our platform, you consent to our use of cookies as outlined in this policy.`
  }
}

export default function PolicyPopups() {
  const [openPolicy, setOpenPolicy] = useState<keyof typeof policies | null>(null)

  useEffect(() => {
    // Check if policies have been accepted before
    const policiesAccepted = localStorage.getItem('policiesAccepted')
    if (!policiesAccepted) {
      setOpenPolicy('cookie')
    }
  }, [])

  const handleAccept = () => {
    if (openPolicy === 'cookie') {
      setOpenPolicy('privacy')
    } else if (openPolicy === 'privacy') {
      setOpenPolicy('terms')
    } else {
      setOpenPolicy(null)
      localStorage.setItem('policiesAccepted', 'true')
    }
  }

  return (
    <>
      {Object.entries(policies).map(([key, policy]) => (
        <Dialog key={key} open={openPolicy === key} onOpenChange={() => setOpenPolicy(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{policy.title}</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              {policy.content}
            </DialogDescription>
            <DialogFooter>
              <Button onClick={handleAccept}>Accept</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </>
  )
}

