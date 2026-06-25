import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ImageOverlay from '../ui/ImageOverlay';
import { FiCheckCircle } from 'react-icons/fi';

const highlights = [
  "Elegant Designs",
  "Quality Work",
  "Affordable Pricing"
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-gold"></div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Transforming Spaces with Modern Interior Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.15] mb-6">
              Modern False Ceiling & <br/>
              <span className="text-brand-gray">Interior Solutions</span> in Kolkata
            </h1>
            
            <p className="text-lg text-brand-gray mb-8 leading-relaxed max-w-xl">
              Transform your home, office, or commercial space with elegant false ceilings, wall panelling, electrical work, and complete renovation services.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-y-3 gap-x-6 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FiCheckCircle className="text-gold text-xl shrink-0" />
                  <span className="font-medium text-charcoal tracking-wide">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto">
                  Get Free Quote
                </Button>
              </a>
              <a href="tel:+919051512128" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <ImageOverlay 
              imageUrl="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
              className="aspect-[4/3] lg:aspect-[4/4] xl:aspect-[4/3] w-full rounded-3xl shadow-2xl border-4 border-white/50"
              overlayOpacity="opacity-20"
            >
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-bold text-xl shadow-inner">
                  ★
                </div>
                <div>
                  <p className="text-charcoal font-bold leading-tight">Premium</p>
                  <p className="text-brand-gray text-sm">Craftsmanship</p>
                </div>
              </motion.div>
            </ImageOverlay>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
