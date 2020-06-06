/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Color from 'color';
import React from 'react';

import nat4 from '../assets/nat-4.jpg';
import { colors } from '../res/colors';
import { row } from '../res/styles';
import { FeatureCard } from './FeatureCard';

const SKEW_DEGREE = 7;

export const Features: React.FC = () => (
  <div css={styles.container}>
    <div css={row}>
        <FeatureCard
          containerClassName="col-1-of-4"
          heading="Explore the world"
          iconClassName="icon-basic-world"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        />
      
        <FeatureCard
          containerClassName="col-1-of-4"
          heading="Meet nature"
          iconClassName="icon-basic-compass"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        />
      
        <FeatureCard
          containerClassName="col-1-of-4"
          heading="Find your way"
          iconClassName="icon-basic-map"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        />
      
        <FeatureCard
          containerClassName="col-1-of-4"
          heading="Live a healthier life"
          iconClassName="icon-basic-heart"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        />
    </div>
  </div>
);

const styles = {
  container: css({
    backgroundImage:
      `linear-gradient(
        to right bottom,
        ${Color(colors.greenLight).alpha(0.8)},
        ${Color(colors.greenDark).alpha(0.8)}
      ),
      url(${nat4})`,
    backgroundSize: 'cover',
    marginTop: '-15rem',
    padding: '20rem 0',
    transform: `skewY(-${SKEW_DEGREE}deg)`,

    '& > *': {
      transform: `skewY(${SKEW_DEGREE}deg)`,
    },
  }),
};
