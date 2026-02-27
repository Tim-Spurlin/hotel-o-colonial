import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Camera, Play } from '@phosphor-icons/react'

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section id="gallery" className="py-24 bg-card talavera-pattern-6">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Camera size={64} weight="fill" className="text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the beauty of our historic property and the vibrant culture of downtown Brownsville.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              poster="https://res.cloudinary.com/dw3lf8roj/image/upload/v1772186798/grok-image-89711c45-1c02-4f2a-b2c5-2cf5184a2755_hnipts.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://res.cloudinary.com/dw3lf8roj/video/upload/v1772185898/hotel-o-colonial_uvugyy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-all group-hover:bg-black/40"
                onClick={handlePlayClick}
              >
                <div className="bg-primary/90 rounded-full p-6 transform transition-transform group-hover:scale-110">
                  <Play size={48} weight="fill" className="text-primary-foreground" />
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground italic">
              Explore the historic elegance and timeless charm of Hotel O Colonial Inn
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
