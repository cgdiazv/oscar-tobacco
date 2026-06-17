'use client';
import { useState } from 'react';

const brands = [
  { name: 'Leaf by Oscar Valladares', desc: 'The signature rustic blend wrapped in a tobacco leaf.' },
  { name: '2012 by Oscar Valladares', desc: 'A celebrated collection honoring the company founding.' },
  { name: 'The Oscar Valladares', desc: 'Our premium featured blend, crafted for the ultimate connoisseur.' },
  { name: 'Oscar Valladares Ciseron Edition', desc: 'Artistic expression meets premium tobacco.' },
  { name: 'Altar Q by Oscar Valladares', desc: 'Inspired by the ancient Mayan altar in Copán.' },
  { name: 'Super Fly', desc: 'A bold, high-octane blend for the modern enthusiast.' },
  { name: 'Wild Hunter', desc: 'Designed for the outdoor enthusiast, earthy and robust.' },
  { name: 'McFly', desc: 'A nostalgic journey with a complex, balanced profile.' },
  { name: 'Santiago Valladares Cigars', desc: 'A tribute to family tradition and heritage.' },
  { name: 'Oscar Valladares Tenth Anniversary', desc: 'A commemorative blend celebrating a decade of excellence.' },
  { name: 'Raw Dog by Oscar Valladares', desc: 'An unfiltered, pure tobacco experience.' },
  { name: 'Oscar Valladares Heaven and Hell', desc: 'A dual-profile blend representing the contrast of flavors.' },
  { name: 'Colaboraciones Limited Edition', desc: 'Exclusive releases born from unique partnerships.' },
  { name: '5 Cigars Fresh Pack', desc: 'Convenient, curated selections for any occasion.' },
];

export default function BrandAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-gold font-serif text-3xl text-center mb-12">OUR COMPLETE COLLECTION</h2>
      <div className="border-t border-gold/20">
        {brands.map((brand, index) => (
          <div key={brand.name} className="border-b border-gold/20">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-6 flex justify-between items-center text-gold font-serif text-xl hover:text-gold/70"
            >
              {brand.name}
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="pb-6 text-gold/60 leading-relaxed animate-in fade-in slide-in-from-top-2">
                {brand.desc}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}