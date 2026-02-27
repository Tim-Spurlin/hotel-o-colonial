import { useState, useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CurrencyDollar, Funnel, SortAscending, Star, TrendUp, X } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { 
  pricingData, 
  filterPricing, 
  sortPricing, 
  getLowestPrice, 
  getHighestPrice, 
  getAveragePrice,
  networks,
  roomTypes,
  type RoomPricing 
} from '@/lib/pricing-data'

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(100)
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>([...networks])
  const [selectedRoomType, setSelectedRoomType] = useState<string>('All')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'platform-asc'>('price-asc')

  const filteredData = useMemo(() => {
    const filtered = filterPricing(pricingData, {
      minPrice,
      maxPrice,
      networks: selectedNetworks,
      roomType: selectedRoomType
    })
    return sortPricing(filtered, sortBy)
  }, [minPrice, maxPrice, selectedNetworks, selectedRoomType, sortBy])

  const lowestPrice = useMemo(() => getLowestPrice(filteredData), [filteredData])
  const highestPrice = useMemo(() => getHighestPrice(filteredData), [filteredData])
  const averagePrice = useMemo(() => getAveragePrice(filteredData), [filteredData])

  const handleNetworkToggle = (network: string) => {
    setSelectedNetworks(prev => 
      prev.includes(network) 
        ? prev.filter(n => n !== network)
        : [...prev, network]
    )
  }

  const handleResetFilters = () => {
    setMinPrice(0)
    setMaxPrice(100)
    setSelectedNetworks([...networks])
    setSelectedRoomType('All')
    setSortBy('price-asc')
  }

  const handleIsolateBest = () => {
    const absoluteLowest = getLowestPrice(pricingData)
    setMinPrice(absoluteLowest)
    setMaxPrice(absoluteLowest)
    setSelectedNetworks([...networks])
    setSelectedRoomType('All')
    setSortBy('price-asc')
    setIsFilterOpen(false)
  }

  const getNetworkColor = (network: string) => {
    switch (network) {
      case 'Direct': return 'text-primary'
      case 'Expedia Group': return 'text-blue-600'
      case 'Booking Holdings': return 'text-purple-600'
      case 'Metasearch': return 'text-amber-600'
      default: return 'text-muted-foreground'
    }
  }

  const FilterControls = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Price Range ($/Night)</Label>
        <div className="flex gap-3 items-center">
          <Input 
            type="number" 
            value={minPrice} 
            onChange={(e) => setMinPrice(Number(e.target.value))}
            min={0}
            className="w-full"
            placeholder="Min"
          />
          <span className="text-muted-foreground">—</span>
          <Input 
            type="number" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            min={0}
            className="w-full"
            placeholder="Max"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-semibold">Booking Networks</Label>
        <div className="space-y-2">
          {networks.map((network) => (
            <div key={network} className="flex items-center space-x-2">
              <Checkbox
                id={`network-${network}`}
                checked={selectedNetworks.includes(network)}
                onCheckedChange={() => handleNetworkToggle(network)}
              />
              <Label 
                htmlFor={`network-${network}`}
                className="text-sm cursor-pointer flex-1"
              >
                {network}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-semibold">Room Type</Label>
        <Select value={selectedRoomType} onValueChange={setSelectedRoomType}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Room Types</SelectItem>
            {roomTypes.map((room) => (
              <SelectItem key={room} value={room}>{room}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 pt-4 border-t">
        <Button 
          onClick={handleIsolateBest}
          className="w-full bg-amber-600 hover:bg-amber-500"
        >
          <Star size={16} weight="fill" className="mr-2" />
          Isolate Best Price
        </Button>
        <Button 
          onClick={handleResetFilters}
          variant="outline"
          className="w-full"
        >
          Reset Filters
        </Button>
      </div>
    </div>
  )

  return (
    <section id="pricing" className="py-12 md:py-24 bg-background talavera-pattern-5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <CurrencyDollar size={48} weight="fill" className="text-primary mx-auto mb-4 md:mb-6 md:w-16 md:h-16" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 px-2">
            Advanced Pricing Discovery Engine
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Compare real-time rates across all major booking platforms. Our dynamic pricing intelligence helps you find 
            the absolute best rate for your preferred room configuration.
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-6 md:gap-8">
          {/* MOBILE FILTER SHEET */}
          <div className="lg:hidden">
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Funnel size={20} weight="fill" className="mr-2" />
                  Open Filters ({filteredData.length} Results)
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85vw] sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Funnel size={20} weight="fill" />
                    Control Panel
                  </SheetTitle>
                  <SheetDescription>
                    Filter channels by price, network, and room type
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterControls />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* DESKTOP FILTERS SIDEBAR */}
          <motion.aside
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Funnel size={20} weight="fill" />
                  Control Panel
                </CardTitle>
                <CardDescription>
                  Filter channels by price, network, and room type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FilterControls />
              </CardContent>
            </Card>
          </motion.aside>

          {/* MAIN CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            {/* KPI CARDS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              <Card>
                <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                  <div className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase mb-1 md:mb-2">
                    Channels Found
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {filteredData.length}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950/20">
                <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                  <div className="text-[10px] md:text-xs font-semibold text-amber-700 dark:text-amber-300 uppercase mb-1 md:mb-2">
                    Best Price
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">
                    ${lowestPrice || 0}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                  <div className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase mb-1 md:mb-2">
                    Average Price
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    ${averagePrice || 0}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 md:pt-6 px-3 md:px-6">
                  <div className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase mb-1 md:mb-2">
                    Highest Price
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-600">
                    ${highestPrice || 0}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* DATA TABLE */}
            <Card>
              <CardHeader className="pb-3 md:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4">
                  <div>
                    <CardTitle className="text-lg md:text-xl">Filtered Booking Endpoints</CardTitle>
                    <CardDescription className="text-xs md:text-sm mt-1">
                      The absolute lowest price is highlighted in gold
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <SortAscending size={18} className="text-muted-foreground hidden sm:block" />
                    <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                      <SelectTrigger className="w-full sm:w-[180px] text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="price-asc">Price: Low → High</SelectItem>
                        <SelectItem value="price-desc">Price: High → Low</SelectItem>
                        <SelectItem value="platform-asc">Platform: A → Z</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {filteredData.length === 0 ? (
                  <div className="text-center py-12 md:py-16 px-4">
                    <TrendUp size={40} className="text-muted-foreground mx-auto mb-3 md:mb-4 md:w-12 md:h-12" />
                    <p className="font-semibold text-foreground mb-2 text-sm md:text-base">
                      No endpoints match your criteria
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Try broadening your price range or adjusting filters
                    </p>
                  </div>
                ) : (
                  <>
                    {/* MOBILE CARD VIEW */}
                    <div className="md:hidden divide-y">
                      {filteredData.map((item, index) => {
                        const isLowest = item.totalPrice === lowestPrice
                        return (
                          <motion.div
                            key={`mobile-${item.platform}-${item.room}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`p-4 space-y-3 ${
                              isLowest ? 'bg-amber-50 dark:bg-amber-950/20 border-l-4 border-l-amber-500' : 'hover:bg-muted/30'
                            }`}
                          >
                            {/* Platform & Network */}
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <div className="text-sm font-bold text-foreground">{item.platform}</div>
                                <div className={`text-xs font-medium ${getNetworkColor(item.network)}`}>
                                  {item.network}
                                </div>
                              </div>
                              <Badge variant="secondary" className="font-semibold text-xs">
                                {item.room}
                              </Badge>
                            </div>

                            {/* Price Display */}
                            <div className="flex items-end justify-between gap-4">
                              <div className="flex-1">
                                <div className={`text-2xl font-bold ${isLowest ? 'text-amber-600' : 'text-foreground'}`}>
                                  ${item.totalPrice}
                                </div>
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  Base: ${item.baseRate} + Tax: ${item.taxesFees}
                                </div>
                                {item.discount && (
                                  <div className="text-xs text-green-600 font-medium mt-1">
                                    Save ${item.discount.from - item.discount.to}
                                  </div>
                                )}
                              </div>

                              {/* Select Button - Always Visible */}
                              <Button
                                size="default"
                                variant={isLowest ? "default" : "outline"}
                                className={`shrink-0 ${isLowest ? 'bg-amber-600 hover:bg-amber-500' : ''}`}
                                onClick={() => window.open(item.url, '_blank')}
                              >
                                Select →
                              </Button>
                            </div>

                            {/* Context */}
                            <div className="text-xs text-muted-foreground pt-2 border-t">
                              {item.context}
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* DESKTOP TABLE VIEW */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted/50 border-b">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                              Platform Data
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                              Room Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                              Rate
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase hidden xl:table-cell">
                              Context
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-semibold text-muted-foreground uppercase">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {filteredData.map((item, index) => {
                            const isLowest = item.totalPrice === lowestPrice
                            return (
                              <motion.tr
                                key={`desktop-${item.platform}-${item.room}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className={`hover:bg-muted/30 transition-colors ${
                                  isLowest ? 'bg-amber-50 dark:bg-amber-950/20 border-l-4 border-l-amber-500' : ''
                                }`}
                              >
                                <td className="px-6 py-4">
                                  <div className="text-base font-bold text-foreground">{item.platform}</div>
                                  <div className={`text-xs font-medium ${getNetworkColor(item.network)}`}>
                                    {item.network}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <Badge variant="secondary" className="font-semibold text-xs">
                                    {item.room}
                                  </Badge>
                                </td>
                                <td className="px-6 py-4">
                                  <div className={`text-2xl font-bold ${isLowest ? 'text-amber-600' : 'text-foreground'}`}>
                                    ${item.totalPrice}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    Base: ${item.baseRate} + Tax: ${item.taxesFees}
                                  </div>
                                  {item.discount && (
                                    <div className="text-xs text-green-600 font-medium mt-0.5">
                                      Save ${item.discount.from - item.discount.to}
                                    </div>
                                  )}
                                </td>
                                <td className="px-6 py-4 hidden xl:table-cell">
                                  <div className="text-xs text-muted-foreground max-w-xs">
                                    {item.context}
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                  <Button
                                    size="sm"
                                    variant={isLowest ? "default" : "outline"}
                                    className={`text-sm whitespace-nowrap ${isLowest ? 'bg-amber-600 hover:bg-amber-500' : ''}`}
                                    onClick={() => window.open(item.url, '_blank')}
                                  >
                                    Select Room →
                                  </Button>
                                </td>
                              </motion.tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
