export default function ImageOverlay({ children, imageUrl, className = '', overlayOpacity = 'opacity-40' }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl group ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={`absolute inset-0 bg-charcoal ${overlayOpacity} transition-opacity duration-300 group-hover:opacity-50`} />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
