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

  '[class^="col-"]': {
    float: 'left',
  },

  '.col-1-of-2': {
    width: `calc((100% - ${gutterHorizontal}) / 2)`
  }
});
