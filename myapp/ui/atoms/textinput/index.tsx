import { BackgroundImageProps, BorderProps, BorderRadiusProps, ColorProps, FontFamilyProps, LayoutProps, SpaceProps, TextStyleProps, TypographyProps as SSTypographyProps, WidthProps } from "styled-system";
import { TextInput } from "./TextInput";
import { textInputTheme } from "./TextInput.theme";

/**
 * TODO: add cross platform textChanged event
 */
export type TextInputVariants = "primary" | "secondary"

export type TextInputStyleProps =
  & SSTypographyProps
  & SpaceProps
  & WidthProps
  & ColorProps
  & BackgroundImageProps
  & TextStyleProps
  & FontFamilyProps
  & BorderRadiusProps
  & FontFamilyProps
  & BorderProps
  & LayoutProps
  & {
    // utility prop to apply bold fontWeight
    bold?: boolean,
    // TODO: allow only valid html tag names
    as?: any
    variant?: TextInputVariants
    value?: any
  };
TextInput.defaultProps = {
  variant: "primary",
  ...textInputTheme
};

export default TextInput;
