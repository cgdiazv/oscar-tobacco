import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Replace with your actual hero image file */}
      <div className="absolute inset-0">
        <Image 
          src="/hero-background-4.webp" 
          alt="The Art of Tobacco" 
          fill 
          priority 
          className="object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-gold px-4">
        <h1 className="text-5xl md:text-6xl font-serif tracking-narrowing-tight mb-6 drop-shadow-[3px_3px_5px_rgba(0,0,0,1)]">
          THE ART OF TOBACCO.<br />
          <span className="text-4xl md:text-5xl">THE SPIRIT OF HONDURAS.</span>
        </h1>
        <Link 
          href="/shop" 
          className="inline-block px-8 py-3 border border-gold bg-gold text-wood-dark font-bold hover:bg-transparent hover:text-gold transition-all duration-300 uppercase tracking-widest"
        >
          Discover Our Blends
        </Link>
      </div>
    </section>
  );
}