import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building } from '@phosphor-icons/react'

export function LobbyShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="lobby" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Building size={64} weight="fill" className="text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Welcome to Our Lobby
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Step into the heart of Hotel O Colonial Inn, where historic charm meets modern comfort. 
            Our lobby embodies the warm, welcoming spirit of Mexican hospitality that has defined 
            this property for generations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border-4 border-primary/20">
            <div className="aspect-video">
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source 
                  src="https://res.cloudinary.com/dw3lf8roj/video/upload/v1772178520/lobby-clip-edited_auufuw.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-card rounded-lg border">
              <h3 className="font-bold text-primary mb-2">Historic Architecture</h3>
              <p className="text-sm text-muted-foreground">
                Spanish Colonial Revival elements preserved with care since 1850
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <h3 className="font-bold text-primary mb-2">Authentic Character</h3>
              <p className="text-sm text-muted-foreground">
                Original details and furnishings tell the story of 170+ years
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <h3 className="font-bold text-primary mb-2">Modern Comfort</h3>
              <p className="text-sm text-muted-foreground">
                Contemporary amenities seamlessly integrated with vintage charm
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
