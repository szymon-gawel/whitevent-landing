export type Lang = 'pl' | 'en';

export const t = {
  nav: {
    features: { pl: 'Funkcje', en: 'Features' },
    modules: { pl: 'Moduły', en: 'Modules' },
    faq: { pl: 'FAQ', en: 'FAQ' },
    contact: { pl: 'Kontakt', en: 'Contact' },
    cta: { pl: 'Zamów demo', en: 'Request demo' },
  },
  hero: {
    badge: { pl: 'Aplikacja iOS & Android', en: 'iOS & Android app' },
    headline1: { pl: 'Aplikacja mobilna', en: 'Mobile app' },
    headline2: { pl: 'na każdy event.', en: 'for every event.' },
    subtext: {
      pl: 'Dostarczamy gotową aplikację iOS i Android dedykowaną Twojemu eventowi. Agenda, prelegenci, networking i więcej - wszystko skonfigurowane pod Twoje potrzeby',
      en: 'We deliver a ready-made iOS and Android app dedicated to your event. Agenda, speakers, networking and more - all configured to your needs',
    },
    ctaPrimary: { pl: 'Zamów demo', en: 'Request demo' },
    ctaSecondary: { pl: 'Zobacz funkcje', en: 'See features' },
    stat1: { pl: 'iOS & Android', en: 'iOS & Android' },
    stat2: { pl: 'Gotowe w kilka dni', en: 'Ready in days' },
    stat3: { pl: 'Dedykowana aplikacja', en: 'Dedicated app' },
  },
  howItWorks: {
    label: { pl: 'Proces', en: 'Process' },
    headline: { pl: 'Jak to działa?', en: 'How it works?' },
    steps: [
      {
        title: { pl: 'Kontakt i brief', en: 'Contact & brief' },
        desc: { pl: 'Opowiedz nam o swoim evencie. Ustalamy zakres, moduły i branding', en: 'Tell us about your event. We define scope, modules and branding' },
      },
      {
        title: { pl: 'Konfigurujemy', en: 'Configure' },
        desc: { pl: 'Przygotowujemy aplikację pod Twój brand - logo, kolory, treści', en: 'We prepare the app with your brand - logo, colors, content' },
      },
      {
        title: { pl: 'Publikacja', en: 'Go live' },
        desc: { pl: 'Aplikacja gotowa na Twój event. Uczestnicy pobierają ją i są na bieżąco przez cały czas trwania eventu', en: 'App ready for your event. Attendees download it and stay up to date throughout the entire event' },
      },
    ],
  },
  features: {
    label: { pl: 'Funkcje', en: 'Features' },
    headline: { pl: 'Co zawiera aplikacja?', en: "What's included?" },
    subtext: { pl: 'Wszystko czego potrzebujesz do profesjonalnego eventu', en: 'Everything you need for a professional event' },
    items: [
      {
        title: { pl: 'Agenda', en: 'Agenda' },
        desc: { pl: 'Harmonogram eventu z sesjami, prelegentami i lokalizacjami. Uczestnicy zawsze wiedzą co, gdzie i kiedy', en: 'Event schedule with sessions, speakers and locations. Attendees always know what, where and when' },
      },
      {
        title: { pl: 'Prelegenci', en: 'Speakers' },
        desc: { pl: 'Profile prelegentów z biografią, zdjęciem i informacjami o firmie', en: 'Speaker profiles with biography, photo and company information' },
      },
      {
        title: { pl: 'Aktualności', en: 'News' },
        desc: { pl: 'Komunikaty organizatora w czasie rzeczywistym. Zmiany w agendzie, ogłoszenia i ważne informacje od razu w rękach uczestników', en: "Real-time organizer announcements. Schedule changes, updates and important information instantly in attendees' hands" },
      },
      {
        title: { pl: 'Push notyfikacje', en: 'Push notifications' },
        desc: { pl: 'Natychmiastowe powiadomienia na telefon. Przypomnienia o sesjach, zmiany planu i pilne komunikaty', en: 'Instant phone notifications. Session reminders, schedule changes and urgent messages' },
      },
      {
        title: { pl: 'Panel administracyjny', en: 'Admin panel' },
        desc: { pl: 'Pełna kontrola nad treścią aplikacji. Zarządzaj agendą, prelegentami i aktualnościami samodzielnie - bez angażowania naszego zespołu', en: 'Full control over app content. Manage agenda, speakers and announcements independently - without involving our team' },
      },
    ],
  },
  modules: {
    label: { pl: 'Rozszerzenia', en: 'Add-ons' },
    headline: { pl: 'Moduły dodatkowe', en: 'Optional modules' },
    subtext: { pl: 'Rozszerz aplikację o dodatkowe funkcje dopasowane do Twojego eventu. Każdy moduł aktywowany na życzenie', en: 'Extend the app with additional features tailored to your event. Each module activated on request' },
    items: [
      {
        title: { pl: 'Networking', en: 'Networking' },
        desc: { pl: 'Lista uczestników z profilami, kontaktem przez email i LinkedIn oraz umawianiem spotkań 1:1 na wybrany termin. Uczestnicy budują relacje biznesowe przed, w trakcie i po evencie', en: 'Attendee list with profiles, contact via email and LinkedIn, and 1:1 meeting scheduling with time slots. Attendees build business relationships before, during and after the event' },
      },
      {
        title: { pl: 'Wystawcy', en: 'Exhibitors' },
        desc: { pl: 'Profile wystawców z opisem, stoiskiem i możliwością umawiania spotkań bezpośrednio z poziomu aplikacji', en: 'Exhibitor profiles with description, booth number and meeting booking directly from the app' },
      },
      {
        title: { pl: 'Warsztaty', en: 'Workshops' },
        desc: { pl: 'Zapisy na warsztaty z limitem miejsc. Uczestnicy rejestrują się na wybrane sesje, organizator kontroluje frekwencję', en: 'Workshop registration with capacity limits. Attendees sign up for selected sessions, organizer controls attendance' },
      },
      {
        title: { pl: 'Sesje równoległe', en: 'Parallel sessions' },
        desc: { pl: 'Wiele ścieżek tematycznych jednocześnie. Uczestnicy wybierają sesje na które chcą pójść i budują swój plan dnia', en: 'Multiple tracks running simultaneously. Attendees choose sessions they want to attend and build their own schedule' },
      },
      {
        title: { pl: 'Bilety i check-in', en: 'Ticketing & check-in' },
        desc: { pl: 'Bilet z unikalnym kodem QR w telefonie uczestnika. Obsługa skanuje kod przy wejściu, także offline - dane synchronizują się automatycznie po odzyskaniu połączenia', en: "Ticket with a unique QR code in the attendee's phone. Staff scan it at the entrance, even offline - data syncs automatically once the connection is back" },
      },
      {
        title: { pl: 'Oceny i opinie', en: 'Ratings & feedback' },
        desc: { pl: 'Uczestnicy oceniają sesje i zostawiają komentarze bezpośrednio w aplikacji. Organizator na bieżąco widzi, co się podobało, a co wymaga poprawy', en: 'Attendees rate sessions and leave comments directly in the app. The organizer sees in real time what worked and what needs improvement' },
      },
      {
        title: { pl: 'Wielojęzyczność', en: 'Multi-language' },
        desc: { pl: 'Aplikacja dostępna dla uczestników w wielu językach jednocześnie - każdy wybiera swój w ustawieniach. Idealne dla eventów międzynarodowych', en: 'The app is available to attendees in multiple languages at once - everyone picks their own in settings. Perfect for international events' },
      },
    ],
  },
  faq: {
    label: { pl: 'FAQ', en: 'FAQ' },
    headline: { pl: 'Najczęstsze pytania', en: 'Frequently asked questions' },
    subtext: {
      pl: 'Nie znalazłeś odpowiedzi? Napisz do nas - chętnie rozwiejemy wszystkie wątpliwości',
      en: "Didn't find your answer? Write to us - we'll gladly clear up any doubts",
    },
    items: [
      {
        q: { pl: 'Co jeśli nie chcę niektórych funkcji z pakietu podstawowego?', en: "What if I don't want some of the base package features?" },
        a: {
          pl: 'Żaden problem. Pakiet podstawowy to punkt wyjścia, a nie sztywny zestaw. Funkcje, których nie potrzebujesz, po prostu ukrywamy - uczestnicy widzą tylko to, co faktycznie ma sens dla Twojego eventu. Aplikację dopasowujemy do Twojego zakresu, nie odwrotnie.',
          en: 'No problem. The base package is a starting point, not a fixed set. Features you don\'t need are simply hidden - attendees only see what actually makes sense for your event. We tailor the app to your scope, not the other way around.',
        },
      },
      {
        q: { pl: 'Ile czasu mija od pierwszego kontaktu do gotowej, wdrożonej aplikacji?', en: 'How long does it take from first contact to a fully deployed, ready-to-use app?' },
        a: {
          pl: 'W typowym przypadku aplikacja jest gotowa w kilka dni roboczych od potwierdzenia zakresu i otrzymania materiałów. Dokładny termin zależy od liczby modułów, ilości treści do wprowadzenia oraz tego, jak szybko dostarczysz materiały. Przy pilnych eventach jesteśmy w stanie pracować w trybie przyspieszonym - daj nam znać o terminie już w pierwszej wiadomości.',
          en: 'In a typical case the app is ready within a few business days from confirming the scope and receiving your materials. The exact timeline depends on the number of modules, the amount of content to enter and how quickly you provide the assets. For urgent events we can work in a fast-track mode - just let us know your date in the first message.',
        },
      },
      {
        q: { pl: 'Co powinienem podać w pierwszej wiadomości, żeby przyspieszyć proces?', en: 'What should I provide in the first message to speed up the process?' },
        a: {
          pl: 'Najbardziej pomaga krótki opis eventu: termin, przybliżona liczba uczestników oraz funkcje, które Cię interesują. Demo możemy przygotować na dwa sposoby. Jeśli chcesz zobaczyć w pełni obrandowaną aplikację (Twoje logo, kolory, treści), prześlij nam swoje materiały - logo, kolorystykę i przykładowe dane, np. fragment agendy czy listę prelegentów. Jeśli wolisz najpierw po prostu zobaczyć, jak działa aplikacja, pokażemy Ci ją na naszej wersji whitelabel - wtedy żadne materiały z Twojej strony nie są potrzebne.',
          en: 'The most helpful thing is a short description of your event: the date, an approximate number of attendees and the features you\'re interested in. We can prepare the demo in two ways. If you want to see a fully branded app (your logo, colors, content), send us your assets - logo, color scheme and some sample data, e.g. a piece of the agenda or a speaker list. If you\'d rather just see how the app works first, we\'ll show it to you on our whitelabel version - in that case no assets are needed from your side.',
        },
      },
      {
        q: { pl: 'Ile kosztuje aplikacja?', en: 'How much does the app cost?' },
        a: {
          pl: 'Cena zależy od wybranego pakietu i zakresu - liczby modułów, ilości treści oraz dodatkowych wymagań. Dlatego nie mamy jednej sztywnej stawki. Opowiedz nam o swoim evencie, a przygotujemy indywidualną, przejrzystą wycenę bez ukrytych kosztów.',
          en: 'The price depends on the chosen package and scope - the number of modules, the amount of content and any additional requirements. That\'s why we don\'t have a single fixed rate. Tell us about your event and we\'ll prepare an individual, transparent quote with no hidden costs.',
        },
      },
      {
        q: { pl: 'Na jakich platformach działa aplikacja?', en: 'Which platforms does the app run on?' },
        a: {
          pl: 'Dostarczamy natywną aplikację na iOS i Android. Uczestnicy pobierają ją z App Store lub Google Play na swój telefon - działa na obu systemach tak samo.',
          en: 'We deliver a native app for iOS and Android. Attendees download it from the App Store or Google Play onto their phone - it works the same on both systems.',
        },
      },
      {
        q: { pl: 'Czy mogę samodzielnie aktualizować treści w trakcie trwania eventu?', en: 'Can I update content myself during the event?' },
        a: {
          pl: 'Tak. Otrzymujesz panel administracyjny, w którym samodzielnie zarządzasz agendą, prelegentami i aktualnościami. Zmiany trafiają do uczestników od razu, a dzięki push notyfikacjom możesz błyskawicznie poinformować ich o zmianie planu - bez angażowania naszego zespołu.',
          en: 'Yes. You get an admin panel where you manage the agenda, speakers and announcements yourself. Changes reach attendees instantly, and thanks to push notifications you can immediately inform them about schedule changes - without involving our team.',
        },
      },
      {
        q: { pl: 'Czy uczestnicy płacą za aplikację?', en: 'Do attendees pay for the app?' },
        a: {
          pl: 'Nie. Dla uczestników pobranie i korzystanie z aplikacji jest bezpłatne. Koszt aplikacji ponosi organizator w ramach wybranego pakietu - uczestnicy po prostu pobierają ją ze sklepu i logują się na Twój event.',
          en: 'No. For attendees, downloading and using the app is free. The cost is covered by the organizer within the chosen package - attendees simply download it from the store and access your event.',
        },
      },
      {
        q: { pl: 'Czy aplikacja może być dostępna dla uczestników w kilku językach?', en: 'Can the app be available to attendees in multiple languages?' },
        a: {
          pl: 'Tak, dzięki modułowi wielojęzyczności aplikacja może być dostępna w kilku językach jednocześnie - każdy uczestnik wybiera swój język w ustawieniach. To idealne rozwiązanie dla eventów międzynarodowych. Zakres języków ustalamy wspólnie na etapie konfiguracji.',
          en: 'Yes, with the multi-language module the app can be available in several languages at once - each attendee picks their language in the settings. It\'s a perfect fit for international events. We agree on the set of languages together during configuration.',
        },
      },
    ],
  },
  contact: {
    label: { pl: 'Kontakt', en: 'Contact' },
    headline: { pl: 'Zamów demo', en: 'Request a demo' },
    subtext: { pl: 'Porozmawiajmy o Twoim evencie. Wspólnie dobierzemy odpowiednie funkcje i przygotujemy wycenę', en: "Let's talk about your event. Together we'll select the right features and prepare a quote" },
    fields: {
      name: { pl: 'Imię i nazwisko', en: 'Full name' },
      namePlaceholder: { pl: 'Jan Kowalski', en: 'John Smith' },
      nameRequired: { pl: 'Imię i nazwisko jest wymagane', en: 'Full name is required' },
      emailRequired: { pl: 'Email jest wymagany', en: 'Email is required' },
      emailInvalid: { pl: 'Podaj poprawny adres email', en: 'Enter a valid email address' },
      company: { pl: 'Firma', en: 'Company' },
      companyPlaceholder: { pl: 'Nazwa firmy', en: 'Company name' },
      companyRequired: { pl: 'Nazwa firmy jest wymagana', en: 'Company name is required' },
      event: { pl: 'Nazwa eventu', en: 'Event name' },
      eventPlaceholder: { pl: 'np. Forum HR 2025', en: 'e.g. HR Forum 2025' },
      optional: { pl: '(opcjonalnie)', en: '(optional)' },
      message: { pl: 'Wiadomość', en: 'Message' },
      messagePlaceholder: { pl: 'Opowiedz o swoim evencie - termin, liczba uczestników, oczekiwania...', en: 'Tell us about your event - date, number of attendees, expectations...' },
      submit: { pl: 'Wyślij wiadomość', en: 'Send message' },
      sending: { pl: 'Wysyłanie...', en: 'Sending...' },
      success: { pl: 'Dziękujemy!', en: 'Thank you!' },
      successSub: { pl: 'Odezwiemy się wkrótce', en: "We'll be in touch soon" },
      errorGeneral: { pl: 'Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio', en: 'An error occurred. Please try again or write to us directly' },
      errorNetwork: { pl: 'Brak połączenia. Sprawdź internet i spróbuj ponownie', en: 'No connection. Check your internet and try again' },
    },
    perks: [
      { pl: 'Odpowiadamy w 24h', en: 'We respond within 24h' },
      { pl: 'Darmowe demo i wycena', en: 'Free demo and quote' },
      { pl: 'Bez zobowiązań', en: 'No commitment' },
    ],
  },
  footer: {
    tagline: { pl: 'Twoja aplikacja eventowa. Twój brand.', en: 'Your event app. Your brand.' },
    privacy: { pl: 'Polityka prywatności', en: 'Privacy policy' },
    copyright: { pl: '© 2026 Whitevent. Wszelkie prawa zastrzeżone.', en: '© 2026 Whitevent. All rights reserved.' },
    legal: { pl: 'Marka handlowa prowadzona w ramach działalności gospodarczej', en: 'Brand operated as a sole trader business' },
  },
  appShowcase: {
    label: { pl: 'Demo', en: 'Demo' },
    headline: { pl: 'Zobacz na żywo', en: 'See it live' },
    subtext: { pl: 'Elegancki interfejs zaprojektowany z myślą o uczestnikach eventów', en: 'Elegant interface designed with event attendees in mind' },
    phoneLabels: {
      networking: { pl: 'Networking', en: 'Networking' },
      agenda: { pl: 'Agenda', en: 'Agenda' },
      exhibitors: { pl: 'Wystawcy', en: 'Exhibitors' },
    },
  },
} as const;

export function tr(key: { pl: string; en: string }, lang: Lang): string {
  return key[lang];
}
