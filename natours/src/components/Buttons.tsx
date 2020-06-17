/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

import { moveVertically } from '../res/animations';
import { colors } from '../res/colors';
import { TranslateYOrigin } from '../res/types';
import { rgba } from '../utils/rgba';

interface Props {
  backgroundColor: string;
  textColor: string;
}
interface AnchorProps extends React.HTMLProps<HTMLAnchorElement>, Props {}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Props {}

export const AnchorButton: React.FC<AnchorProps> = ({
  backgroundColor, children, textColor, ...restProps
}) => (
  <a
    {...restProps}
    css={styles.container(backgroundColor, textColor)}
  >
    {children}
  </a>
)

export const Button: React.FC<ButtonProps> = ({
  backgroundColor, children, textColor, ...restProps
}) => (
  <button
    {...restProps}
    css={styles.container(backgroundColor, textColor)}
  >
    {children}
  </button>
)

const styles = {
  container: (backgroundColor: string, textColor: string) => css`
    animation: ${moveVertically(TranslateYOrigin.Bottom)} .5s ease-out .75s;
    animation-fill-mode: backwards;
    background-color: ${backgroundColor};
    color: ${textColor};

    &,
    &:link,
    &:visited {
      border-radius: 10rem;
      display: inline-block;
      padding: 1.5rem 4rem;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      transition: all .2s;

      /* Change for the <button> element */
      border: none;
      cursor: pointer;
    }

    &:hover {
      box-shadow: 0 1rem 2rem ${rgba(colors.black, 0.2)};
      transform: translateY(-.3rem);

      &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      }
    }

    &:active,
    &:focus {
      box-shadow: 0 .5rem 1rem ${rgba(colors.black, 0.2)};
      outline: none;
      transform: translateY(-.1rem);
    }

    &::after {
      background-color: ${backgroundColor};
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
    }
  `,
}
