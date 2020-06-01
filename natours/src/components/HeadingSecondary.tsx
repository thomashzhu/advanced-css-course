/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Color from 'color';

import { colors } from '../res/colors';
import { centerText } from '../res/styles';

interface Props {
  marginBottom: number;
}

export const HeadingSecondary: React.FC<Props> = ({
  marginBottom,
}) => {
  const style = css({
    marginBottom: `${marginBottom}rem`,
  });

  return (
    <div css={centerText}>
      <h2 css={[styles.headingSecondary, style]}>
        Exciting tours for adventurous people
      </h2>
    </div>
  );
};

const styles = {
  headingSecondary: css({
    '-webkit-background-clip': 'text',
    backgroundClip: 'text',
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
      textShadow: `.5rem 1rem 2rem rgba(${Color(colors.black).alpha(.2)})`,
      transform: 'skewY(2deg) skewX(15deg) scale(1.1)',
    },
  }),
};
