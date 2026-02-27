import { House, MapPin } from '@phosphor-icons/react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <House size={32} weight="fill" className="text-secondary" />
              <span className="font-serif font-bold text-xl">Hotel O Colonial Inn</span>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              A hidden pocket of Mexico in the heart of historic Brownsville. 
              Step into 170 years of heritage, warmth, and authentic hospitality.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Location</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={20} weight="fill" className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  1147 E. Levee Street<br />
                  Brownsville, Texas 78520
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#story" className="opacity-90 hover:opacity-100 transition-opacity">Our Story</a>
              </li>
              <li>
                <a href="#rooms" className="opacity-90 hover:opacity-100 transition-opacity">Rooms & Suites</a>
              </li>
              <li>
                <a href="#experiences" className="opacity-90 hover:opacity-100 transition-opacity">Local Experiences</a>
              </li>
              <li>
                <a href="#dining" className="opacity-90 hover:opacity-100 transition-opacity">Dining Guide</a>
              </li>
              <li>
                <a href="#book" className="opacity-90 hover:opacity-100 transition-opacity font-semibold">Book Your Stay</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Hours</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold">Front Desk</p>
                <p className="opacity-90">24 Hours Daily</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Check-in</p>
                <p className="opacity-90">After 1:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Check-out</p>
                <p className="opacity-90">Before 11:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-75">
            © {currentYear} Hotel O Colonial Inn. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm opacity-75">
            <span>A Historic Property Since 1850</span>
            <span className="hidden md:inline">•</span>
            <span>Brownsville, Texas</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
