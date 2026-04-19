import { track } from '@vercel/analytics';
import { useTranslation } from '../hooks/useTranslation';
import { t } from '../translations';

function PhoneMockup() {
  return (
    <div className="phone-float relative w-full max-w-[260px] mx-auto">
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 glow-pulse"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,158,11,0.18) 0%, transparent 70%)',
          transform: 'scale(1.3)',
          borderRadius: '50%',
        }}
      />
      <svg
        viewBox="0 0 260 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full drop-shadow-[0_32px_64px_rgba(0,0,0,0.5)]"
      >
        {/* Phone body */}
        <rect x="2" y="2" width="256" height="516" rx="38" fill="#0A1628" />
        <rect x="2" y="2" width="256" height="516" rx="38" stroke="#2A4D7F" strokeWidth="1.5" />

        {/* Screen background */}
        <rect x="12" y="46" width="236" height="430" fill="#152B47" />

        {/* Camera pill */}
        <rect x="88" y="12" width="84" height="20" rx="10" fill="#0A1628" />
        <circle cx="172" cy="22" r="4" fill="#1E3A5F" />

        {/* App header */}
        <rect x="12" y="46" width="236" height="62" fill="#1E3A5F" />
        <rect x="22" y="60" width="90" height="11" rx="5.5" fill="white" fillOpacity="0.92" />
        <rect x="22" y="77" width="58" height="7" rx="3.5" fill="#F59E0B" fillOpacity="0.9" />
        {/* Logo mark */}
        <rect x="214" y="57" width="26" height="26" rx="7" fill="#F59E0B" fillOpacity="0.15" />
        <rect x="221" y="64" width="12" height="2.5" rx="1.25" fill="#F59E0B" />
        <rect x="221" y="69.5" width="9" height="2.5" rx="1.25" fill="#F59E0B" fillOpacity="0.75" />
        <rect x="221" y="75" width="11" height="2.5" rx="1.25" fill="#F59E0B" fillOpacity="0.5" />

        {/* Tab navigation */}
        <rect x="12" y="108" width="236" height="32" fill="#0F1F34" fillOpacity="0.95" />
        <rect x="20" y="116" width="52" height="16" rx="8" fill="#F59E0B" />
        <rect x="29" y="121" width="34" height="6" rx="3" fill="#0F1F34" />
        <rect x="85" y="121" width="38" height="4" rx="2" fill="white" fillOpacity="0.3" />
        <rect x="138" y="121" width="38" height="4" rx="2" fill="white" fillOpacity="0.3" />
        <rect x="191" y="121" width="38" height="4" rx="2" fill="white" fillOpacity="0.3" />

        {/* Date separator */}
        <rect x="22" y="150" width="55" height="7" rx="3.5" fill="white" fillOpacity="0.35" />

        {/* Session card 1 — active/amber */}
        <rect x="12" y="165" width="236" height="68" fill="#1E3A5F" />
        <rect x="12" y="165" width="4" height="68" fill="#F59E0B" />
        <rect x="22" y="176" width="125" height="10" rx="5" fill="white" fillOpacity="0.95" />
        <rect x="22" y="192" width="88" height="7.5" rx="3.75" fill="white" fillOpacity="0.52" />
        <rect x="22" y="205" width="56" height="7" rx="3.5" fill="#F59E0B" fillOpacity="0.85" />
        <rect x="182" y="177" width="56" height="18" rx="6" fill="#F59E0B" fillOpacity="0.14" />
        <rect x="191" y="183" width="38" height="6" rx="3" fill="#F59E0B" fillOpacity="0.9" />

        {/* Session card 2 */}
        <rect x="12" y="241" width="236" height="68" fill="#1A3254" fillOpacity="0.75" />
        <rect x="12" y="241" width="4" height="68" fill="white" fillOpacity="0.22" />
        <rect x="22" y="252" width="148" height="10" rx="5" fill="white" fillOpacity="0.85" />
        <rect x="22" y="268" width="95" height="7.5" rx="3.75" fill="white" fillOpacity="0.42" />
        <rect x="22" y="281" width="68" height="7" rx="3.5" fill="white" fillOpacity="0.28" />
        <rect x="185" y="254" width="50" height="16" rx="5" fill="white" fillOpacity="0.08" />
        <rect x="193" y="260" width="34" height="4" rx="2" fill="white" fillOpacity="0.38" />

        {/* Session card 3 */}
        <rect x="12" y="317" width="236" height="68" fill="#1A3254" fillOpacity="0.48" />
        <rect x="12" y="317" width="4" height="68" fill="white" fillOpacity="0.13" />
        <rect x="22" y="328" width="112" height="10" rx="5" fill="white" fillOpacity="0.7" />
        <rect x="22" y="344" width="76" height="7.5" rx="3.75" fill="white" fillOpacity="0.32" />
        <rect x="22" y="357" width="50" height="7" rx="3.5" fill="white" fillOpacity="0.18" />

        {/* Fade gradient over lower cards */}
        <defs>
          <linearGradient id="screenFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#152B47" stopOpacity="0" />
            <stop offset="100%" stopColor="#152B47" stopOpacity="0.88" />
          </linearGradient>
        </defs>
        <rect x="12" y="390" width="236" height="86" fill="url(#screenFade)" />

        {/* Bottom nav */}
        <rect x="12" y="446" width="236" height="30" fill="#0F1F34" fillOpacity="0.97" />
        <rect x="26" y="454" width="14" height="14" rx="3" fill="#F59E0B" fillOpacity="0.85" />
        <rect x="67" y="456" width="12" height="10" rx="3" fill="white" fillOpacity="0.22" />
        <rect x="108" y="456" width="12" height="10" rx="3" fill="white" fillOpacity="0.22" />
        <rect x="149" y="456" width="12" height="10" rx="3" fill="white" fillOpacity="0.22" />
        <rect x="190" y="456" width="12" height="10" rx="3" fill="white" fillOpacity="0.22" />
        <rect x="228" y="456" width="14" height="10" rx="3" fill="white" fillOpacity="0.22" />

        {/* Home indicator */}
        <rect x="90" y="490" width="80" height="4" rx="2" fill="white" fillOpacity="0.18" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const { tr } = useTranslation();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-navy-deeper"
    >
      {/* Background spotlight gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 80% 45%, rgba(245,158,11,0.07) 0%, transparent 65%), radial-gradient(ellipse 50% 60% at 90% 15%, rgba(42,77,127,0.22) 0%, transparent 55%), radial-gradient(ellipse 80% 40% at 10% 90%, rgba(30,58,95,0.3) 0%, transparent 60%)',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-full px-4 py-1.5 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              {tr(t.hero.badge)}
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-white leading-[1.08] tracking-tight max-w-full break-words">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
                {tr(t.hero.headline1)}
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-gradient">
                {tr(t.hero.headline2)}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 break-words">
              {tr(t.hero.subtext)}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => { track('cta_click', { location: 'hero' }); scrollTo('contact'); }}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-deeper font-semibold px-7 py-3.5 rounded-lg text-base transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:-translate-y-0.5"
              >
                {tr(t.hero.ctaPrimary)}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo('features')}
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-medium px-7 py-3.5 rounded-lg text-base transition-all duration-200 hover:bg-white/5"
              >
                {tr(t.hero.ctaSecondary)}
              </button>
            </div>

            {/* Social proof bar */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center lg:justify-start pt-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {tr(t.hero.stat1)}
              </div>
              <div className="w-px h-4 bg-white/15" />
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {tr(t.hero.stat2)}
              </div>
              <div className="w-px h-4 bg-white/15" />
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {tr(t.hero.stat3)}
              </div>
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs">
              {/* Outer glow ring */}
              <div
                className="absolute inset-[-20%] pointer-events-none glow-pulse"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,158,11,0.12) 0%, transparent 65%)',
                }}
              />
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0F1F34)',
        }}
      />
    </section>
  );
}
