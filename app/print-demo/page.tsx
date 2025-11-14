// /app/print-demo/page.tsx

import PrintLayout from "../../components/print/PrintLayout";
import PrintButton from "../../components/print/PrintButton";
import type { PrintData } from "../../lib/print/types";
import { resolvePrintBranding } from "../../lib/print/branding";

const demoData: PrintData = {
  title: "Ohms lov",
  subtitle: "Enkel formelrapport – demo",
  meta: [
    { label: "Kategori", value: "Elkraft" },
    { label: "Formel ID", value: "ohm-001" },
    { label: "Dato", value: "14.11.2025" }
  ],
  sections: [
    {
      id: "intro",
      title: "Beskrivelse",
      content: [
        {
          type: "paragraph",
          text: "Ohms lov beskriver sammenhengen mellom spenning, strøm og motstand i en elektrisk krets."
        }
      ]
    },
    {
      id: "formula",
      title: "Grunnuttrykk",
      content: [
        {
          type: "paragraph",
          text: "U = R · I"
        }
      ]
    },
    {
      id: "values",
      title: "Verdier brukt i dette eksemplet",
      content: [
        {
          type: "keyValueList",
          items: [
            { key: "Spenning (U)", value: "230 V" },
            { key: "Strøm (I)", value: "10 A" },
            { key: "Motstand (R)", value: "23 Ω" },
            { key: "Resultat", value: "U = 230 V" }
          ],
          columns: 1
        }
      ]
    }
  ]
};

export default function PrintDemoPage() {
  // Her kan du senere bytte mode basert på lisens / app-konfig
  const branding = resolvePrintBranding({ mode: "mcl" });

  return (
    <main>
      <PrintLayout
        {...demoData}
        {...branding}
      />

      <div className="pe-root pe-no-print">
        <div className="pe-page">
          <PrintButton />
        </div>
      </div>
    </main>
  );
}
