import Link from "next/link";

export default function HomePage() {
  return (
    <main className="pe-root">
      <div className="pe-page">
        <h1 className="pe-title">MCL PrintEngine – Demo</h1>
        <p className="pe-paragraph">
          Dette er en liten demoinstans av PrintEngine-modulen. Bruk lenkene
          under for å teste en enkel rapport og en lengre rapport som går over
          flere sider.
        </p>

        <ul>
          <li>
            <Link href="/print-demo">Enkel formelrapport</Link>
          </li>
          <li>
            <Link href="/print-long">Lang rapport (flere sider)</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
