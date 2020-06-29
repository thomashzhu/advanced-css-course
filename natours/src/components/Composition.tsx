/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { breakpoints } from '../res/styles';
import { rgba } from '../utils/rgba';

export const Composition: React.FC = () => (
  <div css={styles.container}>
    <img
      alt="Pic 1"
      css={[styles.photo, styles.photo1]}
      sizes={`
        (max-width: 56.25em) 20vw,
        (max-width: 37.5em) 30vw,
        356.39px
      `}
      src={require('../assets/nat-1-large.jpg')}
      srcSet={`
        ${require('../assets/nat-1.jpg')} 300w,
        ${require('../assets/nat-1-large.jpg')} 1000w
      `}
    />

    <img
      alt="Pic 2"
      css={[styles.photo, styles.photo2]}
      sizes={`
        (max-width: 56.25em) 20vw,
        (max-width: 37.5em) 30vw,
        356.39px
      `}
      src={require('../assets/nat-2-large.jpg')}
      srcSet={`
        ${require('../assets/nat-2.jpg')} 300w,
        ${require('../assets/nat-2-large.jpg')} 1000w
      `}
    />

    <img
      alt="Pic 3"
      css={[styles.photo, styles.photo3]}
      sizes={`
        (max-width: 56.25em) 20vw,
        (max-width: 37.5em) 30vw,
        356.39px
      `}
      src={require('../assets/nat-3-large.jpg')}
      srcSet={`
        ${require('../assets/nat-3.jpg')} 300w,
        ${require('../assets/nat-3-large.jpg')} 1000w
      `}
    />
  </div>
);

const styles = {
  container: css`
    position: relative;

    &:hover img:not(:hover) {
      transform: scale(.95);
    }
  `,
  photo: css`
    border-radius: 2px;
    box-shadow: 0 1.5rem 4rem ${rgba(colors.black, 0.4)};
    outline-offset: 2rem;
    position: absolute;
    transition: transform .2s;
    width: 55%;
    z-index: 10;

    ${breakpoints.tabletPortrait.mq} {
      box-shadow: 0 1.5rem 3rem ${rgba(colors.black, 0.2)};
      float: left;
      position: relative;
      width: ${100 / 3}%;
    }

    &:hover {
      box-shadow: 0 2.5rem 4rem ${rgba(colors.black, 0.5)};
      outline: 1.5rem solid ${colors.greenMedium};
      transform: scale(1.05) translateY(-.5rem);
      z-index: 20;
    }
  `,
  photo1: css`
    left: 0;
    top: -2rem;

    ${breakpoints.tabletPortrait.mq} {
      top: 0;
      transform: scale(1.2);
    }
  `,
  photo2: css`
    top: 2rem;
    right: 0;

    ${breakpoints.tabletPortrait.mq} {
      top: -1rem;
      transform: scale(1.3);
      z-index: 100;
    }
  `,
  photo3: css`
    left: 20%;
    top: 10rem;

    ${breakpoints.tabletPortrait.mq} {
      left: 0;
      top: 1rem;
      transform: scale(1.1);
    }
  `,
};
