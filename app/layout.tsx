import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PolicyPopups from '@/components/PolicyPopups'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MasterCrypto - Potential Airdrops Marketplace',
  description: 'MasterCrypto is a platform that helps you discover and participate in the most promising airdrops across the crypto space.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  )
}

