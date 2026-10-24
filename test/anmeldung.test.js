// Prüft die Vorauszahlung an denselben Fällen wie die Auswertung (FAELLE in C41 Filzmoos auswerten.py).
// Aufruf: node test/anmeldung.test.js
const { anmeldung } = require("../anmeldung.js");

const faelle = [
  { personen: 0, aufenthalt: "", betrag: 0, gueltig: true },              // nicht dabei
  { personen: 1, aufenthalt: "", betrag: 250, gueltig: true },            // ohne Angabe: ganze Reise
  { personen: 2, aufenthalt: "ganze Reise", betrag: 500, gueltig: true },
  { personen: 1, aufenthalt: "nur Freitag", betrag: 125, gueltig: true },
  { personen: 2, aufenthalt: "nur Samstag", betrag: 250, gueltig: true },
  { personen: 3, aufenthalt: "ganze Reise", betrag: 0, gueltig: false },  // nicht vorgesehen
  { personen: 1, aufenthalt: "nur Sonntag", betrag: 0, gueltig: false },  // nicht vorgesehen
];

let fehler = 0;
for (const f of faelle) {
  const a = anmeldung(f.personen, f.aufenthalt);
  const ok = a.betrag === f.betrag && a.gueltig === f.gueltig;
  if (!ok) fehler++;
  console.log(`${ok ? "ok    " : "FEHLER"} ${f.personen} Personen, ${f.aufenthalt || "ohne Angabe"}: ${a.betrag} € (erwartet ${f.betrag}), gültig ${a.gueltig}`);
}
process.exit(fehler ? 1 : 0);
