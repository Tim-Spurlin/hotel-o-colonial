import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowSquareOut } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const partners = [
  { name: 'OYO Rooms', url: 'https://www.oyorooms.com/us/317185/' },
  { name: 'Hotels-Texas', url: 'https://ocolonialtx.hotels-texas.com/en/' },
  { name: 'Booking.com', url: 'https://www.booking.com/hotel/us/colonial-brownsville.html' },
]

export function BookingPartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="book" className="py-24 bg-background">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Reserve Your Stay with Our Trusted Partners
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We partner with the best booking platforms to ensure you always get the best rate and seamless experience.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow h-full flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-primary mb-4">{partner.name}</h3>
                  <Button 
                    className="bg-primary hover:bg-secondary hover:text-foreground w-full"
                    onClick={() => window.open(partner.url, '_blank')}
                  >
                    Book Now
                    <ArrowSquareOut size={20} weight="bold" className="ml-2" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-foreground mb-4">
              <strong>Direct Inquiries:</strong> (956) 546-1212 | info@hotelocolonialinn.com
            </p>
            <p className="text-sm text-muted-foreground">
              No direct booking engine — we partner with the best platforms so you always get the best rate 
              and seamless experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
