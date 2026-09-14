import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about", "/contact", "/orbit", "/orbit/*", "/awake-app"],
        disallow: [
          "/awake-app/canvas",
          "/awake-app/transfer",
          "/api/*",
          "/_next/*",
        ],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "ClaudeBot",
          "PerplexityBot",
          "Applebot-Extended",
        ],
        allow: ["/", "/about", "/contact", "/orbit", "/orbit/*", "/awake-app", "/llms.txt"],
        disallow: ["/awake-app/canvas", "/awake-app/transfer"],
      },
    ],
    sitemap: `${SITE_CONFIG.baseUrl}/sitemap.xml`,
  };
}