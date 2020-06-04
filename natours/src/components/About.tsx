/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { colors } from '../res/colors';
import Color from 'color';

import { row } from '../res/styles';
import { HeadingSecondary } from './HeadingSecondary';
import { HeadingTertiary } from './HeadingTertiary';
import { ButtonText } from './ButtonText';
import { Composition } from './Composition';

export const About = () => (
  <section css={styles.about}>
    <HeadingSecondary />

    <div css={row}>
      <div className="col-1-of-2">
        <HeadingTertiary heading="You're going to fall in love with nature">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit reprehenderit accusamus eum necessitatibus ducimus laboriosam perferendis saepe, quo distinctio beatae delectus consequuntur nesciunt harum mollitia! Dignissimos unde saepe corporis cupiditate?
        </HeadingTertiary>

        <HeadingTertiary heading="Live adventures like you never have before">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit reprehenderit accusamus eum necessitatibus ducimus laboriosam perferendis saepe, quo distinctio beatae delectus consequuntur nesciunt harum mollitia! Dignissimos unde saepe corporis cupiditate?
        </HeadingTertiary>

        <ButtonText href="#">
          Learn more &rarr;
        </ButtonText>
      </div>

      <div className="col-1-of-2">
        <Composition />
      </div>
    </div>
  </section>
);

const styles = {
  about: css({
    backgroundColor: colors.grayLight1,
    padding: '25vh 0',
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
      textShadow: `.5rem 1rem 2rem ${Color(colors.black).alpha(0.2)}`,
      transform: 'skewY(2deg) skewX(15deg) scale(1.1)',
    },
  }),
};
