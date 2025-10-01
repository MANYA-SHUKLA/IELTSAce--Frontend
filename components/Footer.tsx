'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, CheckCircle, X } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setEmailError('');
    
    // Validation
    if (!email.trim()) {
      setEmailError('Email address is required');
      return;
    }
    
    if (!validateEmail(email.trim())) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    
    try {
      // Simulate subscription process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Footer newsletter subscribed with email:', email);
      setShowSuccessPopup(true);
      setEmail('');
      setEmailError('');
      
      // Hide popup after 4 seconds
      setTimeout(() => setShowSuccessPopup(false), 4000);
      
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setEmailError('There was an error subscribing. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
  };
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-6 w-6 sm:h-8 sm:w-8 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-full"></div>
              <span className="ml-2 text-lg sm:text-xl font-bold">IELTSAce</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm sm:text-base">
              Your trusted partner in IELTS preparation. We combine cutting-edge technology 
              with expert guidance to help you achieve your dream band score.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="text-slate-400 hover:text-white transition duration-300 p-2 hover:bg-sky-600 rounded-lg">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition duration-300 p-2 hover:bg-sky-600 rounded-lg">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition duration-300 p-2 hover:bg-sky-600 rounded-lg">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition duration-300 p-2 hover:bg-sky-600 rounded-lg">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/courses" className="text-slate-400 hover:text-white transition duration-300 text-sm sm:text-base">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white transition duration-300 text-sm sm:text-base">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition duration-300 text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-slate-400 hover:text-white transition duration-300 text-sm sm:text-base">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition duration-300 text-sm sm:text-base">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/free-materials" className="text-slate-400 hover:text-white transition duration-300 text-sm sm:text-base">
                  Free Study Materials
                </Link>
              </li>
              <li>
                <Link href="/practice-tests" className="text-slate-400 hover:text-white transition duration-300 text-sm sm:text-base">
                  Practice Tests
                </Link>
              </li>
              <li>
                <Link href="/ielts-tips" className="text-slate-400 hover:text-white transition duration-300 text-sm sm:text-base">
                  IELTS Tips
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition duration-300 text-sm sm:text-base">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-400 hover:text-white transition duration-300 text-sm sm:text-base">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-sky-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm sm:text-base break-all">hello@IELTSAce.com</span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm sm:text-base">
                  123 Education Street<br />
                  Learning City, LC 12345
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-xs sm:text-sm font-semibold mb-3">NEWSLETTER</h4>
              <form onSubmit={handleSubscribe}>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                  <input 
                    type="email" 
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className={`flex-1 px-3 py-2 bg-slate-800 border ${emailError ? 'border-red-500' : 'border-slate-700'} rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 text-sm`}
                    required
                  />
                  <button 
                    type="submit"
                    disabled={isSubscribing || !email.trim()}
                    className="bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed px-4 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none font-medium transition duration-300 text-sm"
                  >
                    {isSubscribing ? 'Joining...' : 'Join'}
                  </button>
                </div>
                {emailError && (
                  <div className="text-red-400 text-xs mt-2">{emailError}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="text-slate-400 text-xs sm:text-sm">
              © 2025 IELTSAce. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-white transition duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {isMounted && showSuccessPopup && (
        <div className="fixed top-5 right-5 z-50 animate-slide-in-right">
          <div className="bg-white rounded-xl p-6 shadow-xl border border-slate-200 min-w-80 max-w-96">
            <button 
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors p-1"
              onClick={() => setShowSuccessPopup(false)}
            >
              <X size={16} />
            </button>
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mx-auto mb-4 text-white">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 text-center mb-2">Successfully Subscribed!</h3>
            <p className="text-sm text-slate-600 text-center leading-relaxed">
              Thank you for subscribing! You&apos;ll receive the latest IELTS tips and strategies in your inbox.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;