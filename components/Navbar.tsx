// src/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[url('/bg-wood.webp')] bg-[#2a160c]/80 bg-blend-multiply bg-cover bg-center border-b-4 border-gold/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full p-6 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="Oscar Valladares Tobacco & Co."
              width={150}
              height={54}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gold font-medium">
            <li><Link href="/cigars" className="hover:text-gold-light transition-colors">Cigars</Link></li>
            <li><Link href="/about" className="hover:text-gold-light transition-colors">About</Link></li>
            <li><Link href="/reviews" className="hover:text-gold-light transition-colors">Reviews</Link></li>
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-gold-light transition-colors">
                Vendors ▾
              </button>
              <div className="absolute top-full right-0 pt-2 w-48 hidden group-hover:block z-50">
                <div className="bg-[url('/bg-wood.webp')] bg-[#2a160c]/80 bg-blend-multiply bg-cover bg-center border border-gold/50 shadow-xl">
                  <Link href="/become-a-vendor" className="block px-4 py-2 hover:bg-wood-medium">Become a Vendor</Link>
                  <Link href="/find-a-vendor" className="block px-4 py-2 hover:bg-wood-medium">Find a Vendor</Link>
                </div>
              </div>
            </li>
            <li><Link href="/resources" className="hover:text-gold-light transition-colors">Resources</Link></li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-gold hover:text-gold-light transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out md:hidden bg-[url('/bg-wood.webp')] bg-[#2a160c] bg-blend-multiply border-r border-gold/30 shadow-2xl flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gold/20">
          <span className="text-gold font-serif text-lg tracking-widest">MENU</span>
          <button onClick={() => setIsOpen(false)} className="text-gold hover:text-gold-light" aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col p-6 gap-6 text-gold font-medium overflow-y-auto">
          <li><Link href="/cigars" onClick={() => setIsOpen(false)} className="block text-lg hover:text-gold-light transition-colors">Cigars</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)} className="block text-lg hover:text-gold-light transition-colors">About</Link></li>
          <li><Link href="/reviews" onClick={() => setIsOpen(false)} className="block text-lg hover:text-gold-light transition-colors">Reviews</Link></li>
          <li className="flex flex-col gap-3">
            <span className="text-gold/60 text-sm uppercase tracking-widest">Vendors</span>
            <Link href="/become-a-vendor" onClick={() => setIsOpen(false)} className="pl-4 block text-lg hover:text-gold-light transition-colors">Become a Vendor</Link>
            <Link href="/find-a-vendor" onClick={() => setIsOpen(false)} className="pl-4 block text-lg hover:text-gold-light transition-colors">Find a Vendor</Link>
          </li>
          <li><Link href="/resources" onClick={() => setIsOpen(false)} className="block text-lg hover:text-gold-light transition-colors">Resources</Link></li>
        </ul>
      </div>
    </nav>
  );
}