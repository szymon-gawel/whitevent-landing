export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <a
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors mb-10"
        >
          ← Powrót do strony głównej
        </a>

        <h1 className="text-3xl font-bold mb-2" style={{ color: '#1E3A5F' }}>
          Polityka Prywatności
        </h1>
        <p className="text-sm text-gray-500 mb-8">Ostatnia aktualizacja: maj 2025</p>

        {/* 1 */}
        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          1. Administrator danych osobowych
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold">Szymon Gaweł Software Development</span>
          <br />
          Warszawa, Polska
          <br />
          E-mail:{' '}
          <a href="mailto:szymon.gawel@sgsoftware.pl" className="underline">
            szymon.gawel@sgsoftware.pl
          </a>
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          Jeśli masz pytania dotyczące przetwarzania Twoich danych osobowych, skontaktuj się z nami
          pod adresem:{' '}
          <a href="mailto:szymon.gawel@sgsoftware.pl" className="underline">
            szymon.gawel@sgsoftware.pl
          </a>
        </p>

        {/* 2 */}
        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          2. Jakie dane zbieramy
        </h2>

        <h3 className="font-semibold text-gray-800 mt-5 mb-2">
          2.1 Dane przesyłane przez formularz kontaktowy
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Gdy wypełniasz formularz kontaktowy na stronie whitevent.com, zbieramy:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
          <li>Imię i nazwisko</li>
          <li>Adres e-mail</li>
          <li>Nazwę firmy</li>
          <li>Nazwę eventu (opcjonalnie)</li>
          <li>Treść wiadomości (opcjonalnie)</li>
        </ul>

        <h3 className="font-semibold text-gray-800 mt-5 mb-2">
          2.2 Dane zbierane automatycznie
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Podczas korzystania z naszej strony internetowej automatycznie zbieramy anonimowe dane
          analityczne za pośrednictwem Vercel Analytics. Vercel Analytics nie używa plików cookies i
          nie śledzi użytkowników między sesjami.
        </p>

        <h3 className="font-semibold text-gray-800 mt-5 mb-2">
          2.3 Dane użytkowników aplikacji mobilnej Whitevent
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Jeśli jesteś użytkownikiem aplikacji mobilnej Whitevent, zbieramy:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
          <li>Adres e-mail i hasło (do logowania)</li>
          <li>Dane profilu uczestnika (imię, nazwisko, firma, stanowisko, opis)</li>
          <li>Token urządzenia do push notyfikacji</li>
          <li>Zapisy na warsztaty i rezerwacje spotkań</li>
          <li>Oceny sesji i komentarze (opcjonalnie)</li>
        </ul>

        {/* 3 */}
        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          3. Cel i podstawa prawna przetwarzania danych
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm text-gray-700">
            <thead>
              <tr>
                <th className="border border-gray-200 p-3 bg-gray-50 font-semibold text-left">
                  Cel przetwarzania
                </th>
                <th className="border border-gray-200 p-3 bg-gray-50 font-semibold text-left">
                  Podstawa prawna
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3">Obsługa formularza kontaktowego</td>
                <td className="border border-gray-200 p-3">
                  Art. 6 ust. 1 lit. b RODO — niezbędność do podjęcia działań przed zawarciem umowy
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">
                  Świadczenie usług aplikacji mobilnej Whitevent
                </td>
                <td className="border border-gray-200 p-3">
                  Art. 6 ust. 1 lit. b RODO — wykonanie umowy
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">Wysyłanie push notyfikacji</td>
                <td className="border border-gray-200 p-3">
                  Art. 6 ust. 1 lit. a RODO — zgoda użytkownika
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">
                  Analityka strony internetowej (anonimowa)
                </td>
                <td className="border border-gray-200 p-3">
                  Art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3">
                  Archiwizacja korespondencji biznesowej
                </td>
                <td className="border border-gray-200 p-3">
                  Art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4 */}
        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          4. Odbiorcy danych
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Twoje dane mogą być przekazywane następującym podmiotom:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
          <li>
            <span className="font-semibold">Formspree Inc.</span> (USA) — obsługa formularza
            kontaktowego
          </li>
          <li>
            <span className="font-semibold">Vercel Inc.</span> (USA) — hosting strony internetowej
            i anonimowa analityka
          </li>
          <li>
            <span className="font-semibold">Railway Corp.</span> (USA) — hosting backendu aplikacji
            i bazy danych
          </li>
          <li>
            <span className="font-semibold">Expo Technology Inc.</span> (USA) — infrastruktura push
            notyfikacji
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-3">
          Nie sprzedajemy Twoich danych osobowych żadnym podmiotom trzecim.
        </p>

        {/* 5 */}
        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          5. Przekazywanie danych poza EOG
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Część naszych dostawców ma siedzibę w Stanach Zjednoczonych. Przekazywanie danych odbywa
          się na podstawie standardowych klauzul umownych zatwierdzonych przez Komisję Europejską.
        </p>

        {/* 6 */}
        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          6. Okres przechowywania danych
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Dane z formularza kontaktowego — nie dłużej niż 2 lata od ostatniego kontaktu</li>
          <li>
            Dane kont użytkowników aplikacji — przez czas trwania konta; po usunięciu usuwane w
            ciągu 30 dni
          </li>
          <li>Dane analityczne — anonimowe, przechowywane do 90 dni</li>
          <li>Korespondencja e-mail — przez okres 5 lat</li>
        </ul>

        {/* 7 */}
        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          7. Twoje prawa
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Zgodnie z RODO przysługują Ci następujące prawa:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
          <li>Prawo dostępu</li>
          <li>Prawo do sprostowania</li>
          <li>Prawo do usunięcia ("prawo do bycia zapomnianym")</li>
          <li>Prawo do ograniczenia przetwarzania</li>
          <li>Prawo do przenoszenia danych</li>
          <li>Prawo do sprzeciwu</li>
          <li>Prawo do cofnięcia zgody</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-3">
          Aby skorzystać z powyższych praw:{' '}
          <a href="mailto:szymon.gawel@sgsoftware.pl" className="underline">
            szymon.gawel@sgsoftware.pl
          </a>
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          Masz prawo do złożenia skargi do{' '}
          <span className="font-semibold">
            Prezesa Urzędu Ochrony Danych Osobowych (UODO)
          </span>
          , ul. Stawki 2, 00-193 Warszawa,{' '}
          <a
            href="https://www.uodo.gov.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            www.uodo.gov.pl
          </a>
        </p>

        {/* 8 */}
        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          8. Pliki cookies
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Strona whitevent.com nie używa plików cookies do celów śledzenia lub marketingu. Vercel
          Analytics działa bez cookies i jest zgodne z RODO.
        </p>

        {/* 9 */}
        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          9. Bezpieczeństwo danych
        </h2>
        <p className="text-gray-700 leading-relaxed">Stosujemy następujące środki ochrony:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
          <li>Szyfrowanie połączeń (HTTPS/TLS)</li>
          <li>Hashowanie haseł (bcrypt)</li>
          <li>Bezpieczne przechowywanie tokenów na urządzeniach mobilnych</li>
          <li>Rate limiting chroniący przed atakami brute-force</li>
        </ul>

        {/* 10 */}
        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          10. Zmiany polityki prywatności
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Zastrzegamy sobie prawo do aktualizacji niniejszej polityki. O istotnych zmianach
          poinformujemy poprzez aktualizację daty na górze strony.
        </p>

        {/* 11 */}
        <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: '#1E3A5F' }}>
          11. Kontakt
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold">Szymon Gaweł Software Development</span>
          <br />
          E-mail:{' '}
          <a href="mailto:szymon.gawel@sgsoftware.pl" className="underline">
            szymon.gawel@sgsoftware.pl
          </a>
          <br />
          Warszawa, Polska
        </p>

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
