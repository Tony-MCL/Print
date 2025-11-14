import type { PrintData, PrintSection as PrintSectionType } from "../../lib/print/types";
import PrintSection from "./PrintSection";

type PrintLayoutProps = PrintData & {
  watermarkUrl?: string;
  showWatermark?: boolean;
};

export default function PrintLayout({
  title,
  subtitle,
  meta,
  sections,
  watermarkUrl,
  showWatermark = false
}: PrintLayoutProps) {
  return (
    <div className="pe-root">
      <div className="pe-page">
        {showWatermark && watermarkUrl && (
          <div className="pe-watermark">
            <img src={watermarkUrl} alt="MCL watermark" />
          </div>
        )}

        <header className="pe-header">
          <h1 className="pe-title">{title}</h1>
          {subtitle && <h2 className="pe-subtitle">{subtitle}</h2>}
          {meta && meta.length > 0 && (
            <dl className="pe-meta">
              {meta.map((item) => (
                <div className="pe-meta-row" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </header>

        <main className="pe-content">
          {sections.map((section: PrintSectionType) => (
            <PrintSection key={section.id} section={section} />
          ))}
        </main>
      </div>
    </div>
  );
}
