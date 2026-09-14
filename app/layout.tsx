import type { Metadata, Viewport } from "next";
import { Inter, Sacramento, Great_Vibes } from "next/font/google"; 
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sacramento = Sacramento({ weight: "400", subsets: ["latin"], variable: "--font-card" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-header" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: "The Painsparc Company",
    template: "%s | Painsparc",
  },
  description: "The Painsparc Company, founded by Pushkar Wagh (Painsparc), architects zero-overhead systems, offline-first architectures, and high-velocity digital software including Orbit and Peak CRM.",
  applicationName: "The Painsparc Company",
  authors: [{ name: SITE_CONFIG.founder.name, url: SITE_CONFIG.baseUrl }],
  creator: SITE_CONFIG.founder.name,
  publisher: SITE_CONFIG.legalName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.legalName,
    title: "The Painsparc Company | Systems Architecture & Logic",
    description: "Architecting intelligent software systems designed to absorb complexity. Home of Orbit and Peak CRM.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "The Painsparc Company Identity",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@painsparc",
    creator: "@painsparc",
    title: "The Painsparc Company | Systems Architecture & Logic",
    description: "Architecting intelligent software systems designed to absorb complexity.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "CajgTtGmrgClojLZp2FQqQZZmoSZpK-7r1m36YqHD3A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootSchemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.baseUrl}/#pushkar-wagh`,
        "name": SITE_CONFIG.founder.name,
        "alternateName": SITE_CONFIG.founder.alternateName,
        "jobTitle": SITE_CONFIG.founder.role,
        "url": SITE_CONFIG.baseUrl,
        "sameAs": SITE_CONFIG.founder.sameAs,
        "worksFor": {
          "@id": `${SITE_CONFIG.baseUrl}/#organization`
        }
      },
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.baseUrl}/#organization`,
        "name": SITE_CONFIG.legalName,
        "alternateName": SITE_CONFIG.brandName,
        "url": SITE_CONFIG.baseUrl,
        "logo": `${SITE_CONFIG.baseUrl}/icon.png`,
        "founder": {
          "@id": `${SITE_CONFIG.baseUrl}/#pushkar-wagh`
        },
        "email": SITE_CONFIG.contact.email,
        "sameAs": SITE_CONFIG.founder.sameAs,
        "knowsAbout": [
          "Systems Architecture",
          "Zero-Knowledge Architecture",
          "Offline-First Systems",
          "Multi-Tenant SaaS",
          "Artificial Intelligence"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.baseUrl}/#website`,
        "url": SITE_CONFIG.baseUrl,
        "name": SITE_CONFIG.brandName,
        "publisher": {
          "@id": `${SITE_CONFIG.baseUrl}/#organization`
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_CONFIG.baseUrl}/#peak`,
        "name": SITE_CONFIG.products.peak.name,
        "alternateName": SITE_CONFIG.products.peak.alternateName,
        "applicationCategory": SITE_CONFIG.products.peak.category,
        "operatingSystem": "Web, Android",
        "description": SITE_CONFIG.products.peak.description,
        "creator": {
          "@id": `${SITE_CONFIG.baseUrl}/#organization`
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${sacramento.variable} ${greatVibes.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootSchemaGraph) }}
        />
        {children}
      </body>
    </html>
  );
}