import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, Pause, SpeakerHigh } from '@phosphor-icons/react'

export function AudioOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [playingEnglish, setPlayingEnglish] = useState(false)
  const [playingSpanish, setPlayingSpanish] = useState(false)
  const englishAudioRef = useRef<HTMLAudioElement>(null)
  const spanishAudioRef = useRef<HTMLAudioElement>(null)

  const toggleEnglish = () => {
    if (englishAudioRef.current) {
      if (playingEnglish) {
        englishAudioRef.current.pause()
      } else {
        if (spanishAudioRef.current) {
          spanishAudioRef.current.pause()
          setPlayingSpanish(false)
        }
        englishAudioRef.current.play()
      }
      setPlayingEnglish(!playingEnglish)
    }
  }

  const toggleSpanish = () => {
    if (spanishAudioRef.current) {
      if (playingSpanish) {
        spanishAudioRef.current.pause()
      } else {
        if (englishAudioRef.current) {
          englishAudioRef.current.pause()
          setPlayingEnglish(false)
        }
        spanishAudioRef.current.play()
      }
      setPlayingSpanish(!playingSpanish)
    }
  }

  return (
    <section ref={ref} className="relative py-24 overflow-hidden soft-vignette-bg">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <SpeakerHigh size={20} weight="duotone" className="text-primary" />
            <span className="text-sm font-medium text-primary">Audio Introduction</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Discover Our Story
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Listen to a wonderful introduction that captures the beauty and heritage of Hotel O Colonial Inn
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
        >
          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🇺🇸</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">English Version</h3>
                <p className="text-sm text-muted-foreground">Brownsville's High-Tech Civil War Hotel</p>
              </div>
            </div>

            <audio
              ref={englishAudioRef}
              src="https://res.cloudinary.com/dw3lf8roj/video/upload/v1772406979/Brownsville_s_High-Tech_Civil_War_Hotel_avtvyy.mp4"
              onEnded={() => setPlayingEnglish(false)}
              onPause={() => setPlayingEnglish(false)}
              className="hidden"
            />

            <button
              onClick={toggleEnglish}
              className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {playingEnglish ? (
                <>
                  <Pause size={24} weight="fill" />
                  <span>Pause Audio</span>
                </>
              ) : (
                <>
                  <Play size={24} weight="fill" />
                  <span>Play Audio</span>
                </>
              )}
            </button>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Experience the captivating story in English
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-2xl">🇲🇽</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">Versión en Español</h3>
                <p className="text-sm text-muted-foreground">Secretos del Hotel O Colonial</p>
              </div>
            </div>

            <audio
              ref={spanishAudioRef}
              src="https://res.cloudinary.com/dw3lf8roj/video/upload/v1772406617/Secretos_del_Hotel_O_Colonial_en_Brownsville_yijfre.mp4"
              onEnded={() => setPlayingSpanish(false)}
              onPause={() => setPlayingSpanish(false)}
              className="hidden"
            />

            <button
              onClick={toggleSpanish}
              className="w-full flex items-center justify-center gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {playingSpanish ? (
                <>
                  <Pause size={24} weight="fill" />
                  <span>Pausar Audio</span>
                </>
              ) : (
                <>
                  <Play size={24} weight="fill" />
                  <span>Reproducir Audio</span>
                </>
              )}
            </button>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Disfruta la cautivadora historia en español
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            These audio overviews provide an intimate introduction to Hotel O Colonial Inn, 
            celebrating 170 years of history where Mexican colonial elegance meets modern comfort 
            in the heart of downtown Brownsville.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
