import PrintLayout from "../../components/print/PrintLayout";
import PrintButton from "../../components/print/PrintButton";
import type { PrintData, PrintTableRow } from "../../lib/print/types";

function makeRows(count: number): PrintTableRow[] {
  const rows: PrintTableRow[] = [];
  for (let i = 1; i <= count; i++) {
    rows.push({
      cells: [
        { value: `Rad ${i}` },
        { value: `${i * 10} A`, align: "right" },
        { value: `${i * 5} Ω`, align: "right" },
        { value: `${i * 50} V`, align: "right" }
      ]
    });
  }
  return rows;
}

const longData: PrintData = {
  title: "Lang test-rapport",
  subtitle: "Test av fler-siders utskrift",
  meta: [
    { label: "App", value: "MCL PrintEngine" },
    { label: "Scenario", value: "Lang tabell / fler sider" }
  ],
  sections: [
    {
      id: "intro",
      title: "Innledning",
      content: [
        {
          type: "paragraph",
          text: "Denne rapporten er laget for å teste utskrift over flere sider. Tabellene under er lange nok til å tvinge frem side 2, 3 og eventuelt 4, slik at vi kan verifisere at vannmerke ikke forstyrrer innholdet og at logoen ikke ligger oppå tabellen på senere sider."
        }
      ]
    },
    {
      id: "table",
      title: "Lang tabell",
      content: [
        {
          type: "table",
          headers: ["Beskrivelse", "Strøm", "Motstand", "Spenning"],
          rows: makeRows(120)
        }
      ]
    }
  ]
};

export default function PrintLongPage() {
  const basePath = "";
  const watermarkUrl = `${basePath}/images/mcl-watermark.png`;
  const logoUrl = `${basePath}/images/mcl-logo.png`;

  return (
    <main>
      <PrintLayout
        {...longData}
        watermarkUrl={watermarkUrl}
        showWatermark={true}
        logoUrl={logoUrl}
        logoAlt="Morning Coffee Labs"
      />

      <div className="pe-root pe-no-print">
        <div className="pe-page">
          <PrintButton />
        </div>
      </div>
    </main>
  );
}
