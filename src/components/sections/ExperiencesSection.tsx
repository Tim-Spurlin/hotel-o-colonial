import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Compass } from '@phosphor-icons/react'

export function ExperiencesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experiences" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Compass size={64} weight="fill" className="text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Curated Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From zoo mornings to museum afternoons, from First Friday evenings to heritage walking tours, 
            discover Brownsville's cultural renaissance from the perfect home base.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
