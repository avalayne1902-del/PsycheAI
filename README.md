# backend/

Geplante MVP-Endpunkte:

- `POST /api/reflection` — Eingabe: freier Text → Ausgabe: strukturierte PsycheAI-Antwort (siehe database/schema.json, Feld ai_output)
- `GET /health` — Statuscheck

Ablaufreihenfolge im Handler: Safety Check → Analysis → Pattern Detector → Counter-Check → Strategy → Memory Decision.

Noch kein Code vorhanden — Platzhalter für Schritt 5 des Bauplans.
