/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { colors } from '../res/colors';
import Color from 'color';

import { row } from '../res/styles';
import { HeadingSecondary } from './HeadingSecondary';

export const About = () => (
  <section css={styles.about}>
    <HeadingSecondary
      marginBottom={8}
    />

    <div css={row}>
      <div className="col-1-of-2">
        text
      </div>

      <div className="col-1-of-2">
        image
      </div>
    </div>
  </section>
);

const styles = {
  about: css({
    backgroundColor: colors.grayLight1,
    padding: '25rem 0',
    marginTop: '-20vh',
  }),
  center: css({
    textAlign: 'center',
  }),
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
