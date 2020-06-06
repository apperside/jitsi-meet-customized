import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components/native";
import {
  background, border, color, flexbox,
  layout, margin, position, space
} from "styled-system";
import { BoxProps } from "../Box";

export const TouchableBox = styled.TouchableOpacity.withConfig<BoxProps>({
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
