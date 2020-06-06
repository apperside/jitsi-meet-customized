import shouldForwardProp from "@styled-system/should-forward-prop";
import React from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { border, color, flexbox, layout, size, space, variant } from "styled-system";
import { ButtonStyleProps } from ".";
import Text from "../Text";
import { ButtonVariants, buttonTheme } from "./Button.theme";
import { WithVariant } from "../../theme";
import { IconName } from "../Asset/icons";
import Asset from "../Asset";

export const ButtonComponent = styled(TouchableOpacity).withConfig<ButtonStyleProps>({
  // avoid forwarding styled-system's props to dom
  //@ts-ignore
  shouldForwardProp
})<ButtonStyleProps>(
  space,
  size,
  layout,
  color,
  border,
  flexbox,
  // props => variant({
  //   variants: props.theme.button.variants
  // })
);
type ButtonProps = {
  icon?: IconName,
  iconSize?: number,
  loading?: boolean,
  iconPosition?: "start" | "end"
  onClick: (e: any) => void
};


type Props = WithVariant<React.ComponentProps<typeof ButtonComponent>, ButtonVariants> & ButtonProps
const Button: React.FC<Props> = (
  {
    textStyle: inlineTextStyle,
    variant = "primary",
    icon,
    iconSize = 20,
    iconPosition = "start",
    onClick,
    loading,
    ...props
  }) => {
  const theme = useTheme();
  const { variants: buttonVariants, ...baseTheme } = theme.button;

  const themeTextStyle = theme.button.variants[variant]?.textStyle;
  const { variants: discard, ...baseProps } = theme.button;
  const themePadding = theme.button.variants[variant]?.px || theme.button.px;

  return <ButtonComponent {...baseProps}
    onPress={onClick}
    {...props}
    display="flex"
    flexDirection="row"
    px={!icon ? themePadding : 10}
    {...baseTheme}
    {...buttonVariants[variant]} >
    {!!icon &&
      <Asset size={iconSize}
        name={icon} />
    }
    {!!loading &&
      <ActivityIndicator color="white" />
    }
    {!loading &&
      <Text
        mr={!!icon ? iconSize : 0}
        alignSelf="center"
        textAlign="center"
        {...themeTextStyle}
        {...inlineTextStyle}
      // {...props}
      >{props.children}</Text>
    }
  </ButtonComponent >;
};

export default Button;
