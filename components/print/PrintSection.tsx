import type { PrintSection as PrintSectionType, PrintContentBlock } from "../../lib/print/types";

type Props = {
  section: PrintSectionType;
};

export default function PrintSection({ section }: Props) {
  return (
    <section className="pe-section">
      {section.title && <h3 className="pe-section-title">{section.title}</h3>}

      {section.content.map((block: PrintContentBlock, index) => {
        if (block.type === "paragraph") {
          return (
            <p className="pe-paragraph" key={index}>
              {block.text}
            </p>
          );
        }

        if (block.type === "keyValueList") {
          const className =
            block.columns === 2
              ? "pe-keyvalue-list pe-keyvalue-list--two-columns"
              : "pe-keyvalue-list";

          return (
            <dl className={className} key={index}>
              {block.items.map((item) => (
                <div className="pe-kv-row" key={item.key}>
                  <dt>{item.key}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          );
        }

        if (block.type === "table") {
          return (
            <div className="pe-table-wrapper" key={index}>
              <table className="pe-table">
                {block.headers && (
                  <thead>
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {block.rows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.cells.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className={
                            cell.align ? `pe-align-${cell.align}` : undefined
                          }
                        >
                          {cell.value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        return null;
      })}
    </section>
  );
}
