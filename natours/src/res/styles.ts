import { css } from "@emotion/core";
import facepaint from 'facepaint';

export const defaultFontSize = '1.6rem';

export const gutterHorizontal = '6rem';
export const gutterVertical = '8rem';
export const gridWidth = '114rem';

export const centerText = css`
  text-align: center;
`;

export const center = css`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const marginBottom = (size: number) => css`
  margin-bottom: ${size}rem;
`;

export const marginTop = (size: number) => css`
  margin-top: ${size}rem;
`;

/**
 * 0 - 600px     :     Phone
 * 600 - 900px   :     Tablet portrait
 * 900 - 1200px  :     Tablet landscape
 * 1200 - 1800px :     Normal
 * 1800+px       :     Big desktop
 */
const breakpoints = {
  'min-width': [1800], // in px
  'max-width': [1200, 900, 600], // in px
}
export const mq = facepaint([
  ...breakpoints['min-width'].map(bp => `@media (min-width: ${bp / 16}em)`),
  ...breakpoints['max-width'].map(bp => `@media (max-width: ${bp / 16}em)`),
]);

export const oneOf = (size: number) => css`
  float: left;
  width: calc((100% - ${size - 1} * ${gutterHorizontal}) / ${size});

  &:not(:last-child) {
    margin-right: ${gutterHorizontal};
  }
`;

export const row = css`
  margin: 0 auto;
  max-width: ${gridWidth};

  &:not(:last-child) {
    margin-bottom: ${gutterVertical};
  }

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;
