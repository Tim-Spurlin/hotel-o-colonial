import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quotes } from '@phosphor-icons/react'

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted talavera-pattern-2">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Quotes size={64} weight="fill" className="text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Guest Testimonials
          </h2>
          <p className="text-lg italic text-foreground max-w-3xl mx-auto">
            "This hotel goes above and beyond any holiday inn or Hilton I have ever visited. 
            The Aguilar family makes you feel right at home."
          </p>
          <p className="text-sm text-muted-foreground mt-4">— Sketch Argraves, Guest</p>
        </motion.div>
      </div>
    </section>
  )
}
