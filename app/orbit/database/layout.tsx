import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "The Vault | 15,000+ Tagged Question Repository",
  description: "Centralized curricular question bank indexed by micro-concept, board exam history, and difficulty weights for instant institutional querying.",
  alternates: {
    canonical: "/orbit/database",
  },
};

export default function DatabaseLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.baseUrl}/orbit/database/#webpage`,
    "url": `${SITE_CONFIG.baseUrl}/orbit/database`,
    "name": "Orbit The Vault Database",
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