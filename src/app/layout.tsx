import type { Metadata } from "next";
import { Bricolage_Grotesque, Montserrat } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parth Katlana | Data Scientist & ML Engineer",
  description:
    "Data Scientist / ML Engineer building production AI systems — from agentic LLM workflows and RAG pipelines to distributed deep learning on cloud-native infrastructure.",
  keywords: [
    "Parth Katlana",
    "Data Scientist",
    "ML Engineer",
    "Machine Learning",
    "LLM",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
