import { useState } from 'react'
import { House, List, X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/ThemeToggle'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#story', label: 'Our Story' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#dining', label: 'Dining & Attractions' },
  { href: '#gallery', label: 'Gallery' },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  const handleNavClick = (href: string) => {
    setActiveSection(href)
    setMobileOpen(false)
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
          >
            <House size={28} weight="fill" className="text-primary transition-colors group-hover:text-secondary" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-primary leading-none">Hotel O Colonial Inn</span>
              <span className="text-xs text-muted-foreground leading-none mt-0.5">Brownsville, Texas</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors relative group ${
                  activeSection === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform origin-left ${
                  activeSection === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button 
              onClick={() => handleNavClick('#book')}
              className="bg-primary hover:bg-secondary hover:text-foreground transition-colors"
            >
              Book Your Stay
            </Button>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <List size={28} weight="bold" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left text-lg font-medium transition-colors ${
                      activeSection === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <Button 
                  onClick={() => handleNavClick('#book')}
                  className="bg-primary hover:bg-secondary hover:text-foreground mt-4"
                >
                  Book Your Stay
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
