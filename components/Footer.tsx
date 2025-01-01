"use client"
import Link from 'next/link'
import { Twitter, Facebook, Instagram, Linkedin, InstagramIcon as TiktokIcon,Youtube } from 'lucide-react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
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
    <footer className="bg-secondary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#welcome-video" className="hover:text-primary transition">About Us</Link></li>
              {/* <li><Link href="/careers" className="hover:text-primary transition">Careers</Link></li> */}
              <li><Link href="/blog" className="hover:text-primary transition">News</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="#upcoming-airdrops" className="hover:text-primary transition">Airdrops</Link></li>
              {/* <li><Link href="/portfolio" className="hover:text-primary transition"></Link></li> */}
              <li><Link href="#market-trends" className="hover:text-primary transition">Price Alerts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-primary transition">Blog</Link></li>
              <li><Link href="/hero" className="hover:text-primary transition">Learn</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-primary transition">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://x.com/al_habeshee?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://t.me/mastercryptoet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
            <span className="sr-only">Telegram</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@master_crypto_et?_t=8sTdbeXZxQM&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
            <span className="sr-only">Instagram</span>
            <FontAwesomeIcon icon={faTiktok} className="h-6 w-6" />
          </a>
          <a href="https://youtube.com/@mastercrypto-pl3ub?si=Cd5RHhbDQg7YttdA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
            <span className="sr-only">TikTok</span>
            <Youtube className="h-6 w-6" />
          </a>
          {/* <a href="https://linkedin.com/company/MasterCrypto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://warpcast.com/MasterCrypto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
            <span className="sr-only">Warpcast</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
          </a> */}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-500 mt-4">© {new Date().getFullYear()} MasterCrypto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

