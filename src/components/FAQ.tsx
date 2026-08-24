import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { t } from '../translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface QA {
  q: string;
  a: string;
}

function FaqItem({ item, index, isOpen, onToggle }: { item: QA; index: number; isOpen: boolean; onToggle: () => void }) {
  const ref = useScrollAnimation(index * 70);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-on-scroll bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 group"
        >
          <span className="font-display font-semibold text-lg text-navy">{item.q}</span>
          <span
            className={`shrink-0 w-8 h-8 rounded-full bg-navy/5 group-hover:bg-amber-500/10 flex items-center justify-center transition-all duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-gray-500 text-base leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { tr } = useTranslation();
  const headingRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items: QA[] = t.faq.items.map((item) => ({ q: tr(item.q), a: tr(item.a) }));

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className="animate-on-scroll text-center mb-14"
        >
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {tr(t.faq.label)}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-navy mb-4">
            {tr(t.faq.headline)}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {tr(t.faq.subtext)}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
