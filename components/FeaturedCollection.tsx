"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cigars = [
  { name: 'Colaboraciones', description: 'Limited Edition.', image: '/cigars/collection1.webp' },
  { name: '5 Cigars Fresh Pack', description: 'Cigars Sampler Pack.', image: '/cigars/collection2.webp' },
  { name: 'McFly', description: 'Wrapper: Mexico San Andres Maduro.', image: '/cigars/collection3.webp' },
  { name: 'Santiago Valladares Cigars', description: 'Limited Edition 2000 Boxes.', image: '/cigars/collection4.webp' },
];

export default function FeaturedCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-wood-dark border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative mb-16">
          <h2 className="text-gold font-serif text-4xl text-center">OUR COLLECTIONS</h2>
          <div className="absolute right-0 top-0 flex gap-2">
            <button
              type="button"
              onClick={() => scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
              className="rounded-full border border-gold/30 bg-black/70 p-3 text-gold transition hover:bg-gold hover:text-wood-dark"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
              className="rounded-full border border-gold/30 bg-black/70 p-3 text-gold transition hover:bg-gold hover:text-wood-dark"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar">
          {cigars.map((cigar) => (
            <div key={cigar.name} className="min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-start group cursor-pointer">
              <div className="relative bg-wood-medium h-80 mb-6 overflow-hidden border border-gold/10 group-hover:border-gold transition-colors rounded-sm">
                <Image
                  src={cigar.image}
                  alt={cigar.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-gold font-serif text-xl mb-2">{cigar.name}</h3>
              <p className="text-gold/60 text-sm">{cigar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}