/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { HeadingSecondary } from './HeadingSecondary';
import { oneOf, row } from '../res/styles';
import { colors } from '../res/colors';
import { TourCard } from './TourCard';

import nat4 from '../assets/nat-4.jpg';
import nat5 from '../assets/nat-5.jpg';
import nat6 from '../assets/nat-6.jpg';

interface Props {
  
}

export const Tours: React.FC<Props> = () => (
  <div css={styles.container}>
    <HeadingSecondary>
      Most popular tours
    </HeadingSecondary>

    <div css={row}>
      <TourCard
        backgroundGradient={`linear-gradient(
          to right bottom,
          ${colors.yellowLight},
          ${colors.yellowDark}
        )`}
        backgroundImage={nat4}
        heading="The sea explorer"
        style={oneOf(3)}
      />

      <TourCard
        backgroundGradient={`linear-gradient(
          to right bottom,
          ${colors.greenLight},
          ${colors.greenDark}
        )`}
        backgroundImage={nat5}
        heading="The forest hiker"
        style={oneOf(3)}
      />

      <TourCard
        backgroundGradient={`linear-gradient(
          to right bottom,
          ${colors.blueLight},
          ${colors.blueDark}
        )`}
        backgroundImage={nat6}
        heading="The snow adventurer"
        style={oneOf(3)}
      />
    </div>
  </div>
);

const styles = {
  container: css`
    background-color: ${colors.grayLight1};
    margin-top: -16rem;
    padding: 40rem 0 50rem 0;
  `,
};
