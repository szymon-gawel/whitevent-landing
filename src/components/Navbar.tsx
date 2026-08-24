import { useState, useEffect } from 'react';
import { track } from '@vercel/analytics';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { t } from '../translations';

function Logo() {
  return (
    <span className="font-display font-bold text-xl tracking-[0.15em] text-white select-none">
      WHIT<span className="text-amber-500">E</span>VENT
    </span>
  );
}

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const { tr } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navLinks = [
    { id: 'features', label: tr(t.nav.features) },
    { id: 'modules', label: tr(t.nav.modules) },
    { id: 'faq', label: tr(t.nav.faq) },
    { id: 'contact', label: tr(t.nav.contact) },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm font-medium">
              <button
                onClick={() => setLang('pl')}
                className={`px-1.5 py-0.5 rounded transition-colors duration-200 ${
                  lang === 'pl'
                    ? 'text-amber-500 font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                PL
              </button>
              <span className="text-gray-600 text-xs">|</span>
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded transition-colors duration-200 ${
                  lang === 'en'
                    ? 'text-amber-500 font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => { track('cta_click', { location: 'navbar' }); scrollTo('contact'); }}
              className="hidden md:inline-flex items-center bg-amber-500 hover:bg-amber-400 text-navy-deeper font-semibold px-4 py-2 rounded-md text-sm transition-all duration-200"
            >
              {tr(t.nav.cta)}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(15, 31, 52, 0.97)', backdropFilter: 'blur(12px)' }}
      >
        <div className="px-4 pt-2 pb-5 space-y-1 border-t border-white/10">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left text-gray-300 hover:text-white px-3 py-2.5 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
            >
              {label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => { track('cta_click', { location: 'navbar_mobile' }); scrollTo('contact'); }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-navy-deeper font-semibold px-4 py-2.5 rounded-md text-sm transition-colors"
            >
              {tr(t.nav.cta)}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
