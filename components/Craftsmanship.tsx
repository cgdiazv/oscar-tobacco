export default function Craftsmanship() {
  return (
    <section className="relative py-24 bg-wood-dark border-t border-gold/20 overflow-hidden">
      {/* Background Image Container - Replace with client's factory photo */}
      <div className="absolute inset-0 bg-[url('/hero-background-3.webp')] bg-cover bg-center opacity-30"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-gold font-serif text-4xl mb-8">BORN IN HONDURAS, CRAFTED FOR EXCELLENCE</h2>
        <p className="text-gold/80 text-lg mb-10 leading-relaxed">
          From the careful selection of premium leaves to the masterful hands of our artisans, 
          every step of our process is dedicated to the pursuit of the perfect smoke.
        </p>
        <button className="border rounded-sm border-gold text-gold px-8 py-3 hover:bg-gold hover:text-wood-dark transition-all">
          Learn More
        </button>
      </div>
    </section>
  );
}