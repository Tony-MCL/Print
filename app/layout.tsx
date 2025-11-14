import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "MCL PrintEngine Demo",
  description: "Reusable print layout for Morning Coffee Labs"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
