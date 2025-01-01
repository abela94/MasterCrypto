"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Logo from '@/components/ui/logo.png'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    setIsSubscribed(localStorage.getItem("subscribed") === 'true')
  }, [])
  
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href')?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src={Logo} alt="MasterCrypto Logo" width={48} height={48} className="h-12 w-12 rounded-full" />
            </Link>
            <div className="hidden sm:ml-auto sm:flex sm:space-x-8" style={{ marginLeft: '55%' }}>
              <a href="#hero" className="text-foreground hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium">
                Home
              </a>
              <a href="#welcome-video" className="text-foreground hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium">
                About
              </a>
              <a href="#market-trends" className="text-foreground hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium">
                Market
              </a>
              <a href="#upcoming-airdrops" className="text-foreground hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium">
                Airdrops
              </a>
              <Link href="/blog" className="text-foreground hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium">
                Blog
              </Link>
              <Link href="/faq" className="text-foreground hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium">
                FAQ
              </Link>
              <a href="#why-choose-us" className="text-foreground hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium">
                Services
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {!isSubscribed ? (
              <Button>Join Us Now</Button>
            ) : null}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#hero" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Home
            </a>
            <a href="#welcome-video" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              About
            </a>
            <a href="#market-trends" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Market
            </a>
            <a href="#upcoming-airdrops" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Airdrops
            </a>
            <Link href="/airdrops" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              All Airdrops
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Blog
            </Link>
            <Link href="/faq" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              FAQ
            </Link>
            <a href="#why-choose-us" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">
              Services
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="flex items-center px-4">
              {!isSubscribed ? (
              <Button>Join Us Now</Button>
            ) : null}
              <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
