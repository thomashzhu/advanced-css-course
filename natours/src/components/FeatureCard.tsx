/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import Color from 'color';
import React from 'react';

import { colors } from '../res/colors';
import { HeadingTertiary } from './HeadingTertiary';

interface Props {
  heading: string;
  iconClassName: string;
  style: SerializedStyles;
  text: string;
}

export const FeatureCard: React.FC<Props> = ({
  iconClassName, heading, style, text,
}) => (
  <div css={[styles.container, style]}>
    <i
      className={iconClassName}
      css={styles.icon}
    >
    </i>

    <HeadingTertiary heading={heading}>
      {text}
    </HeadingTertiary>
  </div>
);

const styles = {
  container: css`
    background-color: ${Color(colors.white).alpha(0.8).toString()};
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem ${Color(colors.black).alpha(0.15).toString()};
    font-size: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    transition: transform .3s;

    &:hover {
      transform: scale(1.03) translateY(-1.5rem);
    };
  `,
  icon: css`
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(
      to right,
      ${colors.greenLight},
      ${colors.greenDark}
    );
    color: transparent;
    display: inline-block;
    font-size: 6rem;
  `,
};
