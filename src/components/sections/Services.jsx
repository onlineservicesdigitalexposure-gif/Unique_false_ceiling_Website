import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import { 
  FiGrid, 
  FiMaximize, 
  FiLayers, 
  FiLayout, 
  FiSidebar, 
  FiZap 
} from 'react-icons/fi';

const servicesList = [
  {
    title: "False Ceiling",
    description: "Premium false ceiling solutions designed to elevate the aesthetics of your home or office in Kolkata. We ensure perfect levelling and flawless finishing.",
    icon: FiGrid
  },
  {
    title: "Gypsum Ceiling",
    description: "Durable and seamless gypsum board ceilings ideal for elegant living rooms and commercial spaces, offering excellent soundproofing and heat insulation.",
    icon: FiMaximize
  },
  {
    title: "PVC Ceiling",
    description: "Water-resistant and highly durable PVC ceiling panels perfect for kitchens, bathrooms, and shops requiring low-maintenance decorative solutions.",
    icon: FiLayers
  },
  {
    title: "Modular Ceiling",
    description: "Quick-to-install grid modular ceilings tailored for corporate offices and retail spaces, providing easy access to concealed wiring and plumbing.",
    icon: FiLayout
  },
  {
    title: "Wall Panelling",
    description: "Sophisticated wall panelling to transform dull walls into stunning focal points. Perfect for TV units, bedroom backdrops, and executive cabins.",
    icon: FiSidebar
  },
  {
    title: "Electrical & Renovation",
    description: "Complete end-to-end interior renovation including precise electrical wiring, lighting installation, and structural upgrades for a turnkey finish.",
    icon: FiZap
  }
];

export default function Services() {
  return (
    <section id="services" className="section-spacing bg-cream relative">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          subtitle="What We Do"
          title="Our Interior Services"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
