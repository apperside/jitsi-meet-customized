import React from "react";
import styled from "styled-components/native";
import { Box, BoxProps } from "../Box";
import { cardTheme } from "./Card.theme";
import { TouchableHighlight } from "react-native";
import TouchableBox from "../TouchableBox";

export type CardProps = BoxProps & {
  onPress?: () => void
};
const CardComponent = styled(Box)({});
const TouchableCardComponent = styled(TouchableBox)({});


const Card: React.FC<React.ComponentProps<typeof CardComponent>> = ({ children, ...props }) => {

  if (!props.clickable && !props.onPress) {
    return <CardComponent {...props}>
      {children}
    </CardComponent>;
  }
  return <TouchableCardComponent onPress={props.onPress}
    {...props}>
    {children}
  </TouchableCardComponent>;

};


Card.defaultProps = {
  ...cardTheme
};
export default Card;
