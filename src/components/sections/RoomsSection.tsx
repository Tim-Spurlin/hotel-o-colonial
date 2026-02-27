import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bed, WifiHigh, Television, Snowflake, ForkKnife, Users } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const rooms = [
  {
    name: '1 King Bed Non-Smoking',
    capacity: '2 Guests',
    size: '150 sq ft',
    amenities: ['AC', 'TV', 'Fridge', 'WiFi 50+ Mbps', 'Private Bath', 'Daily Housekeeping'],
    description: 'Cozy intimate space optimized for couples or solo travelers seeking comfort and privacy.'
  },
  {
    name: '1 Full Bed Non-Smoking',
    capacity: '2 Guests',
    size: '150 sq ft',
    amenities: ['AC', 'TV', 'Fridge', 'WiFi 50+ Mbps', 'Private Bath', 'Daily Housekeeping'],
    description: 'Efficient single-bed configuration perfect for the modern traveler prioritizing value.'
  },
  {
    name: '2 Full Beds Non-Smoking',
    capacity: '4 Guests',
    size: '150 sq ft',
    amenities: ['AC', 'TV', 'Fridge', 'Microwave', 'WiFi 50+ Mbps', 'Private Bath', 'Daily Housekeeping'],
    description: 'Ideal for families or small groups, featuring dual sleeping arrangements and full amenities.'
  },
  {
    name: '2 Queen Beds Non-Smoking',
    capacity: '4 Guests',
    size: '150 sq ft',
    amenities: ['AC', 'TV', 'Fridge', 'Microwave', 'WiFi 50+ Mbps', 'Private Bath', 'Daily Housekeeping'],
    description: 'Spacious dual-queen configuration offering maximum comfort for families and groups.'
  }
]

const amenityIcons: Record<string, any> = {
  'AC': Snowflake,
  'TV': Television,
  'Fridge': ForkKnife,
  'WiFi 50+ Mbps': WifiHigh
}

export function RoomsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="rooms" className="py-24 bg-secondary/20 talavera-pattern-6">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Bed size={64} weight="fill" className="text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Accommodations: A Sanctuary of Comfort
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Hotel O Colonial Inn offers 18 air-conditioned rooms, each designed to serve as a private sanctuary 
            for the weary traveler. The design philosophy emphasizes efficiency, cleanliness, and a home-like atmosphere 
            that encourages relaxation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              src="https://res.cloudinary.com/dw3lf8roj/video/upload/v1772178084/grok-video-c07cc6a3-fe5f-49b6-81dd-9a21a292322d_g8bagx.mp4"
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-semibold text-lg">King Bed Room</p>
              <p className="text-white/90 text-sm">Experience comfort and elegance in our spacious king bed accommodations</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl">{room.name}</CardTitle>
                    <Badge variant="secondary" className="flex items-center gap-1 shrink-0">
                      <Users size={14} weight="fill" />
                      {room.capacity}
                    </Badge>
                  </div>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bed size={16} weight="fill" />
                    <span className="font-medium">{room.size}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity) => {
                        const Icon = amenityIcons[amenity]
                        return (
                          <Badge 
                            key={amenity} 
                            variant="outline" 
                            className="flex items-center gap-1.5 px-3 py-1"
                          >
                            {Icon && <Icon size={14} weight="fill" />}
                            <span className="text-xs">{amenity}</span>
                          </Badge>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-card border rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-primary mb-3">Property Policies</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <p><strong className="text-foreground">Check-in:</strong> After 1:00 PM</p>
                <p><strong className="text-foreground">Check-out:</strong> Before 11:00 AM</p>
              </div>
              <div>
                <p><strong className="text-foreground">Pet-Friendly:</strong> $20/pet/night</p>
                <p><strong className="text-foreground">Min Age:</strong> 18 years</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
