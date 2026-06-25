import { FiArrowRight } from 'react-icons/fi';

export default function ServiceCard({ title, description, icon: Icon, className = '' }) {
  return (
    <div className={`group bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:border-gold/30 hover:-translate-y-2 flex flex-col h-full ${className}`}>
      {Icon && (
        <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center mb-6 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-300">
          <Icon className="text-2xl" />
        </div>
      )}
      <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>
      <p className="text-brand-gray leading-relaxed flex-grow mb-6">{description}</p>
      
      <a 
        href="#contact" 
        className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal group-hover:text-gold transition-colors mt-auto w-fit"
      >
        Get Quote <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
