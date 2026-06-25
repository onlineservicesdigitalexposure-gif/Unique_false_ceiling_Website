import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { galleryCategories, galleryImages } from '../../data/galleryData';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = galleryImages.filter(img => 
    activeCategory === "All" ? true : img.category === activeCategory
  );

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const showNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  }, [filteredImages.length]);
  
  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  // Keyboard accessibility for Lightbox Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="section-spacing bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Portfolio"
          title="Our Recent Interior Work"
          centered={true}
        />
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {galleryCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
                activeCategory === category 
                  ? 'bg-gold text-white shadow-md' 
                  : 'bg-cream text-charcoal hover:bg-gray-200'
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="relative group aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-gold"
                onClick={() => openLightbox(index)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') openLightbox(index);
                }}
              >
                <img 
                  src={image.image} 
                  alt={`Interior design for ${image.title}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                  <FiMaximize2 className="text-white text-3xl mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75" />
                  <h3 className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">{image.title}</h3>
                  <p className="text-gold font-medium mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gold transition-colors text-3xl md:text-4xl z-50 p-2 bg-charcoal/50 rounded-full focus:outline-none focus:ring-2 focus:ring-gold"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <FiX />
            </button>

            {/* Prev Button */}
            <button 
              className="absolute left-2 md:left-8 text-white/70 hover:text-white transition-colors text-4xl md:text-5xl z-50 p-2 bg-charcoal/50 rounded-full hover:bg-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
              onClick={showPrev}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>

            {/* Image Container */}
            <motion.div 
              key={lightboxIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-6xl max-h-full flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={filteredImages[lightboxIndex].image} 
                alt={`Expanded view of ${filteredImages[lightboxIndex].title}`}
                loading="lazy"
                className="max-w-full max-h-[80vh] md:max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />
              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent p-6 md:p-8 rounded-b-xl text-center">
                <h3 className="text-white text-xl md:text-3xl font-bold">{filteredImages[lightboxIndex].title}</h3>
                <p className="text-gold mt-1 md:mt-2 text-sm md:text-base font-medium">{filteredImages[lightboxIndex].category}</p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button 
              className="absolute right-2 md:right-8 text-white/70 hover:text-white transition-colors text-4xl md:text-5xl z-50 p-2 bg-charcoal/50 rounded-full hover:bg-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
              onClick={showNext}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
