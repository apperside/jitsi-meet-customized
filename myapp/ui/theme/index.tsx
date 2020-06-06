import React from "react";
import { CustomComponentsTheme, DefaultTheme } from "styled-components";

import { themeBordersMap, themeBorderWidthsMap } from "./styleguide/borders";
import { breakpointsMap } from "./styleguide/breakpoints";
import { sizesMap } from "./styleguide/sizes";
import { spacesMap } from "./styleguide/spaces";
import { ThemedComponentWithVariants, ThemeProvider, BaseTheme } from "./ThemeProvider";
import { TypographyVariants, TypographyComponentStyleProps, fontFamilies, fontSizeMap } from "../atoms/Text";
import { ButtonStyleProps } from "../atoms/button";
import { TextInputStyleProps, TextInputVariants } from "../atoms/textinput";
import { ButtonVariants, buttonTheme } from "../atoms/button/Button.theme";
import { themeColors } from "./styleguide/colors";
import { typographyTheme } from "../atoms/Text/Text.theme";
import { textInputTheme } from "../atoms/textinput/TextInput.theme";
import { CardProps } from "../atoms/card";
import { cardTheme } from "../atoms/card/Card.theme";
export { mediaQuery } from "./responsiveUtils";
declare module "styled-components" {
  export interface CustomComponentsTheme {
    typographyStyles: ThemedComponentWithVariants<TypographyComponentStyleProps, TypographyVariants>
    textInput: ThemedComponentWithVariants<TextInputStyleProps, TextInputVariants>
    button: ThemedComponentWithVariants<ButtonStyleProps, ButtonVariants>
    card: CardProps
  }
}

const defaultTheme: BaseTheme = {
  borderWidths: themeBorderWidthsMap,
  borders: themeBordersMap,
  breakpoints: breakpointsMap,
  colors: themeColors,
  sizes: sizesMap,
  spaces: spacesMap,
  fontFamilies: fontFamilies,
  fontSizes: fontSizeMap
};

const componentsTheme: CustomComponentsTheme = {
  button: buttonTheme,
  typographyStyles: typographyTheme,
  textInput: textInputTheme,
  card: cardTheme
};

export type WithVariant<P, V> = P & { variant?: V }

const ThemedApp: React.FC = props => {
  return <ThemeProvider baseTheme={defaultTheme}
    componentsTheme={componentsTheme} >
    {props.children}
  </ThemeProvider>;
};

export default ThemedApp;
