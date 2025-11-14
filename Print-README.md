# MCL PrintEngine – README

Denne modulen er laget for å kunne gjenbrukes på tvers av alle Morning Coffee Labs-applikasjoner
(Formelsamling, Gantt/ManageProgress, Befaringsapp, osv.) som en felles utskriftsmotor.

Målet er:

- Forutsigbar, pen utskriftslayout (A4-fokus)
- Ett sett komponenter og CSS som brukes i alle apper
- Skille mellom:
  - **Innholdslag** (rapporten)
  - **Branding-lag** (logo og vannmerke)
- Klart for lisenslogikk (f.eks. fjerne vannmerke, bytte logo til kundelogo)

---

## 1. Filstruktur og hva som hører til PrintEngine

### 1.1. Kjernefiler (må være med i alle apper som skal bruke PrintEngine)

**TypeScript / logikk**

Disse filene er selve “motoren”:

```txt
/lib/print/types.ts         # Generelle typer (PrintData, PrintSection, tabeller osv.)
/lib/print/branding.ts      # Branding-motor (logo/vannmerke og lisens-modes)
