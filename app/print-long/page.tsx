// app/print-long/page.tsx
import PrintLayout from "../../components/print/PrintLayout";
import PrintButton from "../../components/print/PrintButton";
import PrintOverlay from "../../components/print/PrintOverlay";
import type { PrintData } from "../../lib/print/types";

function makeLongDemoData(): PrintData {
  const sections: PrintData["sections"] = [];

  for (let i = 1; i <= 5; i++) {
    sections.push({
      id: `intro-${i}`,
      title: `Beskrivelse – del ${i}`,
      content: [
        {
          type: "paragraph",
          text:
            "Dette er en lengre demoseksjon brukt for å teste utskrift over flere sider. " +
            "Målet er å se hvordan seksjoner og tabeller oppfører seg når innholdet strekker seg utover én A4-side."
        },
        {
          type: "paragraph",
          text:
            "Vi ønsker å unngå at overskrifter havner nederst på en side med tilhørende tekst på neste, " +
            "og at tabellrader blir delt i to mellom sider."
        }
      ]
    });
  }

  const rows = [];
  for (let i = 1; i <= 40; i++) {
    rows.push({
      cells: [
        { value: `Rad ${i}`, align: "left" },
        { value: `U${i}`, align: "center" },
        { value: `${200 + i}`, align: "right" },
        { value: "V", align: "left" }
      ]
    });
  }

  sections.push({
    id: "big-table",
    title: "Stor tabell for testing av sideskift",
    content: [
      {
        type: "table",
        headers: ["Størrelse", "Symbol", "Verdi", "Enhet"],
        rows
      }
    ]
  });

  return {
    title: "Lang rapport – test av utskrift",
    subtitle: "Flersidesrapport for PrintEngine",
    meta: [
      { label: "Kategori", value: "Test" },
      { label: "System", value: "Demo" },
      { label: "Dato", value: "2025-11-14" }
    ],
    sections
  };
}

export default function PrintLongPage() {
  const data = makeLongDemoData();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const watermarkUrl = `${basePath}/images/mcl-watermark.png`;
  const logoUrl = `${basePath}/images/mcl-logo.png`;

  return (
    <>
      {/* Overlay utenfor print-root */}
      <PrintOverlay
        watermarkUrl={watermarkUrl}
        logoUrl={logoUrl}
        logoAlt="Morning Coffee Labs"
      />

      <main className="print-page-shell">
        <div id="print-root">
          <PrintLayout
            title={data.title}
            subtitle={data.subtitle}
            meta={data.meta}
            sections={data.sections}
            watermarkUrl={watermarkUrl}
            showWatermark
            logoUrl={logoUrl}
            logoAlt="Morning Coffee Labs"
          />
        </div>

        <div className="print-toolbar pe-no-print">
          <PrintButton label="Skriv ut / lagre som PDF (lang rapport)" />
        </div>
      </main>
    </>
  );
}
