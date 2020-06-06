import React from "react";
import {
  BackgroundProps, BorderProps, ColorProps, FlexboxProps,
  LayoutProps, MarginProps, PositionProps, SpaceProps
} from "styled-system";
import { Box } from "./Box";

/**
 * Box is the basic building block.
 * It abstracts a div on web and a View on mobile
 */
export type BoxProps = LayoutProps
  & FlexboxProps
  & BorderProps
  & SpaceProps
  & MarginProps
  & ColorProps
  & BackgroundProps
  & PositionProps

/**
 * A Box with flex and default orientation
 * (row on web, column on mobile)
 */
const FlexBox: React.FC<React.ComponentProps<typeof Box>> = (props) => (
  <Box display="flex"
    {...props} />);

/**
 * A Box with flex and forced horizontal orientation
 */
const HFlexBox: React.FC<React.ComponentProps<typeof Box>> = (props) => (
  <FlexBox flexDirection="row"
    {...props} />);

/**
 * A Box with flex and forced vertical orientation
 */
const VFlexBox: React.FC<React.ComponentProps<typeof Box>> = (props) => (
  <FlexBox flexDirection="column"
    {...props} />);

export { Box, FlexBox, HFlexBox, VFlexBox };
