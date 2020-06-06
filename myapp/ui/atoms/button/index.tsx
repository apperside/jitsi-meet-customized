import { BorderProps, ColorProps, FlexboxProps, LayoutProps, SizeProps, SpaceProps } from "styled-system";
import { TypographyComponentStyleProps } from "../Text";
import Button from "./Button";
import { buttonTheme } from "./Button.theme";

export type ButtonStyleProps =
  & SpaceProps
  & SizeProps
  & ColorProps
  & BorderProps
  & FlexboxProps
  & LayoutProps
  & {
    textStyle?: TypographyComponentStyleProps
  };

Button.defaultProps = {
  variant: "primary",
  ...buttonTheme
};
export default Button;
