'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-stone-100 h-20 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-9 h-9 bg-royalPurple rounded-full flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <a href="#" className="text-2xl font-bold tracking-tight text-stone-900">
              MODERN PLAYING{' '}
              <span className="text-xs font-normal tracking-widest ml-1 uppercase text-stone-400">
                Mapo
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#stretching"
              className="text-stone-500 hover:text-royalPurple px-1 py-2 text-sm font-medium transition tracking-wide"
            >
              액티브 스트레칭
            </a>
            <a
              href="#dance"
              className="text-stone-500 hover:text-royalPurple px-1 py-2 text-sm font-medium transition tracking-wide"
            >
              취미 현대무용
            </a>
            <a
              href="#benefit"
              className="text-brandRed font-bold px-1 py-2 text-sm transition tracking-wide"
            >
              오픈 혜택
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-royalPurple to-brandRed text-white px-5 py-2.5 rounded-full text-sm font-bold hover:from-indigo-600 hover:to-royalPurple transition shadow-lg transform hover:-translate-y-0.5"
            >
              체험문의
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-600 hover:text-royalPurple focus:outline-none"
              aria-label="메뉴 열기"
              aria-expanded={isMenuOpen}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${isMenuOpen ? '' : 'hidden'} md:hidden bg-white border-t border-stone-100`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <a
            href="#stretching"
            className="block px-3 py-2 text-base font-medium text-stone-600"
            onClick={() => setIsMenuOpen(false)}
          >
            액티브 스트레칭
          </a>
          <a
            href="#dance"
            className="block px-3 py-2 text-base font-medium text-stone-600"
            onClick={() => setIsMenuOpen(false)}
          >
            취미 현대무용
          </a>
          <a
            href="#benefit"
            className="block px-3 py-2 text-base font-bold text-brandRed"
            onClick={() => setIsMenuOpen(false)}
          >
            오픈 혜택
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-base font-bold text-white bg-gradient-to-r from-royalPurple to-brandRed mt-2 rounded-lg mx-2"
            onClick={() => setIsMenuOpen(false)}
          >
            체험문의
          </a>
        </div>
      </div>
    </nav>
  );
}

