import { useTranslation } from '../hooks/useTranslation';
import { t } from '../translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Step {
  number: string;
  title: string;
  desc: string;
}

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useScrollAnimation(index * 120);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-on-scroll relative"
    >
      {/* Connector line (not on last) */}
      {index < 2 && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-[-50%] h-px bg-gradient-to-r from-amber-500/40 to-transparent z-0" />
      )}

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Step number circle */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center border-2 border-amber-500/30 shadow-[0_0_0_8px_rgba(245,158,11,0.06)]">
            <span className="font-display font-bold text-3xl text-amber-500">
              {step.number}
            </span>
          </div>
        </div>

        <h3 className="font-display font-bold text-xl text-navy mb-3">{step.title}</h3>
        <p className="text-gray-500 text-base leading-relaxed max-w-xs">{step.desc}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const { tr } = useTranslation();
  const headingRef = useScrollAnimation();

  const steps: Step[] = [
    { number: '01', title: tr(t.howItWorks.steps[0].title), desc: tr(t.howItWorks.steps[0].desc) },
    { number: '02', title: tr(t.howItWorks.steps[1].title), desc: tr(t.howItWorks.steps[1].desc) },
    { number: '03', title: tr(t.howItWorks.steps[2].title), desc: tr(t.howItWorks.steps[2].desc) },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className="animate-on-scroll text-center mb-16"
        >
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {tr(t.howItWorks.label)}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy">
            {tr(t.howItWorks.headline)}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-6 relative">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
