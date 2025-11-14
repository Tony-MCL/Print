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

        <h2>Enkle demosider</h2>
        <ul>
          <li>
            <Link href="/print-demo" className="mcl-button">
              Enkel formelrapport
            </Link>
          </li>
        </ul>

        <h2>Test av robuste utskrifter</h2>
        <ul>
          <li>
            <Link href="/print-long" className="mcl-button">
              Lang rapport (flere sider)
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
