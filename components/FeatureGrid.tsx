export default function FeatureGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto -mt-24 relative z-20">
      
      {/* Card 1: About Us */}
      <div className="bg-wood-medium border border-gold/40 p-10 text-center hover:border-gold transition-all duration-500 hover:shadow-gold hover:-translate-y-2">
        <h3 className="text-gold font-serif text-2xl tracking-widest mb-4">OUR STORY</h3>
        <div className="mx-auto w-16 h-px bg-gold mb-6" aria-hidden="true" />
        <p className="text-gold/70 text-sm mb-6 leading-relaxed">Learn about the passion, heritage, and craftsmanship behind our premium blends.</p>
        <button className="text-gold border border-gold/50 px-6 py-2 hover:bg-gold hover:text-wood-dark transition-all">Learn More</button>
      </div>

      {/* Card 2: Featured Review */}
      <div className="bg-wood-medium border border-gold/40 p-10 text-center hover:border-gold transition-all duration-500 hover:shadow-gold hover:-translate-y-2">
        <h3 className="text-gold font-serif text-2xl tracking-widest mb-4">FEATURED REVIEW</h3>
        <div className="mx-auto w-16 h-px bg-gold mb-6" aria-hidden="true" />
        <p className="text-gold/80 italic font-light text-lg leading-relaxed">
          "The artistry in every blend is unmatched. An essential experience for any true enthusiast."
        </p>
      </div>

      {/* Card 3: Find Us */}
      <div className="bg-wood-medium border border-gold/40 p-10 text-center hover:border-gold transition-all duration-500 hover:shadow-gold hover:-translate-y-2">
        <h3 className="text-gold font-serif text-2xl tracking-widest mb-4">WHERE TO FIND US</h3>
        <div className="mx-auto w-16 h-px bg-gold mb-6" aria-hidden="true" />
        <p className="text-gold/70 text-sm mb-6 leading-relaxed">Locate your nearest authorized Oscar Valladares vendor.</p>
        <button className="text-gold border border-gold/50 px-6 py-2 hover:bg-gold hover:text-wood-dark transition-all">Find a Vendor</button>
      </div>

    </section>
  );
}