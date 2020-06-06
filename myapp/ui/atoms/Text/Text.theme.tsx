
import { TypographyComponentStyleProps, TypographyVariants } from ".";
import { ThemedComponentWithVariants } from "../../theme/ThemeProvider";
export const typographyTheme: ThemedComponentWithVariants<TypographyComponentStyleProps, TypographyVariants> = {
  fontSize: 14,
  variants: {
    regular: {
      fontFamily: "regular"
    },
    black: {
      // fontWeight: "bold",
      fontFamily: "black"
    },
    bold: {
      fontFamily: "bold"
    },
    extended: {
      fontFamily: "extended"
    },
    medium: {
      fontFamily: "medium"
    }
  }
};
