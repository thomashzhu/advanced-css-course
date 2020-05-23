/** @jsx jsx */
import Color from 'color';
import { css, jsx } from '@emotion/core';
import React from 'react';

import { colors } from '../res/colors';
import hero from '../assets/hero.jpg';

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
        ${Color(colors.greenLight).alpha(0.8).toString()},
        ${Color(colors.greenDark).alpha(0.8).toString()}
      ), 
      url(${hero});
    background-position: top;
    background-size: cover;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    height: 95vh;
    position: relative;
  `,
};
