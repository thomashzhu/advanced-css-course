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
  container: css({
    backgroundColor: `${Color(colors.white).alpha(0.8)}`,
    borderRadius: '3px',
    boxShadow: `0 1.5rem 4rem ${Color(colors.black).alpha(0.15)}`,
    fontSize: '1.5rem',
    padding: '2.5rem',
    textAlign: 'center',
    transition: 'transform .3s',

    '&:hover': {
      transform: 'scale(1.03) translateY(-1.5rem)',
    },
  }),
  icon: css({
    WebkitBackgroundClip: 'text',
    backgroundImage: `linear-gradient(
      to right,
      ${colors.greenLight},
      ${colors.greenDark}
    )`,
    color: 'transparent',
    display: 'inline-block',
    fontSize: '6rem',
  }),
};
