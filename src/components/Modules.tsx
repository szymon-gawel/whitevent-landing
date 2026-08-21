import { useTranslation } from '../hooks/useTranslation';
import { t } from '../translations';
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
  ticketing: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
  ),
  ratings: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  ),
  multiLanguage: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
  ),
};

function ModuleCard({ module, delay }: { module: Module; delay: number }) {
  const ref = useScrollAnimation(delay);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-on-scroll group bg-white rounded-2xl p-7 border border-gray-100 hover:border-navy/20 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full flex flex-col"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy/0 via-amber-500/50 to-navy/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5">
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
  const { tr } = useTranslation();
  const headingRef = useScrollAnimation();

  const modules: Module[] = [
    { icon: icons.networking,    title: tr(t.modules.items[0].title), desc: tr(t.modules.items[0].desc) },
    { icon: icons.exhibitors,    title: tr(t.modules.items[1].title), desc: tr(t.modules.items[1].desc) },
    { icon: icons.workshops,     title: tr(t.modules.items[2].title), desc: tr(t.modules.items[2].desc) },
    { icon: icons.parallel,      title: tr(t.modules.items[3].title), desc: tr(t.modules.items[3].desc) },
    { icon: icons.ticketing,     title: tr(t.modules.items[4].title), desc: tr(t.modules.items[4].desc) },
    { icon: icons.ratings,       title: tr(t.modules.items[5].title), desc: tr(t.modules.items[5].desc) },
    { icon: icons.multiLanguage, title: tr(t.modules.items[6].title), desc: tr(t.modules.items[6].desc) },
  ];

  return (
    <section id="modules" className="py-24 bg-navy-deeper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className="animate-on-scroll text-center mb-14"
        >
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {tr(t.modules.label)}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {tr(t.modules.headline)}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {tr(t.modules.subtext)}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {modules.map((mod, i) => (
            <div key={i} className="w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.833rem)] flex">
              <ModuleCard module={mod} delay={i * 80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
