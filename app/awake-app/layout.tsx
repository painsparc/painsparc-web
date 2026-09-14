import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE_CONFIG } from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project A.W.A.K.E. | Cognitive Awareness Research Engine",
  description: "Longitudinal cognitive protocol measuring self-caught mind drift, RSVP visual stimulation, and stillness telemetry.",
  alternates: {
    canonical: "/awake-app",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function AwakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "@id": `${SITE_CONFIG.baseUrl}/awake-app/#research`,
    "name": SITE_CONFIG.products.awake.name,
    "url": `${SITE_CONFIG.baseUrl}/awake-app`,
    "description": SITE_CONFIG.products.awake.description,
    "creator": {
      "@id": `${SITE_CONFIG.baseUrl}/#organization`
    },
    "founder": {
      "@id": `${SITE_CONFIG.baseUrl}/#pushkar-wagh`
    }
  };

  return (
    <div className={`${inter.className} bg-black min-h-screen w-full overflow-hidden select-none`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </div>
  );
}