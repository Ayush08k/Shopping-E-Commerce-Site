
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="flex flex-col-reverse">
      {/* Image thumbnails */}
      <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
        <div className="grid grid-cols-4 gap-6">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50 ${
                activeIndex === index ? 'ring-2 ring-offset-2 ring-indigo-500' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="sr-only">Image {index + 1}</span>
              <span className="absolute inset-0 rounded-md overflow-hidden">
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-center object-cover" loading="lazy" decoding="async" width="96" height="96" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main image */}
      <div className="w-full aspect-w-1 aspect-h-1">
        <div 
          className="relative w-full h-full overflow-hidden rounded-lg"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <img
            src={images[activeIndex]}
            alt="Main product"
            className="w-full h-full object-center object-cover"
            loading="lazy"
            decoding="async"
            width="800"
            height="800"
          />
          {isZoomed && (
             <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `url(${images[activeIndex]})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    backgroundSize: '200%',
                    transform: 'scale(1)', // Ensures it fills the container
                }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
