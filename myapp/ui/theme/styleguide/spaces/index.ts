import { ThemeSpaces } from "styled-system";
import * as CSS from "csstype";

declare module "styled-system" {

  export interface ThemeSpaces {
    NONE: CSS.MarginProperty<number | string>;
    XS: CSS.MarginProperty<number | string>;
    S: CSS.MarginProperty<number | string>;
    M: CSS.MarginProperty<number | string>;
    L: CSS.MarginProperty<number | string>;
    XL: CSS.MarginProperty<number | string>;
    XXL: CSS.MarginProperty<number | string>;
    TITLE_LEFT: CSS.MarginProperty<number | string>;
    MAIN_VERTICAL_SPACE: CSS.MarginProperty<number | string>;
    STEP_BUTTON_BOTTOM_MARGIN: CSS.MarginProperty<number | string>;
    STEP_BUTTON_RIGHT_MARGIN: CSS.MarginProperty<number | string>;
    STEP_BUTTON_LEFT_MARGIN: CSS.MarginProperty<number | string>;
    STEP_TITLE_MARGIN_TOP: CSS.MarginProperty<number | string>;
    mainTopMargin: CSS.MarginProperty<number | string>;
    mainLeftMargin: CSS.MarginProperty<number | string>;
  }
}

export const spacesMap: ThemeSpaces = {
  NONE: 0,
  XS: 2,
  S: 4,
  M: 8,
  L: 16,
  XL: 32,
  XXL: 64,
  TITLE_LEFT: 50,
  STEP_BUTTON_BOTTOM_MARGIN: 95,
  STEP_BUTTON_RIGHT_MARGIN: 95,
  STEP_BUTTON_LEFT_MARGIN: 95,
  STEP_TITLE_MARGIN_TOP: 50,
  mainLeftMargin: 50,
  mainTopMargin: 90,
  MAIN_VERTICAL_SPACE: 20
};
