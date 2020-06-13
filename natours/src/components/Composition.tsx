/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { rgba } from '../utils/rgba';

interface Position {
  bottom: number | string;
  left: number | string;
  right: number | string;
  top: number | string;
}

export const Composition: React.FC = () => (
  <div css={styles.container}>
    <img
      alt="Pic 1"
      css={styles.photo({ left: 0, top: '-2rem' })}
      src={require('../assets/nat-1-large.jpg')}
    />

    <img
      alt="Pic 2"
      css={styles.photo({ right: 0, top: '2rem' })}
      src={require('../assets/nat-2-large.jpg')}
    />

    <img
      alt="Pic 3"
      css={styles.photo({ left: '20%', top: '10rem' })}
      src={require('../assets/nat-3-large.jpg')}
    />
  </div>
);

const styles = {
  container: css`
    position: relative;

    &:hover img:not(:hover) {
      transform: scale(.95);
    };
  `,
  photo: (position: Partial<Position>) => css`
    ${position};

    border-radius: 2px;
    box-shadow: 0 1.5rem 4rem ${rgba(colors.black, 0.4)};
    outline-offset: 2rem;
    position: absolute;
    transition: transform .2s;
    width: 55%;
    z-index: 10;

    &:hover {
      box-shadow: 0 2.5rem 4rem ${rgba(colors.black, 0.5)};
      outline: 1.5rem solid ${colors.greenMedium};
      transform: scale(1.05) translateY(-.5rem);
      z-index: 20;
    };
  `,
};
