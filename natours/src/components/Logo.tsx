/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

export const Logo: React.FC = () => (
  <div css={styles.container}>
    <img
      alt="Logo"
      css={styles.logo}
      src={require('../assets/logo-white.png')}
    />
  </div>
)

const styles = {
  container: css({
    left: '4rem',
    position: 'absolute',
    top: '4rem',
  }),
  logo: css({
    height: '3.5rem',
  }),
};
