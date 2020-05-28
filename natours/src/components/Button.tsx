/** @jsx jsx */
import Color from 'color';
import { css, jsx } from '@emotion/core';
import React from 'react';

import { moveVertically } from '../res/animations';
import { colors } from '../res/colors';
import { TranslateYOrigin } from '../res/types';

interface IProps extends React.HTMLProps<HTMLAnchorElement> {
  white: boolean;
}

export const Button: React.FC<IProps> = ({
  children, white, ...restProps
}) => (
  <a
    {...restProps}
    css={[styles.container, styles.white]}
  >
    {children}
  </a>
)

const styles = {
  container: css({
    '&:link, &:visited': {
      borderRadius: '10rem',
      display: 'inline-block',
      padding: '1.5rem 4rem',
      position: 'relative',
      textDecoration: 'none',
      textTransform: 'uppercase',
      transition: 'all .2s',
    },

    '&:hover': {
      boxShadow: `0 1rem 2rem ${Color(colors.black).alpha(0.2)}`,
      transform: 'translateY(-.3rem)',

      '&::after': {
        opacity: 0,
        transform: 'scaleX(1.4) scaleY(1.6)',
      }
    },

    '&:active': {
      boxShadow: `0 .5rem 1rem ${Color(colors.black).alpha(0.2)}`,
      transform: 'translateY(-.1rem)',
    },

    '&::after': {
      borderRadius: '10rem',
      content: '""',
      display: 'inline-block',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      transition: 'all .4s',
      width: '100%',
      zIndex: -1,
    }
  }),
  white: css({
    animation: `${moveVertically(TranslateYOrigin.Bottom)} .5s ease-out .75s`,
    animationFillMode: 'backwards',
    backgroundColor: colors.white,
    color: '#777',

    '&::after': {
      backgroundColor: colors.white,
    }
  }),
}
