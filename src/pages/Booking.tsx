import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { t } from '../translations';
import Footer from '../components/Footer';

// Replace with your Calendly event link, e.g. https://calendly.com/your-name/30min
const CALENDLY_URL = 'https://calendly.com/whitevent/30min';
const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';

const MIN_HEIGHT = 440;

export default function Booking() {
  const { tr } = useTranslation();
  const { lang, setLang } = useLanguage();
  const configured = !CALENDLY_URL.includes('REPLACE_WITH');
  const [height, setHeight] = useState(MIN_HEIGHT);

  useEffect(() => {
    document.title = `${tr(t.booking.headline)} — Whitevent`;
  }, [lang]);

  useEffect(() => {
    if (!configured) return;
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) return;
    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, [configured]);

  // Calendly reports its content height; follow it so the card has no empty space
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!e.origin.endsWith('calendly.com')) return;
      if (e.data?.event !== 'calendly.page_height') return;
      const h = parseInt(e.data.payload?.height, 10);
      // ignore the tiny values reported while Calendly is still loading
      if (h >= 300) setHeight(Math.max(h, MIN_HEIGHT));
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  // Calendly reads these query params to match the page design and language
  const widgetUrl = `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=f59e0b&locale=${lang}`;

  return (
    <div className="min-h-screen font-sans antialiased bg-navy-deeper text-white flex flex-col">
      <header className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-display font-bold text-xl tracking-[0.15em] select-none">
          WHIT<span className="text-amber-500">E</span>VENT
        </a>
        <div className="flex items-center gap-1 text-sm font-medium">
          {(['pl', 'en'] as const).map((l, i) => (
            <span key={l} className="flex items-center gap-1">
              {i > 0 && <span className="text-gray-600 text-xs">|</span>}
              <button
                onClick={() => setLang(l)}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === l ? 'text-amber-500 font-semibold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {l.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
          {tr(t.booking.back)}
        </a>

        <div className="mt-8 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2 lg:pt-4">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
              {tr(t.booking.label)}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-5">{tr(t.booking.headline)}</h1>
            <p className="text-gray-300 leading-relaxed mb-8">{tr(t.booking.subtext)}</p>

            <ul className="space-y-4">
              {t.booking.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500/15 text-amber-500">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {tr(point)}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3 text-sm">
              {configured && (
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {tr(t.booking.openExternal)}
                </a>
              )}
              <a href="/#contact" className="block text-amber-500 hover:text-amber-400 transition-colors">
                {tr(t.booking.contactCta)}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden bg-white shadow-2xl shadow-black/40 ring-1 ring-white/10">
            {configured ? (
              <div
                key={lang}
                className="calendly-inline-widget"
                data-url={widgetUrl}
                style={{ minWidth: 320, height }}
              />
            ) : (
              <div className="p-10 text-center text-gray-600">{tr(t.booking.notConfigured)}</div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
