export interface RoomPricing {
  platform: string
  network: 'Direct' | 'Expedia Group' | 'Booking Holdings' | 'Metasearch'
  room: '1 King Bed' | '1 Full Bed' | '2 Full Beds' | '2 Queen Beds' | 'Suite'
  baseRate: number
  taxesFees: number
  totalPrice: number
  context: string
  url: string
  discount?: {
    from: number
    to: number
  }
}

export const pricingData: RoomPricing[] = [
  {
    platform: "OYO Rooms",
    network: "Direct",
    room: "1 King Bed",
    baseRate: 43,
    taxesFees: 11,
    totalPrice: 54,
    context: "Non-Smoking • Discounted from $69 rack rate",
    url: "https://www.oyorooms.com/us/317185/",
    discount: { from: 69, to: 43 }
  },
  {
    platform: "OYO Rooms",
    network: "Direct",
    room: "1 Full Bed",
    baseRate: 47,
    taxesFees: 12,
    totalPrice: 59,
    context: "Non-Smoking • Discounted from $73 rack rate",
    url: "https://www.oyorooms.com/us/317185/",
    discount: { from: 73, to: 47 }
  },
  {
    platform: "OYO Rooms",
    network: "Direct",
    room: "2 Full Beds",
    baseRate: 50,
    taxesFees: 13,
    totalPrice: 63,
    context: "Non-Smoking • Discounted from $80 rack rate",
    url: "https://www.oyorooms.com/us/317185/",
    discount: { from: 80, to: 50 }
  },
  {
    platform: "OYO Rooms",
    network: "Direct",
    room: "2 Queen Beds",
    baseRate: 52,
    taxesFees: 13,
    totalPrice: 65,
    context: "Non-Smoking • Discounted from $83 rack rate",
    url: "https://www.oyorooms.com/us/317185/",
    discount: { from: 83, to: 52 }
  },
  {
    platform: "Expedia",
    network: "Expedia Group",
    room: "1 King Bed",
    baseRate: 49,
    taxesFees: 11,
    totalPrice: 60,
    context: "Non-Refundable • Sleeps 2",
    url: "https://www.expedia.com/Brownsville-Hotels-Colonial-Hotel.h994435.Hotel-Information"
  },
  {
    platform: "Expedia",
    network: "Expedia Group",
    room: "1 Full Bed",
    baseRate: 52,
    taxesFees: 12,
    totalPrice: 64,
    context: "Non-Refundable • Sleeps 2",
    url: "https://www.expedia.com/Brownsville-Hotels-Colonial-Hotel.h994435.Hotel-Information"
  },
  {
    platform: "Expedia",
    network: "Expedia Group",
    room: "2 Full Beds",
    baseRate: 56,
    taxesFees: 13,
    totalPrice: 69,
    context: "Non-Refundable • Sleeps 4",
    url: "https://www.expedia.com/Brownsville-Hotels-Colonial-Hotel.h994435.Hotel-Information"
  },
  {
    platform: "Expedia",
    network: "Expedia Group",
    room: "2 Queen Beds",
    baseRate: 60,
    taxesFees: 14,
    totalPrice: 74,
    context: "Non-Refundable • Sleeps 4",
    url: "https://www.expedia.com/Brownsville-Hotels-Colonial-Hotel.h994435.Hotel-Information"
  },
  {
    platform: "Hotels.com",
    network: "Expedia Group",
    room: "1 King Bed",
    baseRate: 49,
    taxesFees: 11,
    totalPrice: 60,
    context: "Collect Stamps • Rewards Program",
    url: "https://www.hotels.com/ho32821920/"
  },
  {
    platform: "Hotels.com",
    network: "Expedia Group",
    room: "2 Queen Beds",
    baseRate: 60,
    taxesFees: 14,
    totalPrice: 74,
    context: "Collect Stamps • Rewards Program",
    url: "https://www.hotels.com/ho32821920/"
  },
  {
    platform: "Booking.com",
    network: "Booking Holdings",
    room: "1 King Bed",
    baseRate: 59,
    taxesFees: 12,
    totalPrice: 71,
    context: "Genius Rate Available • Free Cancellation",
    url: "https://www.booking.com/hotel/us/colonial-brownsville.html"
  },
  {
    platform: "Booking.com",
    network: "Booking Holdings",
    room: "2 Queen Beds",
    baseRate: 64,
    taxesFees: 14,
    totalPrice: 78,
    context: "Genius Rate Available • Free Cancellation",
    url: "https://www.booking.com/hotel/us/colonial-brownsville.html"
  },
  {
    platform: "Agoda",
    network: "Booking Holdings",
    room: "1 King Bed",
    baseRate: 58,
    taxesFees: 12,
    totalPrice: 70,
    context: "Prepaid Rate • Save More",
    url: "https://www.agoda.com/hotel-o-colonial-inn-brownsville-tx/hotel/brownsville-tx-us.html"
  },
  {
    platform: "Agoda",
    network: "Booking Holdings",
    room: "2 Queen Beds",
    baseRate: 62,
    taxesFees: 13,
    totalPrice: 75,
    context: "Prepaid Rate • Save More",
    url: "https://www.agoda.com/hotel-o-colonial-inn-brownsville-tx/hotel/brownsville-tx-us.html"
  },
  {
    platform: "Priceline",
    network: "Booking Holdings",
    room: "1 King Bed",
    baseRate: 46,
    taxesFees: 10,
    totalPrice: 56,
    context: "Express Deal • Limited Availability",
    url: "https://www.priceline.com/"
  },
  {
    platform: "Orbitz",
    network: "Expedia Group",
    room: "1 King Bed",
    baseRate: 55,
    taxesFees: 12,
    totalPrice: 67,
    context: "Standard Rate • Member Rewards",
    url: "https://www.orbitz.com/Brownsville-Hotels.d6058982.Travel-Guide-Hotels"
  },
  {
    platform: "Travelocity",
    network: "Expedia Group",
    room: "1 King Bed",
    baseRate: 49,
    taxesFees: 11,
    totalPrice: 60,
    context: "Standard Rate • Price Match",
    url: "https://www.travelocity.com/Brownsville-Hotels.d6058982.Travel-Guide-Hotels"
  },
  {
    platform: "Trivago",
    network: "Metasearch",
    room: "1 King Bed",
    baseRate: 43,
    taxesFees: 11,
    totalPrice: 54,
    context: "Redirects to OYO • Comparison Tool",
    url: "https://www.trivago.com/"
  },
  {
    platform: "Kayak",
    network: "Metasearch",
    room: "1 King Bed",
    baseRate: 46,
    taxesFees: 10,
    totalPrice: 56,
    context: "Redirects to Multiple • Comparison Tool",
    url: "https://www.kayak.com/"
  },
]

export const roomTypes = [
  '1 King Bed',
  '1 Full Bed',
  '2 Full Beds',
  '2 Queen Beds',
  'Suite'
] as const

export const networks = [
  'Direct',
  'Expedia Group',
  'Booking Holdings',
  'Metasearch'
] as const

export function getLowestPrice(data: RoomPricing[] = pricingData): number {
  if (data.length === 0) return 0
  return Math.min(...data.map(d => d.totalPrice))
}

export function getHighestPrice(data: RoomPricing[] = pricingData): number {
  if (data.length === 0) return 0
  return Math.max(...data.map(d => d.totalPrice))
}

export function getAveragePrice(data: RoomPricing[] = pricingData): number {
  if (data.length === 0) return 0
  const sum = data.reduce((acc, d) => acc + d.totalPrice, 0)
  return Math.round(sum / data.length)
}

export function filterPricing(
  data: RoomPricing[],
  filters: {
    minPrice?: number
    maxPrice?: number
    networks?: string[]
    roomType?: string
  }
): RoomPricing[] {
  return data.filter(item => {
    if (filters.minPrice !== undefined && item.totalPrice < filters.minPrice) return false
    if (filters.maxPrice !== undefined && item.totalPrice > filters.maxPrice) return false
    if (filters.networks && filters.networks.length > 0 && !filters.networks.includes(item.network)) return false
    if (filters.roomType && filters.roomType !== 'All' && item.room !== filters.roomType) return false
    return true
  })
}

export function sortPricing(
  data: RoomPricing[],
  sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'platform-asc'
): RoomPricing[] {
  const sorted = [...data]
  
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.totalPrice - b.totalPrice)
    case 'price-desc':
      return sorted.sort((a, b) => b.totalPrice - a.totalPrice)
    case 'name-asc':
    case 'platform-asc':
      return sorted.sort((a, b) => a.platform.localeCompare(b.platform))
    default:
      return sorted
  }
}
