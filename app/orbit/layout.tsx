import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Orbit | Next-Generation Education Management System",
  description: "Orbit is an institutional education platform by The Painsparc Company featuring unlimited auto-test generation, multi-tenant partitioning, and flash attendance.",
  alternates: {
    canonical: "/orbit",
  },
  openGraph: {
    title: "System 01 — Orbit | Education Management Redefined",
    description: "Zero friction. Infinite scale. Constraint-solved scheduling and automated exam delivery.",
    url: `${SITE_CONFIG.baseUrl}/orbit`,
  },
};

export default function OrbitLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_CONFIG.baseUrl}/orbit/#software`,
        "name": SITE_CONFIG.products.orbit.name,
        "applicationCategory": SITE_CONFIG.products.orbit.category,
        "operatingSystem": "Web Browser, Cross-Platform",
        "url": `${SITE_CONFIG.baseUrl}/orbit`,
        "description": SITE_CONFIG.products.orbit.description,
        "creator": {
          "@id": `${SITE_CONFIG.baseUrl}/#organization`
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/OnlineOnly"
        },
        "featureList": [
          "Auto-Test Engine with Native LaTeX Parsing",
          "The Vault: Centralized Question Bank",
          "Flash Attendance Rapid-Fire Mode",
          "Neural Timetable Constraint Solver",
          "Logical Multi-Tenant Isolation"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_CONFIG.baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Orbit",
            "item": `${SITE_CONFIG.baseUrl}/orbit`
          }
        ]
      }
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