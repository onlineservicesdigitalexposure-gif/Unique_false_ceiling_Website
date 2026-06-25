export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium transition-all duration-300 ease-out text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-charcoal hover:shadow-lg hover:shadow-gold/20",
    outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    ghost: "text-charcoal hover:text-gold focus:ring-0"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
