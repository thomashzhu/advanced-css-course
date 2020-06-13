import { css } from "@emotion/core";

export const defaultFontSize = '1.6rem';

export const gutterHorizontal = '6rem';
export const gutterVertical = '8rem';
export const gridWidth = '114rem';

export const centerText = css`
  text-align: center;
`;

export const marginBottom = (size: number) => css`
  margin-bottom: ${size}rem;
`;

export const marginTop = (size: number) => css`
  margin-top: ${size}rem;
`;

export const oneOf = (size: number) => css`
  float: left;
  width: calc((100% - ${size - 1} * ${gutterHorizontal}) / ${size});

  &:not(:last-child) {
    margin-right: ${gutterHorizontal};
  };
`;

export const row = css`
  margin: 0 auto;
  max-width: ${gridWidth};

  &:not(:last-child) {
    margin-bottom: ${gutterVertical};
  };

  &:after {
    content: "";
    display: table;
    clear: both;
  };
`;
