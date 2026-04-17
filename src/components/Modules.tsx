import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Module {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const icons = {
  networking: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  ),
  exhibitors: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016 2.993 2.993 0 0 0 2.25-1.015 3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
  ),
  workshops: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  ),
  parallel: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
  ),
};

function ModuleCard({ module, delay }: { module: Module; delay: number }) {
  const ref = useScrollAnimation(delay);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-on-scroll group bg-white rounded-2xl p-7 border border-gray-100 hover:border-navy/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy/0 via-amber-500/50 to-navy/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-navy/10 transition-colors">
        <svg
          className="w-6 h-6 text-navy"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {module.icon}
        </svg>
      </div>

      <h3 className="font-display font-bold text-xl text-navy mb-2">{module.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{module.desc}</p>
    </div>
  );
}

export default function Modules() {
  const { t } = useLanguage();
  const headingRef = useScrollAnimation();

  const modules: Module[] = [
    {
      icon: icons.networking,
      title: t('Networking', 'Networking'),
      desc: t(
        'Lista uczestników z profilami i możliwością kontaktu przez email i LinkedIn. Uczestnicy budują relacje biznesowe przed, w trakcie i po evencie.',
        'Attendee list with profiles and contact via email and LinkedIn. Attendees build business relationships before, during and after the event.'
      ),
    },
    {
      icon: icons.exhibitors,
      title: t('Wystawcy', 'Exhibitors'),
      desc: t(
        'Profile wystawców z opisem, stoiskiem i możliwością umawiania spotkań bezpośrednio z poziomu aplikacji.',
        'Exhibitor profiles with description, booth number and meeting booking directly from the app.'
      ),
    },
    {
      icon: icons.workshops,
      title: t('Warsztaty', 'Workshops'),
      desc: t(
        'Zapisy na warsztaty z limitem miejsc. Uczestnicy rejestrują się na wybrane sesje, organizator kontroluje frekwencję.',
        'Workshop registration with capacity limits. Attendees sign up for selected sessions, organizer controls attendance.'
      ),
    },
    {
      icon: icons.parallel,
      title: t('Sesje równoległe', 'Parallel sessions'),
      desc: t(
        'Wiele ścieżek tematycznych jednocześnie. Uczestnicy wybierają sesje na które chcą pójść i budują swój plan dnia.',
        'Multiple tracks running simultaneously. Attendees choose sessions they want to attend and build their own schedule.'
      ),
    },
  ];

  return (
    <section id="modules" className="py-24 bg-navy-deeper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className="animate-on-scroll text-center mb-14"
        >
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {t('Rozszerzenia', 'Add-ons')}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {t('Moduły dodatkowe', 'Optional modules')}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t(
              'Rozszerz aplikację o dodatkowe funkcje dopasowane do Twojego eventu. Każdy moduł aktywowany na życzenie.',
              'Extend the app with additional features tailored to your event. Each module activated on request.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modules.map((mod, i) => (
            <ModuleCard key={i} module={mod} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
