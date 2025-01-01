import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PolicyPopups from '@/components/PolicyPopups'
import StructuredData from '@/components/structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mastercrypto.me'),
  title: {
    default: 'MasterCrypto - Potential Airdrops Marketplace',
    template: '%s | MasterCrypto'
  },
  description: 'MasterCrypto is a platform that helps you discover and participate in the most promising airdrops across the crypto space.',
  keywords: ['crypto', 'airdrops', 'cryptocurrency', 'blockchain', 'tokens','mastercrypto.org','mastercrypto','bitcoin','mastercrypto.me', 'mastercrypto me'],
  authors: [{ name: 'MasterCrypto Team' }],
  creator: 'MasterCrypto',
  publisher: 'MasterCrypto',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mastercrypto.me',
    siteName: 'MasterCrypto',
    title: 'MasterCrypto - Potential Airdrops Marketplace',
    description: 'Discover and participate in the most promising crypto airdrops',
    images: [
      {
        url: 'https://i.imgur.com/uJAAW0r.png',
        width: 1200,
        height: 630,
        alt: 'MasterCrypto - Potential Airdrops Marketplace'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MasterCrypto - Potential Airdrops Marketplace',
    description: 'Discover and participate in the most promising crypto airdrops',
    images: ['https://i.imgur.com/uJAAW0r.png'],
    creator: '@MasterCryptoHQ'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://mastercrypto.me',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <PolicyPopups />
        </ThemeProvider>
        <StructuredData
          data={{
            "@type": "Organization",
            "name": "MasterCrypto",
            "url": "https://mastercrypto.me",
            "logo": "https://i.imgur.com/uJAAW0r.png",
            "sameAs": [
              "https://x.com/al_habeshee?s=21",
              "https://t.me/mastercryptoet",
              "https://youtube.com/@mastercrypto-pl3ub?si=Cd5RHhbDQg7YttdA"
            ]
          }}
        />
      </body>
    </html>
  )
}

