import { Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-gold/70 py-12 border-t border-gold/20 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Honduras */}
        <div>
          <h4 className="text-gold font-serif mb-4 font-bold">Oscar Valladares Tobacco & Co.</h4>
          <p className="mb-2">Salida a El Paraíso, frente al edificio de INA. Danlí, El Paraíso, Honduras.</p>
          <p>
            <a href="tel:50427635572" className="hover:underline">+504 2763-5572</a>
          </p>
        </div>

        {/* U.S. Operations */}
        <div>
          <h4 className="text-gold font-serif mb-4 font-bold">OV Cigars U.S.</h4>
          <p className="mb-2"><strong>Houston Offices U.S.</strong><br/>5444 Westheimer, Suite 1000, Houston, TX, 77056<br/><a href="tel:+18326236304" className="hover:underline">(832) 623-6304</a><br/>sales@oscartobacco.com</p>
          <p><strong>Distribution Center U.S.</strong><br/>5220 NW 72ND AVE #G31, MIAMI, FL, 33166-4860<br/><a href="tel:+18326236304" className="hover:underline">(832) 623-6304</a><br/>sales@oscartobacco.com</p>
        </div>

        {/* Europe */}
        <div>
          <h4 className="text-gold font-serif mb-4 font-bold">OV Cigars Europe GmbH</h4>
          <p>Alemannenstr. 17<br/>D-72379 Hechingen<br/>Germany<br/><a href="tel:+4974719499190" className="hover:underline">+49 7471-9499190</a><br/><a href="tel:+4974719499191" className="hover:underline">+49 7471-9499191</a><br/>info@oscartobacco.de</p>
        </div>

        {/* OVT Adventure */}
        <div className="flex flex-col items-center">
          <h4 className="text-gold font-serif mb-4 font-bold">OVT Adventure</h4>
          <a href="https://ovtadventure.com" target="_blank" rel="noopener noreferrer">
            <div className="relative w-24 h-24 rounded-full overflow-hidden hover:opacity-80 transition-opacity">
              <Image
                src="/logo-ovta.webp"
                alt="OVT Adventure Logo"
                fill
                className="object-cover"
              />
            </div>
          </a>
        </div>

        {/* Follow & Warning */}
        <div>
          <h4 className="text-gold font-serif mb-4 font-bold">Follow Us</h4>
          <div className="flex space-x-4 mb-6">
            <a href="https://www.facebook.com/OscarValladaresTobaccoCo" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/OVCigars" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gold hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/ovcigars/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gold hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div className="border border-gold/30 p-3 text-[10px] uppercase">
            SURGEON GENERAL WARNING: Tobacco smoke increases the risk of lung cancer and heart disease, even in nonsmokers.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gold/10 flex justify-between text-[10px]">
        <p>© Copyright 2026 Oscar Valladares Tobacco & Co.</p>
        <p>
          <a href="https://indevasa.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Indeva Websites
          </a>
        </p>
      </div>
    </footer>
  );
}