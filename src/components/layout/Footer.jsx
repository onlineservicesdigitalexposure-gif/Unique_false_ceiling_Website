import { FiPhone, FiMapPin } from 'react-icons/fi';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Process', href: '#process' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

const servicesLinks = [
  { name: 'False Ceiling', href: '#services' },
  { name: 'Gypsum Ceiling', href: '#services' },
  { name: 'PVC Ceiling', href: '#services' },
  { name: 'Modular Ceiling', href: '#services' },
  { name: 'Wall Panelling', href: '#services' },
  { name: 'Electrical Work', href: '#services' }
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-28 md:pt-20 md:pb-10 border-t-4 border-gold">
      <div className="container mx-auto px-4">
        
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info */}
          <div>
            <a href="#home" className="flex flex-col mb-4 inline-block group">
              <span className="text-2xl font-bold tracking-wider text-white leading-none group-hover:text-gold transition-colors">UNIQUE</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-gold mt-1">FALSE CEILING</span>
            </a>
            <p className="text-gold font-medium mb-4 text-xs uppercase tracking-wider">
              Transforming Spaces with Modern Interior Solutions
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are a premier interior construction contractor in Kolkata specializing in high-quality false ceilings, wall panelling, and complete renovation services for homes and commercial spaces.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-gold"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm hover:underline decoration-gold underline-offset-4">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-gold"></span>
              Our Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm hover:underline decoration-gold underline-offset-4">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-gold"></span>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiPhone className="text-gold text-lg shrink-0 mt-0.5" />
                <a href="tel:+919051512128" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +91 9051512128
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="text-gold text-xl shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  2/21 Naktala, Flat No. 6,<br />Kolkata - 700070
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Unique False Ceiling. Design & Develop By 
            
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service 
            </a>.

          </p>
          <p className="text-gold/80 text-sm font-medium tracking-wide">
            Designed for modern interiors in Kolkata.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
