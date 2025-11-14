import PrintLayout from "../../components/print/PrintLayout";
import PrintButton from "../../components/print/PrintButton";
import PrintOverlay from "../../components/print/PrintOverlay";
import type { PrintData } from "../../lib/print/types";

const demoData: PrintData = {
  title: "Ohms lov",
  subtitle: "Eksempelrapport fra Digital Formelsamling",
  meta: [
    { label: "Kategori", value: "Elkraft" },
    { label: "System", value: "230 V IT" },
    { label: "Dato", value: "2025-11-14" }
  ],
  sections: [
    {
      id: "intro",
      title: "Beskrivelse",
      content: [
        {
          type: "paragraph",
          text:
            "Ohms lov beskriver sammenhengen mellom spenning, strøm og resistans i en elektrisk krets."
        }
      ]
    },
    {
      id: "base-formula",
      title: "Grunnuttrykk",
      content: [
        {
          type: "keyValueList",
          items: [
            { key: "Grunnuttrykk", value: "U = R · I" },
            { key: "Løs for strøm", value: "I = U / R" },
            { key: "Løs for resistans", value: "R = U / I" }
          ],
          columns: 1
        }
      ]
    },
    {
      id: "variants",
      title: "Variant brukt i kalkulator",
      content: [
        {
          type: "keyValueList",
          items: [
            { key: "Valgt variant", value: "Løs for I" },
            { key: "Gitt spenning", value: "230 V" },
            { key: "Gitt resistans", value: "46 Ω" }
          ],
          columns: 1
        }
      ]
    },
    {
      id: "values",
      title: "Inndata og resultat",
      content: [
        {
          type: "table",
          headers: ["Størrelse", "Symbol", "Verdi", "Enhet"],
          rows: [
            {
              cells: [
                { value: "Spenning", align: "left" },
                { value: "U", align: "center" },
                { value: "230", align: "right" },
                { value: "V", align: "left" }
              ]
            },
            {
              cells: [
                { value: "Resistans", align: "left" },
                { value: "R", align: "center" },
                { value: "46", align: "right" },
                { value: "Ω", align: "left" }
              ]
            },
            {
              cells: [
                { value: "Strøm (beregnet)", align: "left" },
                { value: "I", align: "center" },
                { value: "5", align: "right" },
                { value: "A", align: "left" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default function PrintDemoPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const watermarkUrl = `${basePath}/images/mcl-watermark.png`;
  const logoUrl = `${basePath}/images/mcl-logo.png`;

  return (
    <main className="print-page-shell">
      {/* Globalt overlay brukes kun i print */}
      <PrintOverlay
        watermarkUrl={watermarkUrl}
        logoUrl={logoUrl}
        logoAlt="Morning Coffee Labs"
      />

      <div id="print-root">
        <PrintLayout
          title={demoData.title}
          subtitle={demoData.subtitle}
          meta={demoData.meta}
          sections={demoData.sections}
          watermarkUrl={watermarkUrl}
          showWatermark
          logoUrl={logoUrl}
          logoAlt="Morning Coffee Labs"
        />
      </div>

      <div className="print-toolbar pe-no-print">
        <PrintButton label="Skriv ut / lagre som PDF" />
      </div>
    </main>
  );
}
