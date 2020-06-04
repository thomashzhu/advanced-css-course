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
  header: css({
    backgroundImage:
      `linear-gradient(
        to right bottom,
        ${Color(colors.greenLight).alpha(0.8)},
        ${Color(colors.greenDark).alpha(0.8)}
      ),
      url(${hero})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    clipPath: 'polygon(0 0, 100% 0, 100% 75vh, 0 100%)',
    height: '95vh',
    position: 'relative',
  })
};
