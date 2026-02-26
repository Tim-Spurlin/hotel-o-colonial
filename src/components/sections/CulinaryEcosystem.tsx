import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ForkKnife } from '@phosphor-icons/react'

export function CulinaryEcosystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="dining" className="py-24 bg-card talavera-pattern-5 talavera-border-top">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <ForkKnife size={64} weight="fill" className="text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            A Culinary Ecosystem at Your Doorstep
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Hotel O Colonial Inn is positioned in an area that is currently experiencing a massive downtown renaissance. 
            This revitalization is perhaps most visible in the culinary scene, where historic establishments and modern fusions coexist.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
