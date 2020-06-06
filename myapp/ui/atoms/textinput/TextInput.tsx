import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components/native";
import { background, borderRadius, color, flexbox, fontFamily, fontSize, fontStyle, fontWeight, layout, letterSpacing, lineHeight, size, space, textAlign, textStyle, variant, width } from "styled-system";
import { TextInputStyleProps, TextInputVariants } from ".";
import { WithVariant } from '../../theme';

type Props = WithVariant<TextInputStyleProps, TextInputVariants>

export const TextInput = styled.TextInput.withConfig<Props>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
})<Props>(
  space,
  fontSize,
  fontStyle,
  size,
  color,
  textStyle,
  letterSpacing,
  fontFamily,
  fontWeight,
  borderRadius,
  lineHeight,
  textAlign,
  background,
  flexbox,
  layout,
  width,
  props => variant({
    variants: props.theme.textInput.variants
  })
);
