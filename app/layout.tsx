import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Next Auth Login",
  description: "A simple Next.js authentication example using dummyjson.com",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <header className="header">
            <h1>Next Auth Login</h1>
          </header>
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
