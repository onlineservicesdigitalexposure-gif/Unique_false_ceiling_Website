import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { 
  FiPenTool, 
  FiTool, 
  FiCheckSquare, 
  FiDollarSign, 
  FiZap, 
  FiClock 
} from 'react-icons/fi';

const benefits = [
  { title: "Custom Ceiling Designs", icon: FiPenTool },
  { title: "Professional Installation", icon: FiTool },
  { title: "Clean Finishing", icon: FiCheckSquare },
  { title: "Budget-Friendly Solutions", icon: FiDollarSign },
  { title: "Electrical Work Support", icon: FiZap },
  { title: "On-Time Project Completion", icon: FiClock }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-32 bg-charcoal text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12"
          >
            <div className="mb-6">
              <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
                The Unique Advantage
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Why Choose Unique False Ceiling?
              </h2>
              <div className="h-1 w-20 bg-gold mt-8 rounded-full" />
            </div>
            
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              We bring years of experience and a passion for perfection to every interior project. From conceptual design to flawless execution, our dedicated team ensures your space is transformed beautifully, functionally, and strictly within your timeline and budget.
            </p>
            
            <a href="tel:+919051512128">
              <Button variant="primary" className="shadow-lg shadow-gold/20 px-10">
                Call Now
              </Button>
            </a>
          </motion.div>

          {/* Right Grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-5 bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:-translate-y-1 hover:border-gold/30 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gold/10 group-hover:bg-gold flex items-center justify-center text-gold group-hover:text-white shrink-0 transition-colors">
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-100">{item.title}</h3>
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
