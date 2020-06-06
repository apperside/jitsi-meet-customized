import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components/native";
import {
  background, border, color, flexbox,
  layout, margin, position, space
} from "styled-system";
import { BoxProps } from ".";

export const Box = styled.View.withConfig<BoxProps>({
  shouldForwardProp
}) <BoxProps>`
    ${layout}
    ${flexbox}
    ${border}
    ${space}
    ${margin}
    ${color}
    ${background}
    ${position}
`;
