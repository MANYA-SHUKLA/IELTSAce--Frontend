'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-1 sm:flex-initial">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=50&h=50&fit=crop&crop=center&auto=format&q=80" 
                alt="IELTSAce Logo" 
                width={32}
                height={32}
                className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover"
              />
              <span className="ml-2 text-lg sm:text-xl font-bold text-slate-800 truncate">IELTSAce</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Home
            </Link>
            <Link href="/courses" className="text-slate-600 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Courses
            </Link>
            <Link href="/pricing" className="text-slate-600 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Pricing
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              About
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Contact
            </Link>
            <Link href="/free-trial" className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-sky-700 hover:to-emerald-700 transition duration-300 shadow-md hover:shadow-lg">
              Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
              <Link 
                href="/" 
                className="text-slate-600 hover:text-sky-600 hover:bg-slate-50 block px-3 py-3 rounded-md text-base font-medium transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/courses" 
                className="text-slate-600 hover:text-sky-600 hover:bg-slate-50 block px-3 py-3 rounded-md text-base font-medium transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/pricing" 
                className="text-slate-600 hover:text-sky-600 hover:bg-slate-50 block px-3 py-3 rounded-md text-base font-medium transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="text-slate-600 hover:text-sky-600 hover:bg-slate-50 block px-3 py-3 rounded-md text-base font-medium transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-slate-600 hover:text-sky-600 hover:bg-slate-50 block px-3 py-3 rounded-md text-base font-medium transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t border-slate-200 mt-2">
                <Link 
                  href="/free-trial"
                  className="w-full text-center bg-gradient-to-r from-sky-600 to-emerald-600 text-white px-3 py-3 rounded-lg text-base font-medium hover:from-sky-700 hover:to-emerald-700 transition duration-300 shadow-md hover:shadow-lg block"
                  onClick={() => setIsOpen(false)}
                >
                  Free Trial
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;