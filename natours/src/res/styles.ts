import { css } from "@emotion/core";

export const defaultFontSize = '1.6rem';

export const gutterHorizontal = '6rem';
export const gutterVertical = '8rem';
export const gridWidth = '114rem';

export const centerText = css({
  textAlign: 'center',
});

export const marginBottom = (size: number) => css({
  marginBottom: `${size}rem`,
});

export const oneOf = (size: number) => css({
  float: 'left',
  width: `calc((100% - ${size - 1} * ${gutterHorizontal}) / ${size})`,

  '&:not(:last-child)': {
    marginRight: gutterHorizontal,
  },
});

export const row = css({
  margin: '0 auto',
  maxWidth: gridWidth,

  '&:not(:last-child)': {
    marginBottom: gutterVertical,
  },

  '&:after': {
    content: '""',
    display: 'table',
    clear: 'both',
  },
});
