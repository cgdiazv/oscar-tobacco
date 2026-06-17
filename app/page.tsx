import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import FeaturedCollection from '@/components/FeaturedCollection';
import Craftsmanship from '@/components/Craftsmanship'; // Added
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-wood-dark min-h-screen">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <FeaturedCollection />
      <Craftsmanship /> 
      <Footer />
    </main>
  );
}