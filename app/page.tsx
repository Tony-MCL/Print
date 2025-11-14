import Link from "next/link";

export default function HomePage() {
  return (
    <main className="app-shell">
      <header className="app-toolbar">
        <div className="app-toolbar-left">
          <span className="app-logo">MCL PrintEngine</span>
        </div>
      </header>

      <section className="app-content">
        <h1>PrintEngine – demo</h1>
        <p>
          Dette repoet er en isolert demo av Morning Coffee Labs PrintEngine.
        </p>
        <p>
          Bruk lenken under for å åpne en ren print-visning med dummy-data
          (formelrapport):
        </p>
        <p>
          <Link href="/print-demo" className="mcl-button">
            Åpne print-demo
          </Link>
        </p>
      </section>
    </main>
  );
}

