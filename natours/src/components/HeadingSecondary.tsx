/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Color from 'color';

import { colors } from '../res/colors';
import { centerText, marginBottom } from '../res/styles';

export const HeadingSecondary: React.FC = () =>  (
  <div css={centerText}>
    <h2 css={[styles.headingSecondary, marginBottom(8)]}>
      Exciting tours for adventurous people
    </h2>
  </div>
);

const styles = {
  headingSecondary: css({
    WebkitBackgroundClip: 'text',
    backgroundImage: `linear-gradient(
      to right,
      ${colors.greenLight},
      ${colors.greenDark}
    )`,
    color: 'transparent',
    display: 'inline-block',
    fontSize: '3.5rem',
    fontWeight: 700,
    letterSpacing: '.2rem',
    textTransform: 'uppercase',
    transition: 'all .2s',

    '&:hover': {
      textShadow: `.5rem 1rem 2rem ${Color(colors.black).alpha(0.2)}`,
      transform: 'skewY(2deg) skewX(15deg) scale(1.1)',
    },
  }),
};
