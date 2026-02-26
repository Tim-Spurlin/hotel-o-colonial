import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Buildings, Ruler } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const milestones = [
  { year: '1850', event: 'San Roman Building founded', description: 'Establishment of the original structure on-site' },
  { year: '1860s', event: 'Civil War Surveillance', description: 'Union forces used the roof to monitor Matamoros across the Rio Grande' },
  { year: '1915', event: 'Major Construction Phase', description: 'Building of the current 8,908 sq ft structure' },
  { year: '1987', event: 'Comprehensive Restoration', description: 'Modernization of entrances and structural systems' },
  { year: '2000', event: 'Modern Era Begins', description: 'Transition to current ownership and management' },
  { year: 'Present', event: 'Living Historic Property', description: 'Recognized as a Contributing Property in Local Historic District' },
]

export function LivingHeritage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background relative overflow-hidden talavera-pattern-3">
      <div className="absolute inset-0 opacity-20" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Our Living Heritage Building
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            The Architectural Narrative: A Living Artifact of 1850–1915
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Buildings size={48} weight="fill" className="text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">8,908</h3>
              <p className="text-muted-foreground">Square Feet of Historic Space</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Calendar size={48} weight="fill" className="text-secondary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">1850</h3>
              <p className="text-muted-foreground">Year Original Structure Founded</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Ruler size={48} weight="fill" className="text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">170+</h3>
              <p className="text-muted-foreground">Years of Continuous History</p>
            </Card>
          </div>

          <div className="prose-luxury max-w-4xl mx-auto space-y-6 mb-16">
            <h3 className="text-2xl font-bold text-primary">The San Roman Legacy and Civil War History</h3>
            <p>
              The architectural lineage of 1147 E. Levee Street can be traced back to the San Roman Building, 
              which was established in 1850. This era was foundational for Brownsville, and the building quickly 
              became a focal point for the city's social and political life. During the American Civil War, the 
              structure served a critical logistical and intelligence function. It was known as a "librería" or 
              bookstore, providing a facade for intellectual exchange while its roof served as a vantage point 
              for Union forces.
            </p>
            <p>
              These forces, during their occupation of Fort Brown, utilized the building's height to monitor 
              activities across the Rio Grande in Matamoros, Mexico, literally pitching a tent on the roof to 
              facilitate their surveillance operations.
            </p>
            <p>
              Throughout the latter half of the 19th century, the building functioned as a multifaceted social 
              hub. It was a "house of spirits" (saloon), a venue for public speeches delivered from its ornate 
              balconies, and a site for high-society social events. The name "San Roman Bldg. 1850" remains 
              visible today, etched below the denticulated cornice, serving as a permanent reminder of the 
              building's deep-rooted connection to the city's origins.
            </p>

            <Separator className="my-8" />

            <h3 className="text-2xl font-bold text-primary">The 1915 Construction and the Commercial Boom</h3>
            <p>
              As Brownsville transitioned into the 20th century, the demand for sophisticated commercial and 
              hospitality spaces grew. The current primary structure of the Hotel O Colonial Inn was largely 
              defined by the 1915 construction phase. This period coincided with the arrival of the Missouri 
              Pacific Railroad terminal and the expansion of the city's commercial core. The building was 
              designed to accommodate the influx of merchants, travelers, and cultural pioneers who were 
              flocking to the Rio Grande Valley during its early agricultural and trade boom.
            </p>
            <p>
              The structure encompasses approximately 8,908 square feet, spread across a layout that emphasizes 
              both verticality and communal warmth. The use of warm stucco, classic archways, and inviting 
              corridors reflects a deliberate effort to honor the aesthetic traditions of the region while 
              providing the durability required of a central commercial hub. The 1987 restoration further 
              refined these features, ensuring that the building could meet modern safety and comfort standards 
              without losing its vintage character.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className="p-6 inline-block hover:shadow-lg transition-shadow">
                      <h4 className="text-2xl font-bold text-primary mb-2">{milestone.year}</h4>
                      <p className="font-semibold text-foreground mb-1">{milestone.event}</p>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10 flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
