"use client";

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Allgemeine Hinweise</h2>
          <p className="text-gray-300 leading-relaxed">
            Diese Datenschutzerklärung informiert Sie über die Art, den Umfang
            und den Zweck der Verarbeitung personenbezogener Daten auf dieser
            Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Hosting</h2>
          <p className="text-gray-300 leading-relaxed">
            Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, USA gehostet. Beim Besuch der Website werden
            automatisch Informationen (z.B. IP-Adresse, Browsertyp, Zeitpunkt
            des Zugriffs) in Server-Logfiles gespeichert. Diese Daten sind nicht
            bestimmten Personen zuordenbar und werden zur Sicherstellung eines
            störungsfreien Betriebs erhoben.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Webanalyse</h2>
          <p className="text-gray-300 leading-relaxed">
            Diese Website nutzt Vercel Web Analytics, einen datenschutzfreundlichen
            Analysedienst. Vercel Analytics verwendet <strong>keine Cookies</strong> und
            speichert keine personenbezogenen Daten. Es werden lediglich
            anonymisierte Informationen erfasst, wie z.B. Seitenaufrufe,
            Verweildauer, ungefährer Standort (Land/Region) und verwendeter
            Browser. Eine Identifikation einzelner Nutzer ist nicht möglich.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Ihre Rechte</h2>
          <p className="text-gray-300 leading-relaxed">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer Daten sowie das Recht auf
            Datenübertragbarkeit. Bei Fragen zum Datenschutz können Sie sich
            jederzeit an mich wenden.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Externe Links</h2>
          <p className="text-gray-300 leading-relaxed">
            Diese Website enthält Links zu externen Websites (z.B. GitHub,
            LinkedIn). Für deren Inhalte und Datenschutzpraktiken übernehme ich
            keine Verantwortung.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Stand: Dezember 2025
          </p>
        </div>
      </div>
    </main>
  );
}
