import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bed } from '@phosphor-icons/react'

export function RoomsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="rooms" className="py-24 bg-muted">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Bed size={64} weight="fill" className="text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Accommodations: A Sanctuary of Comfort
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Hotel O Colonial Inn offers 18 air-conditioned rooms, each designed to serve as a private sanctuary 
            for the weary traveler. The design philosophy emphasizes efficiency, cleanliness, and a home-like atmosphere.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
