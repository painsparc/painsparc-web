import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Auto-Test Engine & Exam Generator",
  description: "Algorithmic generation of balanced question papers and answer keys with zero inter-paper overlap and native LaTeX typography.",
  alternates: {
    canonical: "/orbit/generator",
  },
};

export default function GeneratorLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.baseUrl}/orbit/generator/#webpage`,
    "url": `${SITE_CONFIG.baseUrl}/orbit/generator`,
    "name": "Orbit Auto-Test Engine",
    "isPartOf": { "@id": `${SITE_CONFIG.baseUrl}/orbit/#software` }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}