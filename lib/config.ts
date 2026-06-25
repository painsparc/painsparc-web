export const AWAKE_CONFIG = {
  PROTOCOL_VERSION: "1.0",
  ENGINE_VERSION: "1.0.0-rc1",

  RSVP_START_WPM: 150,
  RSVP_TARGET_WPM: 500,
  RSVP_ACCELERATION_TIME_MS: 3000, // 3 seconds
  
  RSVP_DURATION_MS: 5000,       // 5 seconds
  STILLNESS_DURATION_MS: 5000,  // 5 seconds
  CYCLES: 2,                    // Just 2 cycles (20 seconds total training)
  PROBES: 1,                    // 1 probe
  
  RAPID_REPEAT_THRESHOLD_MS: 2000, 
  TRANSFER_ENABLED: false,      // Skip transfer test for this QA run
  TRANSFER_DURATION_MS: 0
};
export const TOTAL_TRAINING_MS = (AWAKE_CONFIG.RSVP_DURATION_MS + AWAKE_CONFIG.STILLNESS_DURATION_MS) * AWAKE_CONFIG.CYCLES;