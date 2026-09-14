import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Flash Attendance & Rapid-Fire State Engine",
  description: "Single-focus low-cognitive-overhead attendance logging module engineered with batch-write telemetry and automated absent tracking.",
  alternates: {
    canonical: "/orbit/attendance",
  },
};

export default function AttendanceLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.baseUrl}/orbit/attendance/#webpage`,
    "url": `${SITE_CONFIG.baseUrl}/orbit/attendance`,
    "name": "Orbit Flash Attendance Engine",
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