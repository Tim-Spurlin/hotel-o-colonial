import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function ExecutiveOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="story" className="py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            The Philosophy of Soul in Modern Hospitality
          </h2>

          <div className="prose-luxury space-y-6">
            <p>
              The contemporary travel landscape is frequently defined by a movement toward the generic, 
              where standardized lodging options offer predictability at the expense of character. In this 
              context, the <strong>Hotel O Colonial Inn</strong>, situated at 1147 E. Levee Street in Brownsville, 
              Texas, emerges as a profound exception—a location where the concept of "soul" is not a marketing 
              artifice but a tangible, lived reality. The inn serves as a cultural sanctuary, functioning as a 
              bridge between the vibrant energy of modern South Texas and the deep-seated traditions of Mexican 
              hospitality. To step through its historic doors is to experience a temporal shift, moving away from 
              the high-velocity friction of the exterior world into a space defined by warmth, heritage, and an 
              intimate sense of belonging.
            </p>

            <p>
              The essence of the Hotel O Colonial Inn lies in its ability to function as a <em>"hidden pocket of Mexico."</em> 
              This is achieved through a meticulous blending of architectural preservation, personalized service, 
              and a strategic location that places the guest at the center of a binational cultural narrative. The 
              property does not merely offer a room; it provides a portal into the rich, multifaceted history of 
              the Rio Grande Valley. For the experiential traveler, the inn represents a rare luxury—the opportunity 
              to reside within a living artifact that continues to evolve under the stewardship of a family dedicated 
              to the art of the welcome.
            </p>

            <p>
              In an era where the human element is often replaced by automated interfaces, the Hotel O Colonial Inn 
              prioritizes intergenerational care. The presence of the Aguilar family—specifically the patriarch Gonzalo 
              and his grandson, Senior Aguilar—ensures that the operational philosophy remains rooted in community values. 
              This commitment to care transforms the guest experience from a simple transaction into an entry into an 
              extended family network. 
            </p>

            <p>
              The following journey explores the various dimensions of this unique establishment, from its 19th-century 
              foundations to its role as a modern gateway to the cultural renaissance of downtown Brownsville. Here, 
              history breathes. Here, hospitality is an art form. Here, you will discover what it means to be truly 
              welcomed home.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
