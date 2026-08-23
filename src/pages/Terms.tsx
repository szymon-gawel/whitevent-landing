export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <a
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors mb-10"
        >
          ← Powrót do strony głównej
        </a>

        <div className="mb-8 p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-900">
          <span className="font-semibold">Wersja robocza — do konsultacji prawnej.</span> Ten
          dokument jest szkicem przygotowanym do przeglądu, nie ostateczną treścią prawną.
          Miejsca w nawiasach kwadratowych [...] wymagają uzupełnienia lub potwierdzenia przed
          publikacją.
        </div>

        <h1 className="text-3xl font-bold mb-2" style={{ color: '#1E3A5F' }}>
          Regulamin świadczenia usług drogą elektroniczną
        </h1>
        <p className="text-sm text-gray-500 mb-8">Wersja robocza: sierpień 2026</p>

        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          §1. Postanowienia ogólne
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>
            Niniejszy regulamin określa zasady świadczenia usług drogą elektroniczną przez{' '}
            <span className="font-semibold">Szymon Gaweł Software Development</span>{' '}
            [uzupełnić: dokładna forma prawna, adres siedziby, NIP, REGON, jeśli dotyczy] z
            siedzibą w Warszawie ("Usługodawca"), za pośrednictwem platformy Whitevent, na którą
            składają się: strona internetowa whitevent.com, aplikacja mobilna Whitevent oraz
            panel administracyjny dla organizatorów wydarzeń (łącznie "Platforma").
          </li>
          <li>
            Regulamin jest udostępniony nieodpłatnie za pośrednictwem strony internetowej w
            formie umożliwiającej jego pozyskanie, odtwarzanie i utrwalanie, zgodnie z art. 8
            ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.
          </li>
          <li>
            Platforma jest oferowana w dwóch modelach: (a) jako oprogramowanie SaaS dla
            organizatorów wydarzeń biznesowych ("Organizator", "Klient"), na podstawie odrębnej
            umowy handlowej / zamówienia, do którego niniejszy regulamin ma zastosowanie
            uzupełniające; oraz (b) jako aplikacja mobilna dla uczestników wydarzeń
            obsługiwanych przez Platformę ("Uczestnik", "Użytkownik").
          </li>
        </ol>

        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          §2. Definicje
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          <li><span className="font-semibold">Platforma</span> — łącznie strona whitevent.com, aplikacja mobilna Whitevent i panel administracyjny.</li>
          <li><span className="font-semibold">Organizator</span> — podmiot gospodarczy korzystający z Platformy do obsługi własnego wydarzenia, będący jednocześnie administratorem danych osobowych swoich Uczestników w rozumieniu RODO.</li>
          <li><span className="font-semibold">Uczestnik</span> — osoba fizyczna korzystająca z aplikacji mobilnej Whitevent jako uczestnik wydarzenia obsługiwanego przez Organizatora.</li>
          <li><span className="font-semibold">Konto</span> — indywidualne konto Uczestnika w aplikacji mobilnej, zabezpieczone adresem e-mail i hasłem.</li>
          <li><span className="font-semibold">Usługi</span> — funkcjonalności udostępniane w ramach Platformy, w tym: agenda wydarzenia, profile prelegentów i wystawców, rejestracja na warsztaty, networking i umawianie spotkań, bilety elektroniczne i weryfikacja wejścia (check-in), powiadomienia push.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          §3. Rodzaj i zakres usług
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Za pośrednictwem Platformy Usługodawca świadczy w szczególności następujące usługi:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
          <li>udostępnianie treści informacyjnych o wydarzeniu (agenda, prelegenci, wystawcy, aktualności);</li>
          <li>zakładanie i prowadzenie Konta Uczestnika;</li>
          <li>generowanie i weryfikację biletów elektronicznych (kod QR, kod zapasowy);</li>
          <li>umożliwianie zapisów na warsztaty w ramach dostępnych miejsc;</li>
          <li>umożliwianie networkingu — przeglądania profili innych Uczestników oraz umawiania spotkań, w zakresie w jakim Uczestnik udostępnił swoje dane w tym celu;</li>
          <li>wysyłkę powiadomień push związanych z wydarzeniem, zgodnie z ustawieniami zgód Uczestnika;</li>
          <li>dla Organizatorów — panel administracyjny do zarządzania treścią wydarzenia i listą uczestników.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          §4. Warunki techniczne korzystania z Platformy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Korzystanie z Platformy wymaga: urządzenia mobilnego z systemem iOS lub Android w
          wersji wspieranej przez producenta [uzupełnić: minimalne wersje systemów], dostępu do
          Internetu, oraz — dla pełnej funkcjonalności aplikacji mobilnej — aktywnego adresu
          e-mail. Usługodawca nie gwarantuje działania Platformy na urządzeniach niespełniających
          tych wymagań.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          §5. Zawarcie i rozwiązanie umowy o świadczenie usług
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>
            Umowa o świadczenie usług drogą elektroniczną z Uczestnikiem zostaje zawarta z
            chwilą założenia Konta w aplikacji mobilnej i zaakceptowania niniejszego regulaminu
            oraz Polityki Prywatności.
          </li>
          <li>
            Uczestnik może w każdej chwili zrezygnować z korzystania z Platformy poprzez
            zaprzestanie korzystania z aplikacji. Żądanie usunięcia Konta i powiązanych danych
            osobowych następuje zgodnie z zasadami opisanymi w Polityce Prywatności (prawo do
            usunięcia danych, art. 17 RODO) — [uzupełnić: docelowy kanał zgłoszenia, np. adres
            e-mail lub funkcja w aplikacji, po wdrożeniu].
          </li>
          <li>
            Usługodawca zastrzega sobie prawo do zawieszenia lub usunięcia Konta Uczestnika w
            przypadku naruszenia niniejszego regulaminu, w szczególności prób nieuprawnionego
            dostępu do danych innych Uczestników lub naruszenia bezpieczeństwa Platformy.
          </li>
          <li>
            Warunki współpracy z Organizatorami (w tym okres obowiązywania, wynagrodzenie,
            zasady wypowiedzenia) określa odrębna umowa handlowa zawierana indywidualnie z każdym
            Organizatorem.
          </li>
        </ol>

        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          §6. Prawa i obowiązki stron
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>Uczestnik zobowiązany jest do podawania danych zgodnych z prawdą oraz korzystania z Platformy w sposób zgodny z prawem i dobrymi obyczajami.</li>
          <li>Uczestnik zobowiązany jest do zachowania poufności danych logowania do swojego Konta.</li>
          <li>Usługodawca dokłada starań, aby Platforma działała nieprzerwanie, zastrzegając możliwość czasowych przerw technicznych, w tym w celu przeprowadzenia konserwacji lub aktualizacji.</li>
          <li>Zabronione jest dostarczanie przez Uczestnika treści o charakterze bezprawnym.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          §7. Postępowanie reklamacyjne
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Reklamacje dotyczące funkcjonowania Platformy można zgłaszać na adres e-mail{' '}
          <a href="mailto:szymon.gawel@sgsoftware.pl" className="underline">
            szymon.gawel@sgsoftware.pl
          </a>{' '}
          z opisem zgłaszanego problemu. Usługodawca rozpatruje reklamacje w terminie
          [uzupełnić: np. 14 dni roboczych] od dnia otrzymania zgłoszenia i informuje
          zgłaszającego o wyniku rozpatrzenia reklamacji na adres e-mail, z którego reklamacja
          została wysłana.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          §8. Odpowiedzialność
        </h2>
        <p className="text-gray-700 leading-relaxed">
          [Do uzupełnienia z prawnikiem — zakres wyłączenia/ograniczenia odpowiedzialności
          Usługodawcy, w szczególności wobec Organizatorów w ramach umowy SaaS, oraz zasady
          odpowiedzialności za dostępność Platformy i poprawność danych wprowadzanych przez
          Organizatora lub Uczestników.]
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          §9. Ochrona danych osobowych
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Zasady przetwarzania danych osobowych Uczestników i Organizatorów opisane są w{' '}
          <a href="/privacy-policy" className="underline">
            Polityce Prywatności
          </a>
          , stanowiącej integralne uzupełnienie niniejszego regulaminu. W relacji z
          Organizatorami, w zakresie w jakim Usługodawca przetwarza dane Uczestników w imieniu i
          na zlecenie Organizatora, zastosowanie ma odrębna umowa powierzenia przetwarzania
          danych osobowych (art. 28 RODO).
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          §10. Postanowienia końcowe
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>Usługodawca zastrzega sobie prawo do zmiany niniejszego regulaminu z ważnych przyczyn (zmiana zakresu usług, zmiana przepisów prawa). O zmianach Uczestnicy zostaną poinformowani z odpowiednim wyprzedzeniem [uzupełnić: minimalny termin, np. 14 dni] poprzez aktualizację daty na górze dokumentu oraz — w przypadku istotnych zmian — dodatkowe powiadomienie w aplikacji.</li>
          <li>W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności Kodeksu cywilnego, ustawy o świadczeniu usług drogą elektroniczną oraz RODO.</li>
          <li>Ewentualne spory będą rozstrzygane przez sąd właściwy według przepisów ogólnych, z zastrzeżeniem bezwzględnie obowiązujących przepisów dotyczących ochrony konsumentów, jeśli mają zastosowanie.</li>
        </ol>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <a
            href="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← Powrót do strony głównej
          </a>
        </div>
      </div>
    </div>
  );
}
