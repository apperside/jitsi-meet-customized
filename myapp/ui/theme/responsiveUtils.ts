
import { BreakpointNames, ThemeBreakpoints } from "styled-system";
import breakpointsMap from "./styleguide/breakpoints";

const buildMediaQueries = () => {
  //@ts-ignore
  const mediaqueries: { [key in keyof ThemeBreakpoints]: string } = {};
  Object.keys(breakpointsMap).forEach((breakpointKey) => {
    mediaqueries[breakpointKey] = `@media screen and (min-width:${breakpointsMap[breakpointKey]})`;
  });
  return mediaqueries;
};

type MediaQueries = {
  down: (breakpoint: BreakpointNames) => string
  up: (breakpoint: BreakpointNames) => string
  between: (breakpointMin: BreakpointNames, breakpointMax: BreakpointNames) => string,
} & { [key in BreakpointNames]: string }

export const mediaQuery: MediaQueries = {
  down: (breakpoint: BreakpointNames) => {
    return `@media screen and (max-width:  ${breakpointsMap[breakpoint]})`;
  },
  up: (breakpoint: BreakpointNames) => {
    return `@media screen and (min-width:  ${breakpointsMap[breakpoint]})`;
  },
  between: (breakpointMin: BreakpointNames, breakpointMax: BreakpointNames) => {
    return `@media (max-width:${breakpointsMap[breakpointMax]}) and (min-width:${breakpointsMap[breakpointMin]})`;
  },
  ...buildMediaQueries()
};