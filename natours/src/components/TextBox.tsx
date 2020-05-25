/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

export const TextBox: React.FC = ({ children }) => (
  <div css={styles.container}>
    {children}
  </div>
)

const styles = {
  container: css({
    left: '50%',
    position: 'absolute',
    top: '40%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
  }),
};
