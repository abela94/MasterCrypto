import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function SocialMedia() {
  return (
    <section className="py-10 bg-secondary/10">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Connect with Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://twitter.com/MasterCrypto" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://facebook.com/MasterCrypto" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            <Facebook size={24} />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="https://instagram.com/MasterCrypto" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://linkedin.com/company/MasterCrypto" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}

