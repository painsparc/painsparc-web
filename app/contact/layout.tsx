import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Secure Communications & Integration Inquiries",
  description: "Initiate direct contact with Pushkar Wagh and The Painsparc Company for software architecture, system deployment, and enterprise integration.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact The Painsparc Company | Open a Secure Channel",
    description: "Project inquiries, technical challenges, and strategic integrations.",
    url: `${SITE_CONFIG.baseUrl}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_CONFIG.baseUrl}/contact/#webpage`,
    "url": `${SITE_CONFIG.baseUrl}/contact`,
    "name": "Contact The Painsparc Company",
    "isPartOf": { "@id": `${SITE_CONFIG.baseUrl}/#website` },
    "mainEntity": {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.baseUrl}/#organization`,
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Systems Architecture Support & Inquiries",
        "email": SITE_CONFIG.contact.email,
        "availableLanguage": ["English", "Hindi", "Marathi"]
      }
    }
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