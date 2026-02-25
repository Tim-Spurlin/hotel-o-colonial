import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Footprints, Clock } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'

const attractions = [
  { name: 'Market Square Research Center', distance: '0.1 miles', walk: '2 minutes', icon: MapPin },
  { name: 'Stillman House Museum', distance: '0.2 miles', walk: '3 minutes', icon: MapPin },
  { name: 'Immaculate Conception Cathedral', distance: '0.3 miles', walk: '5 minutes', icon: MapPin },
  { name: 'Historic Brownsville Museum', distance: '0.6 miles', walk: '10 minutes', icon: MapPin },
  { name: 'Gladys Porter Zoo', distance: '1.0 miles', walk: '19 minutes', icon: MapPin },
]

export function StrategicGeography() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            The Strategic Geography of Immersion
          </h2>
          <p className="text-xl text-foreground text-center mb-8 max-w-3xl mx-auto italic">
            "Step outside and everything that matters is within sight."
          </p>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Situated just 0.2 miles from the city center, the inn serves as the ultimate gateway to the 
            cultural, culinary, and civic life of Brownsville. Leave your car keys in your room—many of 
            the city's most significant attractions are accessible via a scenic stroll.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} weight="fill" className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{attraction.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Footprints size={16} weight="fill" />
                        <span>{attraction.distance}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock size={16} weight="fill" />
                        <span>{attraction.walk} walk</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="prose-luxury max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-primary text-center">The Mitte Cultural District</h3>
            <p>
              The hotel is located within steps of the <strong>Mitte Cultural District</strong>, an area of 
              Brownsville that has become the intellectual and creative heartbeat of the city. This district 
              is home to a concentration of museums and cultural entities that are internationally recognized 
              for their excellence.
            </p>
            <p>
              The <strong>Stillman House Museum</strong>, located only 0.2 miles (a 3-minute walk) from the 
              hotel, was the home of Charles Stillman, the founder of Brownsville. It offers a direct window 
              into the 19th-century origins of the city and its early merchant class.
            </p>
            <p>
              The <strong>Historic Brownsville Museum</strong>, situated 0.6 miles away (a 10-minute walk), 
              is housed in a historic building and provides temporary and permanent exhibits detailing the 
              evolution of the city from discovery through the 20th century.
            </p>
            <p>
              The <strong>Brownsville Museum of Fine Art</strong> offers a rotating array of international 
              and local art exhibits, providing cultural enrichment through art education and community 
              programs.
            </p>

            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20 mt-8">
              <h3 className="text-2xl font-bold text-primary mb-4">The Gladys Porter Zoo: A Tropical Botanical Oasis</h3>
              <p>
                One of the most scenic walks from the Hotel O Colonial Inn lobby leads directly to the 
                <strong> Gladys Porter Zoo</strong>, located approximately 1 mile away. This 30-acre oasis 
                is more than a traditional zoo; it is a lush, tropical botanical garden and an internationally 
                celebrated center for wildlife conservation. Known for its successes in breeding endangered 
                species, the zoo offers an immersive experience where guests can spend an entire day exploring 
                global wildlife habitats without the need for vehicular transportation.
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl italic text-foreground">
                For the experiential traveler, the location of the Hotel O Colonial Inn is its greatest 
                logistical advantage. Brownsville is experiencing a massive $215 million downtown renaissance, 
                and you're at the center of it all.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
