import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function ExecutiveOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="story" className="py-24 bg-card talavera-pattern-1">
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

          <div className="mb-12 rounded-lg overflow-hidden shadow-2xl">
            <video
              loop
              muted
              playsInline
              autoPlay
              className="w-full h-auto"
            >
              <source src="https://res.cloudinary.com/dw3lf8roj/video/upload/v1772181014/grok-video-8ddea788-d616-4a62-a0c6-e0209b6485d5_txpil6.mp4" type="video/mp4" />
            </video>
          </div>

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
              The establishment maintains family-owned hospitality under the management of the Aguilar family, with 
              patriarch Señor Gonzalo Aguilar and his 18-year-old grandson ensuring attentive service and careful 
              preservation of the historic property's character and systems.
            </p>

            <p>
              The following journey explores the various dimensions of this unique establishment—from its role in Civil 
              War intelligence operations to its Spanish Colonial Revival architecture, from its 18 meticulously maintained 
              rooms to its unbeatable walkability to the Mitte Cultural District, Gladys Porter Zoo, and the international 
              bridge to Matamoros. Here, history breathes. Here, downtown Brownsville's renaissance unfolds at your doorstep. 
              Here, you discover an authentic "hidden pocket of Mexico" in the heart of South Texas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
