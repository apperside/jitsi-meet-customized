
import { ThemedComponentWithVariants } from '../../theme/ThemeProvider';
import { TextInputVariants, TextInputStyleProps } from ".";

export const textInputTheme: ThemedComponentWithVariants<TextInputStyleProps, TextInputVariants> = {
  border: "1px solid black",
  color: "black",
  minWidth: 50,
  px: 15,
  borderRadius: 5,
  variants: {
    primary: {
      border: "1px solid #E6E6E6",

      fontSize: 16,
      color: "black",
      fontFamily: "regular"
    },
    secondary: {
      fontSize: 16,
      color: "gray",
      fontFamily: "regular"
    }
  }
};
