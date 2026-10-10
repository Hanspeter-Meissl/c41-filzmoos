// Vorauszahlung der Anmeldung zur Clubreise nach Filzmoos 2026.
// Dieselbe Regel steht in der Auswertung (Zweites Gehirn, 03 Bereiche/Club C41/Clubreise Filzmoos/
// C41 Filzmoos auswerten.py). Bei einer Änderung beide nachziehen.
//
// Je Person 250 € Vorauszahlung. Erlaubt sind 0 (nicht dabei), 1 und 2 Personen.

const VORAUSZAHLUNG = 250;
const PERSONEN = [0, 1, 2];

function anmeldung(personen) {
  const gueltig = PERSONEN.includes(personen);
  return { gueltig, personen: gueltig ? personen : 0, betrag: gueltig ? personen * VORAUSZAHLUNG : 0 };
}

if (typeof module !== "undefined") module.exports = { VORAUSZAHLUNG, PERSONEN, anmeldung };
