import { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "Отчеты",
  description: "Отчеты",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
          <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
