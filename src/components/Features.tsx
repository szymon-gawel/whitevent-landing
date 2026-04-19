import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const icons = {
  agenda: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
  ),
  speakers: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
  ),
  news: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
  ),
  push: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  ),
  admin: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  ),
};

function FeatureCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) {
  const ref = useScrollAnimation(delay);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-on-scroll group bg-white rounded-2xl p-7 border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
        <svg
          className="w-6 h-6 text-amber-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {icon}
        </svg>
      </div>
      <h3 className="font-display font-bold text-lg text-navy mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Features() {
  const { t } = useLanguage();
  const headingRef = useScrollAnimation();

  const features = [
    {
      icon: icons.agenda,
      title: t('Agenda', 'Agenda'),
      desc: t(
        'Harmonogram eventu z sesjami, prelegentami i lokalizacjami. Uczestnicy zawsze wiedzą co, gdzie i kiedy.',
        'Event schedule with sessions, speakers and locations. Attendees always know what, where and when.'
      ),
    },
    {
      icon: icons.speakers,
      title: t('Prelegenci', 'Speakers'),
      desc: t(
        'Profile prelegentów z biografią, zdjęciem i informacjami o firmie.',
        'Speaker profiles with biography, photo and company information.'
      ),
    },
    {
      icon: icons.news,
      title: t('Aktualności', 'News'),
      desc: t(
        'Komunikaty organizatora w czasie rzeczywistym. Zmiany w agendzie, ogłoszenia i ważne informacje od razu w rękach uczestników.',
        'Real-time organizer announcements. Schedule changes, updates and important information instantly in attendees\' hands.'
      ),
    },
    {
      icon: icons.push,
      title: t('Push notyfikacje', 'Push notifications'),
      desc: t(
        'Natychmiastowe powiadomienia na telefon. Przypomnienia o sesjach, zmiany planu i pilne komunikaty.',
        'Instant phone notifications. Session reminders, schedule changes and urgent messages.'
      ),
    },
    {
      icon: icons.admin,
      title: t('Panel administracyjny', 'Admin panel'),
      desc: t(
        'Pełna kontrola nad treścią aplikacji. Zarządzaj agendą, prelegentami i aktualnościami samodzielnie — bez angażowania naszego zespołu.',
        'Full control over app content. Manage agenda, speakers and announcements independently — without involving our team.'
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className="animate-on-scroll text-center mb-14"
        >
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {t('Funkcje', 'Features')}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy mb-4">
            {t('Co zawiera aplikacja?', "What's included?")}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t(
              'Wszystko czego potrzebujesz do profesjonalnego eventu.',
              'Everything you need for a professional event.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.slice(0, 3).map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 80} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto mt-6">
          {features.slice(3).map((f, i) => (
            <FeatureCard key={i + 3} {...f} delay={(i + 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
