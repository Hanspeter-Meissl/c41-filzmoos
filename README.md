# Anmeldeseite Clubreise Filzmoos, Club 41

Anmeldung zur Clubreise nach Filzmoos mit Weihnachtsfeier (4. bis 6. Dezember 2026) für die
Mitglieder des Club 41 Grieskirchen-Hausruck. Veröffentlicht über GitHub Pages, gebaut nach dem
Muster der SERVINO-Bestellseite `c41-servino`.

Das Mitglied wählt 1 Person, 2 Personen oder keine Anmeldung, bei 2 Personen mit dem Namen der
Begleitung. Seit 24. Oktober 2026 wählt es außerdem den Aufenthalt: ganze Reise (vorgewählt), nur
Freitag oder nur Samstag mit einer Übernachtung. Bei einer Nacht folgt die Übernachtung (Zimmer über
den Club oder selbst organisiert) und beim Zimmer über den Club für 1 Person der Zimmerwunsch
(Einzel- oder Doppelzimmer); 2 Personen bekommen ein Doppelzimmer. Die Seite zeigt sofort die
Vorauszahlung: 250 € je Person für die ganze Reise, 125 € je Person bei einer Nacht. „Anmeldung prüfen“ zeigt
die Anmeldung noch einmal, „Anmeldung abschicken“ schickt sie an die Google-Web-App
„Filzmoos Anmeldung“ (Konstante `GOOGLE` in `index.html`, Quelle
`03 Bereiche/Club C41/Clubreise Filzmoos/Google/Code.gs` im Vault). Die Web-App prüft das Mitglied
und schreibt eine Zeile in die Google-Tabelle „Filzmoos Anmeldungen 2026“.

Ersatzweg ist eine vorbereitete Mail an Hanspeter: Die Seite bietet sie an, wenn Google nicht
antwortet, der Link keine Kennung trägt oder `GOOGLE` leer ist.

Der persönliche Link trägt die Kennung des Mitglieds (`m`), den Vornamen für die Anrede (`n`) und die
Partnerin aus der Mitgliederliste als Vorschlag für die Begleitung (`b`):
`?m=Nr.%2018%20Meissl&n=Hanspeter&b=Karin`. Erzeugt von `C41 Filzmoos Links erzeugen.py` im Vault.

## Dateien

- `index.html`: Seite, Programm, Adresse der Google-Web-App
- `anmeldung.js`: Vorauszahlung je Person und Aufenthalt
- `test/anmeldung.test.js`: Prüfung der Regel, `node test/anmeldung.test.js`
- `bilder/`: Wappen und Vorschaubild 1200 × 630 für geteilte Links, erzeugt von
  `C41 Filzmoos Vorschaubild erzeugen.py` im Vault

Die Regel steht außerdem in der Auswertung im Vault (`C41 Filzmoos auswerten.py`) und in der Web-App
(`Google/Code.gs`). Bei einer Änderung alle drei Stellen nachziehen. Die Web-App wird vor der Seite
bereitgestellt: Eine Anmeldung für eine Nacht käme bei der alten Web-App ohne Aufenthalt an.

Das Repository ist öffentlich. Die Adresse der Web-App darf hinein, der Exportschlüssel nie.

## Lokal ansehen

`python -m http.server 8141 --directory .` und dann `http://localhost:8141/?m=Nr.%2018%20Meissl&n=Hanspeter`.
