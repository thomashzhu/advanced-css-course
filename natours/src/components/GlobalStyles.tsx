import { css, Global } from '@emotion/core';
import React from 'react';

import { defaultFontSize, mq } from '../res/styles';

export const GlobalStyles = () => (
  <Global styles={styles.global} />
);

const styles = {
  global: css`
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');

    *,
    *::after,
    *::before {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
    }

    html {
      /* If font size is 16px and we want 1rem = 10px, then 62.5% of 16px = 10px */
      ${mq({
        fontSize: ['62.5%', '75%', '56.25%', '50%'],
      })}
    }

    body {
      box-sizing: border-box;
      color: #777;
      font-family: Lato, sans-serif;
      /* font-size: ${defaultFontSize}; */
      font-weight: 400;
      line-height: 1.7;
      padding: 3rem;
    }
  `,
};
