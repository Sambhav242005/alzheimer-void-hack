/**
 * Centralized Theme Configuration
 * Update colors here to change the entire app's color scheme
 * Supports both light and dark modes
 */

export const themeColors = {
  // Primary Healthcare Blue - Professional and trustworthy
  primary: {
    light: "#0066CC", // Bright medical blue
    dark: "#60A5FA", // Lighter blue for dark mode
  },

  // Secondary Accent - Complementary
  accent: {
    light: "#0891B2", // Cyan for highlights
    dark: "#06B6D4", // Brighter cyan for dark mode
  },

  // Success/High Risk - Green shades
  success: {
    light: "#10B981",
    dark: "#34D399",
  },

  // Warning/Moderate Risk - Amber shades
  warning: {
    light: "#F59E0B",
    dark: "#FBBF24",
  },

  // Danger/High Risk - Red shades
  danger: {
    light: "#EF4444",
    dark: "#F87171",
  },

  // Neutral/Muted - Gray shades
  neutral: {
    light: "#6B7280", // Medium gray
    dark: "#D1D5DB", // Light gray for dark mode
  },

  // Background colors
  background: {
    light: "#FFFFFF", // White
    dark: "#0F172A", // Very dark blue-black
  },

  // Card backgrounds
  card: {
    light: "#F9FAFB", // Off-white
    dark: "#1E293B", // Dark slate
  },

  // Sidebar
  sidebar: {
    light: "#F3F4F6", // Very light gray
    dark: "#0F1419", // Very dark
  },

  // Text colors
  text: {
    light: "#111827", // Near black
    dark: "#F1F5F9", // Off-white
  },

  // Border colors
  border: {
    light: "#E5E7EB", // Light gray
    dark: "#334155", // Dark gray
  },
}

// Risk indicator colors
export const riskColors = {
  high: "#DC2626", // Red
  moderate: "#EA580C", // Orange
  low: "#16A34A", // Green
}
