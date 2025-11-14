import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCL PrintEngine demo",
  description: "Standalone demo/prototype for Morning Coffee Labs PrintEngine"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no" data-theme="light">
      <body>
        {children}
      </body>
    </html>
  );
}
