'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  mainImageId: string;
  mainImageSrc: string;
  mainImageAlt: string;
  thumbnails: Array<{
    src: string;
    alt: string;
  }>;
  badge?: {
    text: string;
    icon?: string;
  };
}

export default function ImageGallery({
  mainImageId,
  mainImageSrc,
  mainImageAlt,
  thumbnails,
  badge,
}: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(mainImageSrc);

  const changeImage = (newSrc: string) => {
    setCurrentImage(newSrc);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Main Display Image */}
      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl w-full aspect-[4/3] group bg-white">
        <Image
          src={currentImage.startsWith('/') ? currentImage : `/${currentImage}`}
          alt={mainImageAlt}
          width={800}
          height={600}
          className="w-full h-full object-cover transition-all duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royalPurple/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
        {badge && (
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-royalPurple/10">
            {badge.icon && (
              <div className="w-2 h-2 rounded-full bg-brandRed animate-pulse"></div>
            )}
            <span className="text-xs font-bold text-stone-800">{badge.text}</span>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-3">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            onClick={() => changeImage(thumb.src)}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer hover:ring-4 hover:ring-royalPurple/30 transition shadow-md group"
          >
            <Image
              src={thumb.src.startsWith('/') ? thumb.src : `/${thumb.src}`}
              alt={thumb.alt}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

