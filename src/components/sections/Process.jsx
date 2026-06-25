import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const steps = [
  {
    title: "Call or WhatsApp Us",
    description: "Reach out to us with your basic requirements and location details to start the conversation."
  },
  {
    title: "Site Visit & Discussion",
    description: "Our experts visit your site to take precise measurements and understand your vision."
  },
  {
    title: "Design and Quotation",
    description: "We provide you with a transparent, detailed estimate and final design approach."
  },
  {
    title: "Installation & Handover",
    description: "Our skilled team executes the project flawlessly and hands it over right on schedule."
  }
];

export default function Process() {
  return (
    <section id="process" className="section-spacing bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Our Process"
          title="How We Work"
          centered={true}
        />

        <div className="relative max-w-6xl mx-auto mt-16 mb-20">
          {/* Connecting Line - Desktop Horizontal */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gold/20 -z-0"></div>
          
          {/* Connecting Line - Mobile Vertical */}
          <div className="md:hidden absolute top-[28px] bottom-[28px] left-[28px] w-[2px] bg-gold/20 -z-0"></div>

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-row md:flex-col items-start md:items-center relative w-full md:w-1/4"
              >
                {/* Number Circle */}
                <div className="w-14 h-14 shrink-0 rounded-full bg-gold text-white text-xl font-bold flex items-center justify-center shadow-lg shadow-gold/30 border-4 border-white md:mb-6 transition-transform duration-300 hover:scale-110">
                  {idx + 1}
                </div>
                
                {/* Text Content */}
                <div className="ml-6 md:ml-0 md:text-center mt-2 md:mt-0">
                  <h3 className="text-xl font-bold text-charcoal mb-3 leading-tight">{step.title}</h3>
                  <p className="text-brand-gray text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <a href="#contact">
            <Button variant="primary">
              Request a Free Quote
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
