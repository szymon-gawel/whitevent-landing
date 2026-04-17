import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ─── Pure-CSS phone frame ────────────────────────────────────────────────────

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>

      {/* Volume up */}
      <div style={{
        position: 'absolute', left: -4, top: '19%',
        width: 4, height: '5.5%', minHeight: 22,
        borderRadius: '2px 0 0 2px',
        background: 'linear-gradient(to right, #0e0e0e, #2a2a2c)',
        boxShadow: '-1px 0 3px rgba(0,0,0,0.65)',
      }} />
      {/* Volume down */}
      <div style={{
        position: 'absolute', left: -4, top: 'calc(19% + 32px)',
        width: 4, height: '5.5%', minHeight: 22,
        borderRadius: '2px 0 0 2px',
        background: 'linear-gradient(to right, #0e0e0e, #2a2a2c)',
        boxShadow: '-1px 0 3px rgba(0,0,0,0.65)',
      }} />
      {/* Power */}
      <div style={{
        position: 'absolute', right: -4, top: '24%',
        width: 4, height: '9%', minHeight: 38,
        borderRadius: '0 2px 2px 0',
        background: 'linear-gradient(to left, #0e0e0e, #2a2a2c)',
        boxShadow: '1px 0 3px rgba(0,0,0,0.65)',
      }} />

      {/* Phone shell */}
      <div style={{
        background: 'linear-gradient(148deg, #303032 0%, #1c1c1e 38%, #131313 100%)',
        borderRadius: 44,
        padding: '10px 8px 18px',
        boxShadow: [
          '0 48px 96px rgba(0,0,0,0.75)',
          'inset 0 1px 0 rgba(255,255,255,0.13)',
          'inset 0 -1px 0 rgba(255,255,255,0.04)',
          '0 0 0 1px rgba(255,255,255,0.07)',
        ].join(', '),
      }}>
        {/* Screen */}
        <div style={{
          borderRadius: 38,
          overflow: 'hidden',
          background: '#ddd',
          position: 'relative',
          aspectRatio: '9 / 19.5',
        }}>
          {/* Dynamic island pill */}
          <div style={{
            position: 'absolute',
            top: 10, left: '50%',
            transform: 'translateX(-50%)',
            width: '34%', height: 22,
            borderRadius: 11,
            background: '#1c1c1e',
            zIndex: 10,
          }} />
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function AppShowcase() {
  const { t } = useLanguage();

  const headingRef      = useScrollAnimation();
  const phonesRef       = useScrollAnimation(100);
  const desktopPhonesRef = useScrollAnimation(100);

  return (
    <section
      id="showcase"
      className="relative w-full pt-24 pb-20"
      style={{ background: '#1E3A5F' }}
    >
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style={{
          width: 700, height: 500,
          background: 'radial-gradient(ellipse at 50% 60%, rgba(245,158,11,0.07) 0%, transparent 70%)',
          marginTop: 80,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Heading */}
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className="animate-on-scroll text-center mb-14"
        >
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {t('Demo', 'Demo')}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {t('Zobacz na żywo', 'See it live')}
          </h2>
          <p className="text-gray-300 text-lg max-w-lg mx-auto">
            {t(
              'Elegancki interfejs zaprojektowany z myślą o uczestnikach eventów.',
              'Elegant interface designed with event attendees in mind.'
            )}
          </p>
        </div>

      </div>{/* close padded container so scroll row can be full-width */}

      {/* ── Mobile: full-width horizontal scroll row ── */}
      <div
        ref={phonesRef as React.RefObject<HTMLDivElement>}
        className="animate-on-scroll md:hidden w-full overflow-x-auto no-scrollbar flex pb-10 pt-2"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        } as React.CSSProperties}
      >
        {/* Leading spacer keeps first card centered */}
        <div className="flex-shrink-0" style={{ width: 'calc(12.5vw)' }} />
        {[
          { src: '/screenshots/networking.png', label: t('Networking', 'Networking') },
          { src: '/screenshots/agenda.png',     label: t('Agenda', 'Agenda') },
          { src: '/screenshots/exhibitor.png',  label: t('Wystawcy', 'Exhibitors') },
        ].map(({ src, label }) => (
          <div
            key={src}
            className="flex-shrink-0 flex flex-col items-center mr-5 last:mr-0"
            style={{ width: '75vw', scrollSnapAlign: 'center' }}
          >
            <PhoneFrame src={src} alt={label} />
            <p className="text-center text-gray-300 text-sm font-medium mt-3">{label}</p>
          </div>
        ))}
        {/* Trailing spacer */}
        <div className="flex-shrink-0" style={{ width: 'calc(12.5vw)' }} />
      </div>

      {/* re-open padded container for desktop layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Desktop: rotated trio ── */}
        <div
          ref={desktopPhonesRef as React.RefObject<HTMLDivElement>}
          className="animate-on-scroll hidden md:flex items-end justify-center"
        >
          {/* Left — networking.png */}
          <div
            className="flex-shrink-0"
            style={{
              width: 240,
              transform: 'rotate(-8deg) scale(0.88)',
              transformOrigin: 'bottom center',
              marginRight: -52,
              zIndex: 10,
              position: 'relative',
            }}
          >
            <PhoneFrame
              src="/screenshots/networking.png"
              alt={t('Networking', 'Networking')}
            />
            <p
              className="text-center text-gray-400 text-xs font-medium mt-3"
              style={{ transform: 'rotate(8deg)', transformOrigin: 'center' }}
            >
              {t('Networking', 'Networking')}
            </p>
          </div>

          {/* Center — agenda.png */}
          <div className="flex-shrink-0" style={{ width: 240, zIndex: 20, position: 'relative' }}>
            <PhoneFrame
              src="/screenshots/agenda.png"
              alt={t('Agenda', 'Agenda')}
            />
            <p className="text-center text-white text-sm font-semibold mt-3">
              {t('Agenda', 'Agenda')}
            </p>
          </div>

          {/* Right — exhibitor.png */}
          <div
            className="flex-shrink-0"
            style={{
              width: 240,
              transform: 'rotate(8deg) scale(0.88)',
              transformOrigin: 'bottom center',
              marginLeft: -52,
              zIndex: 10,
              position: 'relative',
            }}
          >
            <PhoneFrame
              src="/screenshots/exhibitor.png"
              alt={t('Wystawcy', 'Exhibitors')}
            />
            <p
              className="text-center text-gray-400 text-xs font-medium mt-3"
              style={{ transform: 'rotate(-8deg)', transformOrigin: 'center' }}
            >
              {t('Wystawcy', 'Exhibitors')}
            </p>
          </div>
        </div>

      </div>{/* close desktop padded container */}
    </section>
  );
}
