import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Footprints, Clock, House, X } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Attraction {
  id: string
  name: string
  distance: string
  walk: string
  description: string
  coordinates: { x: number; y: number }
  category: 'museum' | 'zoo' | 'cathedral' | 'dining' | 'park'
}

const attractions: Attraction[] = [
  {
    id: 'market-square',
    name: 'Market Square Research Center',
    distance: '0.1 miles',
    walk: '2 minutes',
    description: 'Historic marketplace and community gathering space, heart of downtown Brownsville.',
    coordinates: { x: 52, y: 45 },
    category: 'museum'
  },
  {
    id: 'stillman-house',
    name: 'Stillman House Museum',
    distance: '0.2 miles',
    walk: '3 minutes',
    description: 'Home of Charles Stillman, founder of Brownsville. A window into 19th-century merchant class life.',
    coordinates: { x: 45, y: 38 },
    category: 'museum'
  },
  {
    id: 'cathedral',
    name: 'Immaculate Conception Cathedral',
    distance: '0.3 miles',
    walk: '5 minutes',
    description: 'Architectural landmark and cornerstone of the community\'s spiritual and social life.',
    coordinates: { x: 58, y: 52 },
    category: 'cathedral'
  },
  {
    id: 'historic-museum',
    name: 'Historic Brownsville Museum',
    distance: '0.6 miles',
    walk: '10 minutes',
    description: 'Permanent and temporary exhibits detailing the city\'s evolution from discovery through the 20th century.',
    coordinates: { x: 35, y: 42 },
    category: 'museum'
  },
  {
    id: 'gladys-porter-zoo',
    name: 'Gladys Porter Zoo',
    distance: '1.0 miles',
    walk: '19 minutes',
    description: '30-acre tropical botanical garden and internationally celebrated center for wildlife conservation.',
    coordinates: { x: 70, y: 65 },
    category: 'zoo'
  },
  {
    id: 'rutledge',
    name: 'Rutledge Hamburgers',
    distance: '0.3 miles',
    walk: '5 minutes',
    description: '100-year-old Texas burger joint (since 1924) serving classic hamburgers and Mexican Coke.',
    coordinates: { x: 48, y: 35 },
    category: 'dining'
  },
  {
    id: 'dean-porter-park',
    name: 'Dean Porter Park',
    distance: '0.4 miles',
    walk: '7 minutes',
    description: 'Scenic urban park perfect for morning walks and evening strolls.',
    coordinates: { x: 40, y: 55 },
    category: 'park'
  }
]

const categoryColors = {
  museum: 'oklch(0.45 0.12 35)',
  zoo: 'oklch(0.55 0.05 145)',
  cathedral: 'oklch(0.72 0.15 75)',
  dining: 'oklch(0.45 0.12 35)',
  park: 'oklch(0.55 0.05 145)'
}

export function InteractiveMap() {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null)
  const [hoveredAttraction, setHoveredAttraction] = useState<string | null>(null)

  return (
    <div className="relative w-full">
      <Card className="p-4 sm:p-8 bg-card">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] bg-gradient-to-br from-muted via-background to-muted rounded-lg overflow-hidden border-2 border-border">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          >
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="oklch(0.88 0.01 75)"
                  strokeWidth="0.3"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            
            <rect width="100" height="100" fill="url(#grid)" />

            {attractions.map((attraction, index) => {
              const otherAttractions = attractions.filter(a => a.id !== attraction.id)
              return otherAttractions
                .filter(other => Math.random() > 0.5)
                .slice(0, 2)
                .map(other => (
                  <line
                    key={`line-${attraction.id}-${other.id}`}
                    x1={50}
                    y1={50}
                    x2={other.coordinates.x}
                    y2={other.coordinates.y}
                    stroke="oklch(0.88 0.01 75)"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    opacity="0.2"
                  />
                ))
            })}

            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <circle
                cx="50"
                cy="50"
                r="3"
                fill="oklch(0.45 0.12 35)"
                stroke="oklch(0.96 0.01 75)"
                strokeWidth="1"
              />
              <circle
                cx="50"
                cy="50"
                r="5"
                fill="none"
                stroke="oklch(0.45 0.12 35)"
                strokeWidth="0.5"
                opacity="0.3"
              >
                <animate
                  attributeName="r"
                  from="5"
                  to="8"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.3"
                  to="0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <text
                x="50"
                y="46"
                textAnchor="middle"
                fill="oklch(0.45 0.12 35)"
                fontSize="2.5"
                fontWeight="600"
              >
                Hotel O
              </text>
              <text
                x="50"
                y="48.5"
                textAnchor="middle"
                fill="oklch(0.45 0.12 35)"
                fontSize="2.5"
                fontWeight="600"
              >
                Colonial Inn
              </text>
            </motion.g>

            {attractions.map((attraction, index) => {
              const isHovered = hoveredAttraction === attraction.id
              const isSelected = selectedAttraction?.id === attraction.id

              return (
                <motion.g
                  key={attraction.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  onMouseEnter={() => setHoveredAttraction(attraction.id)}
                  onMouseLeave={() => setHoveredAttraction(null)}
                  onClick={() => setSelectedAttraction(attraction)}
                  className="cursor-pointer"
                >
                  <line
                    x1="50"
                    y1="50"
                    x2={attraction.coordinates.x}
                    y2={attraction.coordinates.y}
                    stroke={isHovered || isSelected ? categoryColors[attraction.category] : 'oklch(0.88 0.01 75)'}
                    strokeWidth={isHovered || isSelected ? '0.8' : '0.4'}
                    strokeDasharray="1,1"
                    opacity={isHovered || isSelected ? '0.6' : '0.3'}
                  />
                  
                  <motion.circle
                    cx={attraction.coordinates.x}
                    cy={attraction.coordinates.y}
                    r={isHovered || isSelected ? 2.5 : 2}
                    fill={categoryColors[attraction.category]}
                    stroke="oklch(0.96 0.01 75)"
                    strokeWidth={isHovered || isSelected ? '0.8' : '0.5'}
                    animate={{
                      scale: isHovered || isSelected ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: isHovered || isSelected ? Infinity : 0,
                      repeatDelay: 0.5
                    }}
                  />

                  {(isHovered || isSelected) && (
                    <motion.text
                      x={attraction.coordinates.x}
                      y={attraction.coordinates.y - 4}
                      textAnchor="middle"
                      fill="oklch(0.25 0.01 145)"
                      fontSize="2.2"
                      fontWeight="600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {attraction.name}
                    </motion.text>
                  )}
                </motion.g>
              )
            })}
          </svg>

          <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg p-3 border border-border shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <House size={16} weight="fill" className="text-primary" />
              <span className="text-xs font-semibold text-foreground">Hotel Location</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'oklch(0.45 0.12 35)' }} />
                <span className="text-xs text-muted-foreground">Museums & Culture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'oklch(0.55 0.05 145)' }} />
                <span className="text-xs text-muted-foreground">Zoo & Parks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'oklch(0.72 0.15 75)' }} />
                <span className="text-xs text-muted-foreground">Religious Sites</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <MapPin size={16} weight="fill" className="text-primary" />
            Click any location to see details
          </p>
        </div>
      </Card>

      <AnimatePresence>
        {selectedAttraction && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setSelectedAttraction(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-lg z-50"
            >
              <Card className="p-6 shadow-2xl border-2 border-primary/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${categoryColors[selectedAttraction.category]}20` }}
                    >
                      <MapPin size={20} weight="fill" style={{ color: categoryColors[selectedAttraction.category] }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground leading-tight">
                        {selectedAttraction.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {selectedAttraction.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedAttraction(null)}
                    className="flex-shrink-0 -mr-2"
                  >
                    <X size={20} />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Footprints size={18} weight="fill" className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Distance</p>
                      <p className="text-sm font-semibold text-foreground">{selectedAttraction.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} weight="fill" className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Walking Time</p>
                      <p className="text-sm font-semibold text-foreground">{selectedAttraction.walk}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
