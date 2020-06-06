import { ThemeColors } from "styled-system";

declare module "styled-system" {

  export interface ThemeColors {
    primary: string;
    secondary: string;
    cardBackground: string;
    translucent: string;
  }
}

export const themeColors: ThemeColors = {
  primary: "#e84118",
  secondary: "#ff618d",
  cardBackground: "white",
  translucent: "#000000AA"
};

