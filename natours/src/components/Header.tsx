/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

import hero from '../assets/hero.jpg';
import { colors } from '../res/colors';
import { rgba } from '../utils/rgba';

export const Header: React.FC = ({ children }) => (
  <div css={styles.header}>
    <React.Fragment>
      {children}
    </React.Fragment>
  </div>
)

const styles = {
  header: css`
    background-image:
      linear-gradient(
        to right bottom,
        ${rgba(colors.greenLight, 0.8)},
        ${rgba(colors.greenDark, 0.8)}
      ),
      url(${hero});
    background-position: top;
    background-size: cover;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    height: 95vh;
    position: relative;
  `,
};
