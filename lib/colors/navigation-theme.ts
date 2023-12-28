import { type Theme } from "@react-navigation/native"

/**
 * These are the theme colors for navigation elements (tabs, drawer, etc.)
 *
 * Due to how react-navigation (which powers expo-router) works, we can not use
 * CSS variables from our globals.css here.
 */
export const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: "#CF364C", // var(--primary)
    background: "#F2F2F2",
    card: "#FFFFFF",
    text: "#1C1C1E",
    border: "#D8D8D8",
    notification: "#FF3B30"
  }
}

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "#CF364C", // var(--primary)
    background: "#010101",
    card: "#121212",
    text: "#E5E5E7",
    border: "#272729",
    notification: "#FF453A" // badge
  }
}
