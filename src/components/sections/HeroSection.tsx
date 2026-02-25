import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CaretDown } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToNext = () => {
    const element = document.querySelector('#story')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '120%'
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            A Hidden Pocket of Mexico in the Heart of Historic Brownsville
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Where 170 years of architectural heritage meets the intimate warmth of Mexican hospitality,
            creating a sanctuary for travelers seeking authenticity in the borderlands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-secondary hover:text-foreground transition-colors text-lg px-8"
              onClick={handleScrollToNext}
            >
              Begin Your Story
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-8"
              onClick={() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Legacy
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-12"
        >
          <button 
            onClick={handleScrollToNext}
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
          >
            <span className="text-sm uppercase tracking-wider mb-2">Scroll to Discover</span>
            <CaretDown size={32} weight="bold" className="group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
