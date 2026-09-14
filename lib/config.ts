export const AWAKE_CONFIG = {
  // Versioning
  PROTOCOL_VERSION: "1.0",
  ENGINE_VERSION: "1.0.0-rc1",

  // RSVP Parameters
  RSVP_START_WPM: 150,
  RSVP_TARGET_WPM: 500,
  RSVP_ACCELERATION_TIME_MS: 30000, // Reaches 500 WPM smoothly at exactly 30 seconds
  
  // Phase Durations
  RSVP_DURATION_MS: 90000,       // 90 seconds
  STILLNESS_DURATION_MS: 90000,  // 90 seconds
  CYCLES: 6,                     // 6 total cycles
  PROBES: 3,                     // 3 random probes spread across the session
  
  // Input Settings
  RAPID_REPEAT_THRESHOLD_MS: 2000, 
  
  // Transfer Evaluation
  TRANSFER_ENABLED: true,        // Re-enable the final evaluation
  TRANSFER_DURATION_MS: 300000   // 5 minutes
};

// Derived Constants
export const TOTAL_TRAINING_MS = (AWAKE_CONFIG.RSVP_DURATION_MS + AWAKE_CONFIG.STILLNESS_DURATION_MS) * AWAKE_CONFIG.CYCLES;

// --- SEO & MACHINE-READABLE ENTITY CONFIGURATION ---
export const SITE_CONFIG = {
  baseUrl: "https://thepainsparccompany.vercel.app",
  legalName: "The Painsparc Company",
  brandName: "Painsparc",
  founder: {
    name: "Pushkar Wagh",
    alternateName: "Painsparc",
    role: "Founder & Systems Architect",
    sameAs: [
      "https://x.com/painsparc",
      "https://instagram.com/painsparc",
    ],
  },
  contact: {
    email: "orbit.test.personal@gmail.com",
  },
  products: {
    orbit: {
      name: "Orbit",
      url: "https://thepainsparccompany.vercel.app/orbit",
      category: "EducationalApplication",
      description: "Next-generation institutional education management system with automated test generation and rapid-fire attendance.",
    },
    peak: {
      name: "Peak CRM",
      alternateName: "Peak",
      url: "https://thepainsparccompany.vercel.app/#peak",
      category: "BusinessApplication",
      description: "High-velocity client relationship operating system engineered with dual-engine performance.",
    },
    awake: {
      name: "Project A.W.A.K.E.",
      url: "https://thepainsparccompany.vercel.app/awake-app",
      category: "HealthApplication",
      description: "Longitudinal cognitive awareness protocol featuring RSVP visual stimulation and stillness telemetry.",
    },
  },
};