/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Color from 'color';
import React from 'react';

import nat4 from '../assets/nat-4.jpg';
import { colors } from '../res/colors';
import { row, oneOf } from '../res/styles';
import { FeatureCard } from './FeatureCard';

const SKEW_DEGREE = 7;

export const Features: React.FC = () => (
  <div css={styles.container}>
    <div css={row}>
        <FeatureCard
          heading="Explore the world"
          iconClassName="icon-basic-world"
          style={oneOf(4)}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        />
      
        <FeatureCard
          heading="Meet nature"
          iconClassName="icon-basic-compass"
          style={oneOf(4)}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        />
      
        <FeatureCard
          heading="Find your way"
          iconClassName="icon-basic-map"
          style={oneOf(4)}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        />
      
        <FeatureCard
          heading="Live a healthier life"
          iconClassName="icon-basic-heart"
          style={oneOf(4)}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        />
    </div>
  </div>
);

const styles = {
  container: css`
    background-image:
      linear-gradient(
        to right bottom,
        ${Color(colors.greenLight).alpha(0.8).toString()},
        ${Color(colors.greenDark).alpha(0.8).toString()}
      ),
      url(${nat4});
    background-size: cover;
    margin-top: -15rem;
    padding: 20rem 0;
    transform: skewY(-${SKEW_DEGREE}deg);

    & > * {
      transform: skewY(${SKEW_DEGREE}deg);
    };
  `,
};
