import { useTranslation } from '../hooks/useTranslation';
import { t } from '../translations';

export default function Footer() {
  const { tr } = useTranslation();

  return (
    <footer className="bg-navy-deeper border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-2xl tracking-[0.15em] text-white mb-2">
              WHIT<span className="text-amber-500">E</span>VENT
            </div>
            <p className="text-gray-400 text-sm">
              {tr(t.footer.tagline)}
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="/privacy-policy"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              {tr(t.footer.privacy)}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-gray-600 text-xs">
            {tr(t.footer.copyright)}
          </p>
          <p className="text-gray-700 text-xs">
            {tr(t.footer.legal)}
          </p>
        </div>
      </div>
    </footer>
  );
}
