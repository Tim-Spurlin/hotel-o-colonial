import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bed, WifiHigh, Television, Snowflake, Bathtub, Coffee } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function AguilarLegacy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const roomTypes = [
    { name: 'King Bed Non-Smoking', beds: '1 King Sized Bed', capacity: '2 Guests', sqft: '150 sq ft' },
    { name: 'Full Bed Non-Smoking', beds: '1 Full Sized Bed', capacity: '2 Guests', sqft: '150 sq ft' },
    { name: '2 Full Beds Non-Smoking', beds: '2 Full Sized Beds', capacity: '4 Guests', sqft: '150 sq ft' },
    { name: '2 Queen Beds Non-Smoking', beds: '2 Queen Sized Beds', capacity: '4 Guests', sqft: '150 sq ft' },
  ]

  const amenities = [
    { icon: Snowflake, label: 'Air Conditioning' },
    { icon: WifiHigh, label: 'High-Speed WiFi (50+ Mbps)' },
    { icon: Television, label: '32" Flat Screen TV' },
    { icon: Coffee, label: 'Mini Fridge & Microwave' },
    { icon: Bathtub, label: 'Private Bathroom' },
    { icon: Bed, label: 'Daily Housekeeping' },
  ]

  return (
    <section className="py-24 bg-secondary/30 talavera-pattern-2 talavera-border-top talavera-border-bottom">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Accommodations: A Sanctuary of Comfort
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            18 air-conditioned rooms designed to serve as private sanctuaries for the weary traveler. 
            Each room emphasizes efficiency, cleanliness, and a home-like atmosphere that encourages relaxation.
          </p>

          <div className="prose-luxury max-w-4xl mx-auto space-y-6 mb-16 text-center">
            <p>
              The Hotel O Colonial Inn offers 18 air-conditioned rooms, each designed with comfort and 
              character in mind. The rooms are approximately 150 square feet, a size that creates a cozy, 
              intimate environment optimized to include all necessary modern amenities while maintaining 
              the historic feel of the building. Guests can choose from several configurations, including 
              King, Queen, and Full beds, ensuring that individuals, couples, and families can all find 
              appropriate lodging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {roomTypes.map((room, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <Bed size={40} weight="fill" className="text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">{room.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Beds:</strong> {room.beds}</p>
                  <p><strong>Capacity:</strong> {room.capacity}</p>
                  <p><strong>Size:</strong> {room.sqft}</p>
                </div>
              </Card>
            ))}
          </div>

          <Separator className="my-12" />

          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Modern Amenities in Every Room</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-4">
                <amenity.icon size={32} weight="fill" className="text-secondary flex-shrink-0" />
                <span className="text-foreground font-medium">{amenity.label}</span>
              </div>
            ))}
          </div>

          <div className="prose-luxury max-w-4xl mx-auto space-y-6 text-center">
            <p>
              Every room is equipped with high-speed WiFi (50+ Mbps), ensuring that guests remain connected 
              to the digital world while enjoying their historic surroundings. The inclusion of a 32-inch TV 
              with digital channels, a refrigerator, and a microwave in each room allows for a level of 
              self-sufficiency that is highly valued by long-term travelers and families. Furthermore, the 
              rooms feature private bathrooms with bathtubs or showers and complimentary toiletries, providing 
              a complete suite of comforts for the modern guest.
            </p>
            
            <Separator className="my-8" />
            
            <h4 className="text-2xl font-bold text-primary">The Communal Experience: The Lobby Fireplace</h4>
            <p>
              A central feature of the hotel's communal life is the fireplace in the lobby. This hearth serves 
              as a physical manifestation of the inn's warm hospitality. Especially in the cooler months of the 
              Rio Grande Valley, the fireplace creates a gathering point where guests can interact with fellow 
              travelers. This emphasis on communal space is a deliberate design choice that reinforces the "home" 
              philosophy of the inn, moving away from the isolated, corridor-centric design of modern corporate hotels.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
              <p className="text-lg font-medium text-foreground mb-4">Professional Management & Service</p>
              <p className="text-muted-foreground">
                The hotel is managed by the dedicated Aguilar family, with patriarch Gonzalo (who is known as 
                Señor Aguilar) and his 18-year-old grandson ensuring that every guest receives personalized 
                attention and that the historic property's systems function seamlessly. The 24-hour front desk 
                ensures assistance is always available.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
