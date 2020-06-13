/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { colors } from '../res/colors';
import { row, oneOf } from '../res/styles';
import { rgba } from '../utils/rgba';
import { ButtonText } from './ButtonText';
import { Composition } from './Composition';
import { HeadingSecondary } from './HeadingSecondary';
import { HeadingTertiary } from './HeadingTertiary';

export const About = () => (
  <section css={styles.about}>
    <HeadingSecondary />

    <div css={row}>
      <div css={oneOf(2)}>
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

      <div css={oneOf(2)}>
        <Composition />
      </div>
    </div>
  </section>
);

const styles = {
  about: css`
    background-color: ${colors.grayLight1};
    padding: 25vh 0;
    margin-top: -20vh;
  `,
  center: css`
    text-align: center;
  `,
  headingSecondary: css`
    -webkit-background-clip: text;
    background-image: linear-gradient(
      to right,
      ${colors.greenLight},
      ${colors.greenDark}
    );
    color: transparent;
    display: inline-block;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: .2rem;
    text-transform: uppercase;
    transition: all .2s;

    &:hover {
      text-shadow: .5rem 1rem 2rem ${rgba(colors.black, 0.2)};
      transform: skewY(2deg) skewX(15deg) scale(1.1);
    };
  `,
};
