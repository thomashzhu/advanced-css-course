import { css } from "@emotion/core";

export const gutterHorizontal = '6rem';
export const gutterVertical = '8rem';
export const gridWidth = '114rem';

export const centerText = css({
  textAlign: 'center',
});

export const row = css({
  margin: '0 auto',
  maxWidth: gridWidth,

  '&:not(:last-child)': {
    marginBottom: gutterVertical,
  },

  '[class^="col-"]': {
    float: 'left',
  },

  '.col-1-of-2': {
    width: `calc((100% - ${gutterHorizontal}) / 2)`
  }
});
