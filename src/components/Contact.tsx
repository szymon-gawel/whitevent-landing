import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  company: string;
  eventName: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
}

// Replace REPLACE_WITH_FORM_ID with your Formspree form ID.
// Create a free form at https://formspree.io — you'll get an ID like "xrgvkpla".
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_FORM_ID';

export default function Contact() {
  const { t } = useLanguage();
  const headingRef = useScrollAnimation();
  const formRef = useScrollAnimation(120);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    eventName: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.name.trim()) {
      e.name = t('Imię i nazwisko jest wymagane', 'Full name is required');
    }
    if (!formData.email.trim()) {
      e.email = t('Email jest wymagany', 'Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = t('Podaj poprawny adres email', 'Enter a valid email address');
    }
    if (!formData.company.trim()) {
      e.company = t('Nazwa firmy jest wymagana', 'Company name is required');
    }
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          event_name: formData.eventName,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(
          t(
            'Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio.',
            'An error occurred. Please try again or write to us directly.'
          )
        );
      }
    } catch {
      setSubmitError(
        t(
          'Brak połączenia. Sprawdź internet i spróbuj ponownie.',
          'No connection. Check your internet and try again.'
        )
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field?: string) =>
    `w-full bg-white/8 border rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm transition-all duration-200 focus:bg-white/12 focus:ring-1 ${
      field
        ? 'border-red-500/60 focus:border-red-400 focus:ring-red-400/30'
        : 'border-white/15 focus:border-amber-500/60 focus:ring-amber-500/20'
    }`;

  return (
    <section id="contact" className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div
            ref={headingRef as React.RefObject<HTMLDivElement>}
            className="animate-on-scroll lg:sticky lg:top-28"
          >
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
              {t('Kontakt', 'Contact')}
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5 leading-tight">
              {t('Zamów demo', 'Request a demo')}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {t(
                'Porozmawiajmy o Twoim evencie. Wspólnie dobierzemy odpowiednie funkcje i przygotujemy wycenę.',
                "Let's talk about your event. Together we'll select the right features and prepare a quote."
              )}
            </p>

            {/* Trust signals */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  ),
                  text: t('Odpowiadamy w 24h', 'We respond within 24h'),
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  ),
                  text: t('Darmowe demo i wycena', 'Free demo and quote'),
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  ),
                  text: t('Bez zobowiązań', 'No commitment'),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.icon}
                    </svg>
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            ref={formRef as React.RefObject<HTMLDivElement>}
            className="animate-on-scroll"
          >
            {submitted ? (
              <div className="bg-white/5 border border-amber-500/30 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/15 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  {t('Dziękujemy!', 'Thank you!')}
                </h3>
                <p className="text-gray-400">
                  {t('Odezwiemy się wkrótce.', "We'll be in touch soon.")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white/4 border border-white/10 rounded-2xl p-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    {t('Imię i nazwisko', 'Full name')}{' '}
                    <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('Jan Kowalski', 'John Smith')}
                    className={inputClass(errors.name)}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jan@firma.pl"
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    {t('Firma', 'Company')}{' '}
                    <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t('Nazwa firmy', 'Company name')}
                    className={inputClass(errors.company)}
                  />
                  {errors.company && (
                    <p className="text-red-400 text-xs mt-1">{errors.company}</p>
                  )}
                </div>

                {/* Event name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    {t('Nazwa eventu', 'Event name')}{' '}
                    <span className="text-gray-600 text-xs font-normal">
                      {t('(opcjonalnie)', '(optional)')}
                    </span>
                  </label>
                  <input
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    placeholder={t('np. Forum HR 2025', 'e.g. HR Forum 2025')}
                    className={inputClass()}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    {t('Wiadomość', 'Message')}{' '}
                    <span className="text-gray-600 text-xs font-normal">
                      {t('(opcjonalnie)', '(optional)')}
                    </span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t(
                      'Opowiedz o swoim evencie — termin, liczba uczestników, oczekiwania...',
                      'Tell us about your event — date, number of attendees, expectations...'
                    )}
                    className={`${inputClass()} resize-none`}
                  />
                </div>

                {/* Submit error */}
                {submitError && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                    {submitError}
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/50 text-navy-deeper font-semibold py-3.5 rounded-xl text-base transition-all duration-200 hover:shadow-[0_0_24px_rgba(245,158,11,0.35)] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t('Wysyłanie...', 'Sending...')}
                    </>
                  ) : (
                    t('Wyślij wiadomość', 'Send message')
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
