
import { ButtonStyleProps } from ".";
import { ThemedComponentWithVariants } from "@ui/theme/ThemeProvider";

export type ButtonVariants = "primary" | "secondary"

export const buttonTheme: ThemedComponentWithVariants<ButtonStyleProps, ButtonVariants> = {
  borderRadius: 20,
  px: 20,
  py: 10,
  alignContent: "center",
  justifyContent: "center",
  variants: {
    primary: {
      color: "white",
      backgroundColor: "primary",
      alignContent: "center",
      justifyContent: "center",
      textStyle: {
        variant: "regular",
        color: "white"
      },
      // bg: "error",
      ":hover": {
        color: "grey",
        bg: "white",
        // @ts-ignore
        cursor: "pointer"
      }
    },
    secondary: {
      color: "white",
      bg: "secondary",
      ":hover": {
        color: "aliceblue",
        bg: "secondary"
      }
    }
  }
};
