import { BackgroundImageProps, BorderProps, ColorProps, FlexboxProps, FontFamilyProps, SpaceProps, TextStyleProps, ThemeFontFamilies, ThemeFontSizes, TypographyProps as SSTypographyProps, WidthProps } from "styled-system";
import Text from "./TextComponent";
import { ThemedComponentWithVariants } from "../../theme/ThemeProvider";
import { useEffect, useState } from "react";
import React from "react";
export type TypographyVariants =
  "regular" |
  "medium" |
  "bold" |
  "black" |
  "extended";

export type TypographyComponentStyleProps =
  & SSTypographyProps
  & SpaceProps
  & WidthProps
  & ColorProps
  & BackgroundImageProps
  & TextStyleProps
  & FontFamilyProps
  & BorderProps
  & FontFamilyProps
  & FlexboxProps
  & {
    // utility prop to apply bold fontWeight
    bold?: boolean,
    // TODO: allow only valid html tag names
    variant?: TypographyVariants
  }

export interface CustomComponentsTheme {
  typography?: ThemedComponentWithVariants<TypographyComponentStyleProps, TypographyVariants>
  // button?: ButtonProps
}
declare module "styled-system" {

  export interface ThemeFontFamilies {
    regular: string
    medium: string
    bold: string
    black: string
    extended: string
  }

  export interface ThemeFontSizes {
    small: any
    medium: any
    big: any
    screenTitle: any
    [key: string]: any

  }
}

export const fontFamilies: ThemeFontFamilies = {
  regular: "GTAmerica-Regular",
  medium: "GTAmerica-Medium",
  bold: "GTAmerica-Bold",
  black: "GTAmerica-Black",
  extended: "GTAmerica-ExtendedRegular"
};

export const fontSizeMap: ThemeFontSizes = {
  small: "0.8rem",
  medium: "1rem",
  big: "1.3rem",
  screenTitle: 22,
  "1.1rem": "1.1rem"
};

Text.defaultProps = {
  variant: "regular"
};

export default Text;

type Props = React.ComponentProps<typeof Text> & { blink?: boolean, duration?: number };

export const BlinkingText: React.FC<Props> = ({ blink = true, duration = 300, ...props }) => {
  const [show, setShow] = useState(blink);
  useEffect(() => {
    if (blink) {
      const timer = setInterval(() => {
        setShow(showing => !showing);
      }, duration || 500);

      return () => {
        clearInterval(timer);
      };
    }
  }, [blink]);
  return <Text {...props}
    opacity={show ? 1 : 0}>{props.children}</Text>;
};