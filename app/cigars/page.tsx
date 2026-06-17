import Navbar from '@/components/Navbar';
import FeaturedBrand from '@/components/FeaturedBrand';
import BrandAccordion from '@/components/BrandAccordion';
import Footer from '@/components/Footer';

export default function CigarsPage() {
  return (
    <main className="bg-wood-dark min-h-screen">
      <Navbar />
      <FeaturedBrand />
      <BrandAccordion />
      <Footer />
    </main>
  );
}