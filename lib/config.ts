export const AWAKE_CONFIG = {
  // Versioning
  PROTOCOL_VERSION: "1.0",
  ENGINE_VERSION: "1.0.0-rc1",

  // RSVP Parameters
  RSVP_START_WPM: 150,
  RSVP_TARGET_WPM: 500,
  RSVP_ACCELERATION_TIME_MS: 30000, 
  
  // Phase Durations
  RSVP_DURATION_MS: 90000,       
  STILLNESS_DURATION_MS: 90000,  
  CYCLES: 6,                     
  PROBES: 3,                     
  
  // Input Settings
  RAPID_REPEAT_THRESHOLD_MS: 2000, 
  
  // Transfer Evaluation
  TRANSFER_ENABLED: true,
  TRANSFER_DURATION_MS: 300000,  // 5 minutes
};

export const TOTAL_TRAINING_MS = (AWAKE_CONFIG.RSVP_DURATION_MS + AWAKE_CONFIG.STILLNESS_DURATION_MS) * AWAKE_CONFIG.CYCLES;