import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Wrench, Lightning } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'

export function AguilarLegacy() {
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
            The Aguilar Family: Intergenerational Stewardship
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            The true defining characteristic of the Hotel O Colonial Inn is the human element, personified by the Aguilar family.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Wrench size={32} weight="fill" className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Gonzalo</h3>
                  <p className="text-sm text-muted-foreground">The Patriarch of Preservation</p>
                </div>
              </div>
              <div className="space-y-4 text-foreground">
                <p>
                  Gonzalo, the patriarch of the establishment, is the embodiment of wisdom and vitality. 
                  Approaching seventy years of age, he serves as the hotel's "Patriarch of Preservation." 
                  His role is both administrative and deeply physical; he is known among guests for his 
                  ability to navigate the hotel's multi-story layouts with a kinetic agility that often 
                  leaves visitors in awe.
                </p>
                <p>
                  Beyond his role as a host, Gonzalo is a mechanical expert. He possesses an intimate 
                  understanding of the building's historic plumbing, electrical, and structural systems. 
                  His hands-on approach ensures that the "heartbeat" of the hotel remains steady. He 
                  understands that in a century-old building, maintenance is not merely about repair but 
                  about preservation—ensuring that modern comforts like air conditioning and hot water 
                  function seamlessly within a vintage aesthetic.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  His presence provides a sense of continuity, reassuring guests that they are in the 
                  hands of someone who truly knows every floorboard and fixture of the property.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Lightning size={32} weight="fill" className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Senior Aguilar</h3>
                  <p className="text-sm text-muted-foreground">The Vanguard of Modern Excellence</p>
                </div>
              </div>
              <div className="space-y-4 text-foreground">
                <p>
                  Complementing the elder Gonzalo is his eighteen-year-old grandson, affectionately known 
                  as Senior Aguilar. If Gonzalo represents the hotel's historical continuity, Senior Aguilar 
                  represents its high-velocity adaptation to the 21st century. Despite his young age, he has 
                  inherited his grandfather's mechanical genius and applied it to the digital and electronic 
                  demands of modern hospitality.
                </p>
                <p>
                  Senior Aguilar is a local legend on the property for his rapid-response problem-solving. 
                  A notable example of his proficiency is his ability to diagnose and repair modern electronic 
                  key card door mechanisms in under five minutes—a task that typically requires specialized 
                  technicians from external firms.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  His technical skill ensures that the "hidden pocket of Mexico" vibe is never interrupted 
                  by the frustrations of modern technology. Together, the grandfather and grandson provide 
                  a flawless blend of historic care and modern convenience.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-accent/10 border-accent inline-block">
              <Users size={48} weight="fill" className="text-accent mx-auto mb-4" />
              <p className="text-lg italic max-w-2xl">
                "The operational philosophy is driven by a commitment to ensuring that every guest is treated 
                as a guest in a private home rather than a customer in a commercial space. This commitment to 
                care transforms the guest experience from a simple transaction into an entry into an extended 
                family network."
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
