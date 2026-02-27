import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CaretDown, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

const carouselItems = [
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dw3lf8roj/video/upload/v1772178520/lobby-clip-edited_auufuw.mp4',
    alt: 'Hotel O Colonial Inn - Main Cover'
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1772179239/grok-image-72ba5cd1-a88d-43dd-a88b-1e4c7de13392_q2r0ei.jpg',
    alt: 'Hotel O Colonial Inn Building'
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1772177059/Screenshot_20260226_073936_meilbo.png',
    alt: 'Hotel O Colonial Inn'
  },
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dw3lf8roj/video/upload/v1772177730/grok-video-285aa30a-b4b8-49ce-882a-09e4fe1608f9_lkps7v.mp4',
    alt: 'Hotel Lobby Video'
  }
]

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

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

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.play()
        } else {
          video.pause()
        }
      }
    })
  }, [currentSlide])

  const handleScrollToNext = () => {
    const element = document.querySelector('#story')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 parallax-bg"
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.type === 'video' ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el
                }}
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ height: '120%' }}
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ height: '120%' }}
              />
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40" />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <CaretLeft size={32} weight="bold" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <CaretRight size={32} weight="bold" />
      </button>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Hotel O Colonial Inn
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
