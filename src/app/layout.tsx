import type { Metadata } from "next";
import { Header } from "@/components";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Alpha | Portfolio",
  description: "Created using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-amber-400">
        <Header />
        {children}
      </body>
    </html>
  );
}
