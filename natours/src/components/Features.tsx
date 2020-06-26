/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { mq, oneOf, row, smallest } from '../res/styles';
import { rgba } from '../utils/rgba';
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
        ${rgba(colors.greenLight, 0.8)},
        ${rgba(colors.greenDark, 0.8)}
      ),
      url(${require('../assets/nat-4.jpg')});
    background-size: cover;
    margin-top: -15rem;
    transform: skewY(-${SKEW_DEGREE}deg);

    ${mq({
      padding: smallest(['10rem 0', '10rem 0', '20rem 0']),
    })}

    & > * {
      transform: skewY(${SKEW_DEGREE}deg);
    }
  `,
};
