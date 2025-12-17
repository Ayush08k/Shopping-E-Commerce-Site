
import React, { useState, useEffect, useCallback } from 'react';
import { HERO_SLIDES } from '../constants';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };
  
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div key={slide.id} className="relative w-full flex-shrink-0 h-full">
            <img 
              src={slide.imageUrl} 
              alt={slide.title} 
              className="w-full h-full object-cover" 
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              width="1600"
              height="900"
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white p-4 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{slide.title}</h1>
                <p className="text-lg md:text-2xl mb-8 drop-shadow-md">{slide.subtitle}</p>
                <a
                  href={slide.ctaLink}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-3 rounded-full text-gray-800 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-3 rounded-full text-gray-800 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-indigo-600' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;