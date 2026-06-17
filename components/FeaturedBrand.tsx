import Image from 'next/image';

export default function FeaturedBrand() {
  return (
    <section className="relative py-20 bg-wood-dark border-b border-gold/20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/cigars/brands/leaf/banner-leaf.webp"
          alt="Leaf Banner Background"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h3 className="text-gold/60 tracking-widest text-sm mb-4">FEATURED BLEND</h3>
          <h2 className="text-gold font-serif text-5xl mb-6">Leaf by Oscar Valladares</h2>
          <p className="text-gold/80 mb-8 leading-relaxed">
            A masterful blend wrapped in a flavorful Habano leaf, offering a medium-to-full body experience that defines our commitment to Honduran tradition.
          </p>
          <button className="border rounded-sm border-gold text-gold px-8 py-3 hover:bg-gold hover:text-wood-dark transition-all">
            View Brand Profile
          </button>
        </div>
        <div className="flex-1 relative h-80 w-full flex items-center justify-center">
          <Image 
            src="/cigars/brands/leaf/leaf-10th-anniversary.webp" 
            alt="Leaf by Oscar Valladares" 
            fill 
            className="object-contain drop-shadow-2xl" 
          />
        </div>
      </div>
    </section>
  );
}