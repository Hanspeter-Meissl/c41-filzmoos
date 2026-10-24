// Vorauszahlung der Anmeldung zur Clubreise nach Filzmoos 2026.
// Dieselbe Regel steht in der Auswertung (Zweites Gehirn, 03 Bereiche/Club C41/Clubreise Filzmoos/
// C41 Filzmoos auswerten.py) und in der Web-App (Google/Code.gs). Bei einer Änderung alle nachziehen.
//
// Erlaubt sind 0 (nicht dabei), 1 und 2 Personen. Je Person 250 € für die ganze Reise, 125 € bei nur
// einer Nacht, gleich ob mit Zimmer über den Club oder selbst organisierter Übernachtung
// (entschieden am 24. Oktober 2026). Ohne Angabe gilt die ganze Reise, so bleiben die Anmeldungen
// von vorher gültig.

const VORAUSZAHLUNG = 250;
const PERSONEN = [0, 1, 2];
const AUFENTHALTE = { "ganze Reise": 250, "nur Freitag": 125, "nur Samstag": 125 };
const UEBERNACHTUNGEN = ["Hotel", "selbst organisiert"];
const ZIMMER = ["Einzelzimmer", "Doppelzimmer"];

function anmeldung(personen, aufenthalt) {
  const ort = aufenthalt || "ganze Reise";
  const je = personen === 0 ? 0 : AUFENTHALTE[ort];
  const gueltig = PERSONEN.includes(personen) && je !== undefined;
  return { gueltig, personen: gueltig ? personen : 0, je: gueltig ? je : 0, betrag: gueltig ? personen * je : 0 };
}

if (typeof module !== "undefined") module.exports = { VORAUSZAHLUNG, PERSONEN, AUFENTHALTE, UEBERNACHTUNGEN, ZIMMER, anmeldung };
