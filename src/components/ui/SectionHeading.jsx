export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  className = ''
}) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-gold mt-6 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
