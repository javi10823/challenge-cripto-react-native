// styled-components.ts
import * as styledComponents from "styled-components/native";

import ThemeInterface from "./theme"; //no sé de dónde importarlo

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeInterface>;

export { css, ThemeProvider };
export default styled;