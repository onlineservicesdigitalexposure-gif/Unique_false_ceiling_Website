import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ImageOverlay from '../ui/ImageOverlay';
import { FiLayers, FiUsers, FiPenTool, FiTag } from 'react-icons/fi';

const features = [
  { title: 'Quality Materials', icon: FiLayers },
  { title: 'Experienced Team', icon: FiUsers },
  { title: 'Custom Designs', icon: FiPenTool },
  { title: 'Affordable Pricing', icon: FiTag },
];

export default function About() {
  return (
    <section id="about" className="section-spacing bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
             {/* Decorative background block behind image */}
             <div className="absolute -inset-4 bg-cream rounded-3xl -z-10 transform translate-x-4 translate-y-4"></div>
             
             <ImageOverlay 
              imageUrl="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200" 
              className="aspect-square md:aspect-[4/3] lg:aspect-[4/5] w-full rounded-2xl shadow-lg"
              overlayOpacity="opacity-0 hover:opacity-10"
            />
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <SectionHeading 
                subtitle="About Us"
                title="Your Trusted Interior Construction Partner in Kolkata"
                centered={false}
                className="mb-8"
              />
              
              <div className="text-lg text-brand-gray space-y-6 mb-10 leading-relaxed">
                <p>
                  Unique False Ceiling is an interior construction contractor based in Naktala, Kolkata. We provide modern false ceiling solutions, wall panelling, electrical work, and renovation services for homes, offices, shops, and commercial spaces.
                </p>
                <p>
                  Our focus is quality workmanship, practical designs, transparent pricing, and on-time project completion.
                </p>
              </div>
            </motion.div>

            {/* Feature Cards/Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-cream border border-transparent hover:border-gold/20 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gold shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-xl" />
                    </div>
                    <span className="font-semibold text-charcoal">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
