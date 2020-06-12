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
  container: css`
    &:link,
    &:visited {
      border-radius: 10rem;
      display: inline-block;
      padding: 1.5rem 4rem;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      transition: all .2s;
    };

    &:hover {
      box-shadow: 0 1rem 2rem ${Color(colors.black).alpha(0.2).toString()};
      transform: translateY(-.3rem);

      &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      };
    };

    &:active {
      box-shadow: 0 .5rem 1rem ${Color(colors.black).alpha(0.2).toString()};
      transform: translateY(-.1rem);
    };

    &::after {
      border-radius: 10rem;
      content: '';
      display: inline-block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: all .4s;
      width: 100%;
      z-index: -1;
    };
  `,
  white: css`
    animation: ${moveVertically(TranslateYOrigin.Bottom)} .5s ease-out .75s;
    animation-fill-mode: backwards;
    background-color: ${colors.white};
    color: #777;

    &::after {
      background-color: ${colors.white};
    };
  `,
}
