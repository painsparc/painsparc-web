import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Manifesto & Architecture Logic",
  description: "The architectural philosophy of The Painsparc Company and Pushkar Wagh: zero-latency tolerance, workflow deconstruction, and friction removal.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Painsparc Manifesto | Complexity is the Enemy",
    description: "We architect intelligent software systems designed to absorb complexity.",
    url: `${SITE_CONFIG.baseUrl}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_CONFIG.baseUrl}/about/#webpage`,
    "url": `${SITE_CONFIG.baseUrl}/about`,
    "name": "About The Painsparc Company",
    "description": "Architectural principles, engineering philosophy, and operational manifesto of Pushkar Wagh and The Painsparc Company.",
    "isPartOf": {
      "@id": `${SITE_CONFIG.baseUrl}/#website`
    },
    "about": [
      { "@id": `${SITE_CONFIG.baseUrl}/#organization` },
      { "@id": `${SITE_CONFIG.baseUrl}/#pushkar-wagh` }
    ]
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