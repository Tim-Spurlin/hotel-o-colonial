import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Compass } from '@phosphor-icons/react'

const experiences = [
  {
    image: "https://res.cloudinary.com/dw3lf8roj/image/upload/v1772187073/Screenshot_20260227_031347_dsxy4n.png",
    alt: "Brownsville Cultural Experience"
  },
  {
    image: "https://res.cloudinary.com/dw3lf8roj/image/upload/v1772187574/Screenshot_20260227_041859_z4zoy8.png",
    alt: "Historic Downtown Attraction"
  },
  {
    image: "https://res.cloudinary.com/dw3lf8roj/image/upload/v1772187578/Screenshot_20260227_041836_piv2gd.png",
    alt: "Local Cultural Landmark"
  },
  {
    image: "https://res.cloudinary.com/dw3lf8roj/image/upload/v1772187058/Screenshot_20260226_020640_iks7zx.png",
    alt: "Brownsville Museum Experience"
  },
  {
    image: "https://res.cloudinary.com/dw3lf8roj/image/upload/v1772187051/Screenshot_20260226_020817_njni8v.png",
    alt: "Heritage Walking Tour"
  },
  {
    image: "https://res.cloudinary.com/dw3lf8roj/image/upload/v1772187060/Screenshot_20260226_021027_fimvr1.png",
    alt: "Downtown Brownsville Discovery"
  }
]

export function ExperiencesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experiences" className="py-24 bg-background talavera-pattern-3">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={experience.image}
                  alt={experience.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
