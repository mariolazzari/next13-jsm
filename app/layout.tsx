import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrompTopia",
  description: "Discover AI world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
