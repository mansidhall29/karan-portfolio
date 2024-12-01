export const lightTheme = {
  colors: {
    primary: "#6366F1", // Indigo
    secondary: "#EC4899", // Pink
    accent: "#8B5CF6", // Purple
    success: "#10B981", // Emerald
    warning: "#F59E0B", // Amber
    error: "#EF4444", // Red
    background: {
      primary: "#FFFFFF",
      secondary: "#F3F4F6",
      tertiary: "#E5E7EB",
    },
    text: {
      primary: "#111827",
      secondary: "#4B5563",
      tertiary: "#9CA3AF",
      inverse: "#FFFFFF",
    },
    border: "#E5E7EB",
    divider: "rgba(0, 0, 0, 0.1)",
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
};

export const darkTheme = {
  colors: {
    primary: "#818CF8", // Lighter Indigo
    secondary: "#F472B6", // Lighter Pink
    accent: "#A78BFA", // Lighter Purple
    success: "#34D399", // Lighter Emerald
    warning: "#FBBF24", // Lighter Amber
    error: "#F87171", // Lighter Red
    background: {
      primary: "#111827", // Gray 900
      secondary: "#1F2937", // Gray 800
      tertiary: "#374151", // Gray 700
    },
    text: {
      primary: "#F9FAFB", // Gray 50
      secondary: "#E5E7EB", // Gray 200
      tertiary: "#9CA3AF", // Gray 400
      inverse: "#111827", // Gray 900
    },
    border: "#374151",
    divider: "rgba(255, 255, 255, 0.1)",
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.3)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
  },
};

const baseTheme = {
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, sans-serif",
      secondary: "'Poppins', -apple-system, sans-serif",
      mono: "'Fira Code', monospace",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    px: "1px",
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
  },
  borderRadius: {
    none: "0",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px",
  },
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    medium: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  zIndex: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1600,
    tooltip: 1700,
  },
};

export const createTheme = (colorMode = "light") => ({
  ...baseTheme,
  ...(colorMode === "light" ? lightTheme : darkTheme),
});
