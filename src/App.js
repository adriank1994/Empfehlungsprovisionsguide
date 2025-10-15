import React, { useState } from "react";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const EmpfehlungsprovisionGuide = () => {
  const [kundenwert, setKundenwert] = useState(1000);
  const [provision, setProvision] = useState(7.5);
  const [empfehlungen, setEmpfehlungen] = useState(10);

  const berechneProvision = () => {
    const provisionBetrag = (kundenwert * provision) / 100;
    const gesamtUmsatz = kundenwert * empfehlungen;
    const gesamtProvision = provisionBetrag * empfehlungen;
    const nettoUmsatz = gesamtUmsatz - gesamtProvision;
    const roas = kundenwert / provisionBetrag;

    return {
      provisionBetrag: provisionBetrag.toFixed(2),
      gesamtUmsatz: gesamtUmsatz.toFixed(2),
      gesamtProvision: gesamtProvision.toFixed(2),
      nettoUmsatz: nettoUmsatz.toFixed(2),
      roas: roas.toFixed(1),
    };
  };

  const ergebnis = berechneProvision();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header mit Logo */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center rounded-lg">
                <span className="text-white text-3xl font-bold">K</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">KIWUS</h1>
                <p className="text-sm text-gray-600">
                  Empfehlungsmarketing-Experten
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Der ultimative Guide zur Berechnung deiner Empfehlungsprovision
          </h2>
          <p className="text-gray-600 mt-2">
            Für selbstständige Finanzdienstleister und Dienstleister
          </p>
        </div>

        {/* Einleitung */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Warum ist die richtige Provisionshöhe entscheidend?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Die Höhe deiner Empfehlungsprovision ist ein kritischer
                Erfolgsfaktor. Ist sie zu niedrig, fehlt der Anreiz für Kunden,
                dich weiterzuempfehlen. Ist sie zu hoch, gefährdest du deine
                Profitabilität.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nach Dieter Kiwus' bewährter Formel sollte die Provision
                zwischen <strong>5-10% des Kundenwerts</strong> liegen – das
                ergibt einen hervorragenden ROAS von 10-20.
              </p>
            </div>
          </div>
        </div>

        {/* Die Kiwus-Formel */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 mb-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Die Kiwus-Formel für Empfehlungsprovisionen
          </h3>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-4">
            <p className="text-xl text-center font-mono mb-2">
              Empfehlungsprovision = Kundenwert × (5-10%)
            </p>
            <p className="text-center text-sm opacity-90">
              Nach Pauschalversteuerung (falls anwendbar)
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">5%</div>
              <div className="text-sm opacity-90">
                Minimum für nachhaltigen Anreiz
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">7,5%</div>
              <div className="text-sm opacity-90">Empfohlener Durchschnitt</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">10%</div>
              <div className="text-sm opacity-90">
                Maximum für hohe Profitabilität
              </div>
            </div>
          </div>
        </div>

        {/* Interaktiver Rechner */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Calculator className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              Interaktiver Provisions-Rechner
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Kundenwert (€)
              </label>
              <input
                type="number"
                value={kundenwert}
                onChange={(e) => setKundenwert(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Durchschnittlicher Umsatz pro Kunde
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Provisionssatz (%)
              </label>
              <input
                type="number"
                step="0.5"
                value={provision}
                onChange={(e) => setProvision(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">Empfohlen: 5-10%</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Anzahl Empfehlungen
              </label>
              <input
                type="number"
                value={empfehlungen}
                onChange={(e) => setEmpfehlungen(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Erwartete Empfehlungen pro Jahr
              </p>
            </div>
          </div>

          {/* Ergebnisse */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
            <h4 className="font-bold text-gray-800 mb-4">Deine Kennzahlen:</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">
                  Provision pro Empfehlung
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  €{ergebnis.provisionBetrag}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Gesamtumsatz</div>
                <div className="text-2xl font-bold text-green-600">
                  €{ergebnis.gesamtUmsatz}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">
                  Gesamte Provisionen
                </div>
                <div className="text-2xl font-bold text-orange-600">
                  €{ergebnis.gesamtProvision}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">ROAS</div>
                <div className="text-2xl font-bold text-purple-600">
                  {ergebnis.roas}:1
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <div className="text-sm text-gray-600 mb-1">
                Dein Netto-Umsatz nach Provisionen
              </div>
              <div className="text-3xl font-bold text-gray-800">
                €{ergebnis.nettoUmsatz}
              </div>
            </div>
          </div>
        </div>

        {/* Praxisbeispiele */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              Praxisbeispiele aus der Branche
            </h3>
          </div>

          <div className="space-y-6">
            {/* Beispiel 1 */}
            <div className="border-2 border-blue-100 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    Versicherungsmakler
                  </h4>
                  <p className="text-sm text-gray-600">
                    Privatkunden mit Altersvorsorge
                  </p>
                </div>
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-800 text-sm font-semibold">
                    Optimal
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-500">Kundenwert</div>
                  <div className="text-lg font-bold">€2.500</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Provision</div>
                  <div className="text-lg font-bold text-blue-600">7%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Provisionsbetrag</div>
                  <div className="text-lg font-bold text-green-600">€175</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">ROAS</div>
                  <div className="text-lg font-bold text-purple-600">14:1</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Strategie:</strong> Wunschgutschein ab 50€ +
                gestaffeltes Bonusprogramm bis iPad (5. Empfehlung)
              </p>
            </div>

            {/* Beispiel 2 */}
            <div className="border-2 border-blue-100 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    Steuerberater
                  </h4>
                  <p className="text-sm text-gray-600">
                    KMU und Selbstständige
                  </p>
                </div>
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-800 text-sm font-semibold">
                    Optimal
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-500">Kundenwert</div>
                  <div className="text-lg font-bold">€5.000</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Provision</div>
                  <div className="text-lg font-bold text-blue-600">5%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Provisionsbetrag</div>
                  <div className="text-lg font-bold text-green-600">€250</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">ROAS</div>
                  <div className="text-lg font-bold text-purple-600">20:1</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Strategie:</strong> Restaurant-Gutscheine +
                Erlebnisgutscheine (Jochen Schweizer)
              </p>
            </div>

            {/* Beispiel 3 */}
            <div className="border-2 border-blue-100 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    Unternehmensberater
                  </h4>
                  <p className="text-sm text-gray-600">B2B Projekte</p>
                </div>
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-800 text-sm font-semibold">
                    Optimal
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-500">Kundenwert</div>
                  <div className="text-lg font-bold">€15.000</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Provision</div>
                  <div className="text-lg font-bold text-blue-600">6%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Provisionsbetrag</div>
                  <div className="text-lg font-bold text-green-600">€900</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">ROAS</div>
                  <div className="text-lg font-bold text-purple-600">
                    16.7:1
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Strategie:</strong> Hochwertige Prämien (Apple Produkte,
                Wellness-Wochenenden)
              </p>
            </div>

            {/* Beispiel 4 - Negativ */}
            <div className="border-2 border-red-100 rounded-lg p-6 bg-red-50">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    Coach (Fehler-Beispiel)
                  </h4>
                  <p className="text-sm text-gray-600">
                    Online-Coaching-Programme
                  </p>
                </div>
                <div className="bg-red-100 px-3 py-1 rounded-full">
                  <span className="text-red-800 text-sm font-semibold">
                    Zu hoch!
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-500">Kundenwert</div>
                  <div className="text-lg font-bold">€3.000</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Provision</div>
                  <div className="text-lg font-bold text-red-600">20%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Provisionsbetrag</div>
                  <div className="text-lg font-bold text-red-600">€600</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">ROAS</div>
                  <div className="text-lg font-bold text-red-600">5:1</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Problem:</strong> Provision frisst Gewinnmarge auf –
                nicht nachhaltig!
              </p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              Best Practices für deine Empfehlungsprovision
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Kundenwert realistisch berechnen
                  </h4>
                  <p className="text-sm text-gray-600">
                    Berücksichtigen Sie Lifetime Value, nicht nur den Erstumsatz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Gestaffelte Bonusprogramme nutzen
                  </h4>
                  <p className="text-sm text-gray-600">
                    Motivieren Sie zu mehrfachen Empfehlungen durch aufsteigende
                    Prämien
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Emotionale Prämien bevorzugen
                  </h4>
                  <p className="text-sm text-gray-600">
                    Erlebnisse und physische Produkte schaffen stärkere
                    Verbindungen als Bargeld
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Steueroptimierung beachten
                  </h4>
                  <p className="text-sm text-gray-600">
                    Pauschalversteuerung oder Sachgeschenke bis 50€ jährlich
                    nutzen
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-red-100 rounded-full p-1 mt-1">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Nicht zu niedrig ansetzen
                  </h4>
                  <p className="text-sm text-gray-600">
                    Unter 5% fehlt oft der notwendige Anreiz für aktive
                    Empfehlungen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-100 rounded-full p-1 mt-1">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Nicht zu hoch ansetzen
                  </h4>
                  <p className="text-sm text-gray-600">
                    Über 10% gefährdet deine Profitabilität und Nachhaltigkeit
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-100 rounded-full p-1 mt-1">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Keine Bargeld-Prämien ohne Vertrag
                  </h4>
                  <p className="text-sm text-gray-600">
                    Steuerliche Risiken vermeiden – Sachprämien oder
                    Tippgebervertrag nutzen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-100 rounded-full p-1 mt-1">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Performance nicht messen
                  </h4>
                  <p className="text-sm text-gray-600">
                    Ohne Tracking kannst du deinen Empfehlungsprozess nicht
                    optimieren
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schritt-für-Schritt Anleitung */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            In 5 Schritten zur optimalen Provisionshöhe
          </h3>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Kundenwert berechnen",
                description:
                  "Ermittle den durchschnittlichen Umsatz pro Kunde über die gesamte Kundenbeziehung (Lifetime Value)",
              },
              {
                step: 2,
                title: "Ziel-ROAS festlegen",
                description:
                  "Definiere, welchen Return on Advertising Spend du anstrebst (empfohlen: 10-20:1)",
              },
              {
                step: 3,
                title: "Provisionssatz berechnen",
                description:
                  "Nutze die Kiwus-Formel: 5-10% des Kundenwerts = deine Empfehlungsprovision",
              },
              {
                step: 4,
                title: "Prämienstruktur entwickeln",
                description:
                  "Erstelle ein gestaffeltes Bonusprogramm mit emotionalen Prämien",
              },
              {
                step: 5,
                title: "Testen und optimieren",
                description:
                  "Messe die Conversion-Rate und passe bei Bedarf an",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Bereit, dein Empfehlungsmarketing auf das nächste Level zu heben?
          </h3>
          <p className="mb-6 text-lg opacity-90">
            Nutze TellScale für automatisierte, professionelle
            Empfehlungsprogramme
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.dieterkiwus.de/termin-buchung-abschliessen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Kostenlose Beratung anfragen
            </a>
            <a
              href="https://www.tellscale.de"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-block"
            >
              Empfehlungssoftware TellScale entdecken
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>© 2025 Kiwus Consulting | Empfehlungsmarketing-Experten</p>
          <p className="mt-2">Dieter & Adrian Kiwus | www.dieterkiwus.de</p>
        </div>
      </div>
    </div>
  );
};

export default EmpfehlungsprovisionGuide;
