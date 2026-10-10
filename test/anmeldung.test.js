// Prüft die Vorauszahlung an denselben Fällen wie die Auswertung (FAELLE in C41 Filzmoos auswerten.py).
// Aufruf: node test/anmeldung.test.js
const { anmeldung } = require("../anmeldung.js");

const faelle = [
  { personen: 0, betrag: 0, gueltig: true },     // nicht dabei
  { personen: 1, betrag: 250, gueltig: true },
  { personen: 2, betrag: 500, gueltig: true },
  { personen: 3, betrag: 0, gueltig: false },    // nicht vorgesehen
];

let fehler = 0;
for (const f of faelle) {
  const a = anmeldung(f.personen);
  const ok = a.betrag === f.betrag && a.gueltig === f.gueltig;
  if (!ok) fehler++;
  console.log(`${ok ? "ok    " : "FEHLER"} ${f.personen} Personen: ${a.betrag} € (erwartet ${f.betrag}), gültig ${a.gueltig}`);
}
process.exit(fehler ? 1 : 0);
