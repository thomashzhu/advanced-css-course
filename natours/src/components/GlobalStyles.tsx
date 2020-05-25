import { css, Global } from '@emotion/core';
import React from 'react';

export const GlobalStyles = () => (
  <Global styles={styles.global} />
);

const styles = {
  global: css({
    '@import': `url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900')`,

    '*, *::after, *::before': {
      boxSizing: 'inherit',
      margin: 0,
      padding: 0,
    },

    html: {
      fontSize: '62.5%',
    },

    body: {
      boxSizing: 'border-box',
      color: '#777',
      fontFamily: 'Lato, sans-serif',
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: 1.7,
      padding: '3rem',
    }
  }),
};
