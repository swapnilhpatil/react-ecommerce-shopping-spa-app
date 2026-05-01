import React, { useState } from 'react';
import { HeartIcon } from '../icons';

interface ProductGalleryProps {
  thumbnails: string[];
  name: string;
}

/**
 * ProductGallery component displays product images with thumbnail navigation.
 * 
 * @param {ProductGalleryProps} props - The component props.
 * @returns {React.JSX.Element} The rendered component.
 */
const ProductGallery: React.FC<ProductGalleryProps> = ({ thumbnails, name }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <>
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible order-2 lg:order-1 pb-4 lg:pb-0 hide-scrollbar w-full lg:w-20">
        {thumbnails.map((img, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedImageIndex(i)}
            className={`w-[80px] h-[80px] lg:w-20 lg:h-20 rounded-xl overflow-hidden cursor-pointer border-2 transition-all shrink-0 bg-black ${i === selectedImageIndex ? 'border-primary shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden flex items-center justify-center order-1 lg:order-2 aspect-square lg:aspect-auto w-full h-[400px] lg:h-[500px]">
        <img src={thumbnails[selectedImageIndex]} alt={name} className="absolute inset-0 w-full h-full object-cover" />
        <button className="absolute top-6 right-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-slate-700 shadow-sm transition-colors hover:text-red-500 hover:shadow-md backdrop-blur-sm">
          <HeartIcon size={22} />
        </button>
      </div>
    </>
  );
};

export default ProductGallery;
