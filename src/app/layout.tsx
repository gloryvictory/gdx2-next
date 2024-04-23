import { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Suspense } from "react";


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
          <main className="container">
            <Suspense fallback={<div>Loading...</div>}>    
              {children}
            </Suspense>
          </main>
        <Footer />
      </body>
    </html>
  );
}
