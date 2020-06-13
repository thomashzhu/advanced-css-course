/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { centerText, marginTop, oneOf, row } from '../res/styles';
import { colors } from '../res/colors';
import { Button } from './Button';
import { HeadingSecondary } from './HeadingSecondary';
import { TourCard } from './TourCard';

import nat4 from '../assets/nat-4.jpg';
import nat5 from '../assets/nat-5.jpg';
import nat6 from '../assets/nat-6.jpg';

export const Tours: React.FC = () => (
  <div css={styles.container}>
    <HeadingSecondary>
      Most popular tours
    </HeadingSecondary>

    <div css={row}>
      <TourCard
        backgroundImage={nat4}
        colorDark={colors.yellowDark}
        colorLight={colors.yellowLight}
        heading="The sea explorer"
        items={[
          '3 day tours',
          'Up to 30 people',
          '2 tour guides',
          'Sleep in cozy hotels',
          'Difficulty: easy'
        ]}
        price="$297"
        style={oneOf(3)}
      />

      <TourCard
        backgroundImage={nat5}
        colorDark={colors.greenDark}
        colorLight={colors.greenLight}
        heading="The forest hiker"
        items={[
          '7 day tours',
          'Up to 40 people',
          '6 tour guides',
          'Sleep in provided tents',
          'Difficulty: medium'
        ]}
        price="$497"
        style={oneOf(3)}
      />

      <TourCard
        backgroundImage={nat6}
        colorDark={colors.blueDark}
        colorLight={colors.blueLight}
        heading="The snow adventurer"
        items={[
          '5 day tours',
          'Up to 15 people',
          '3 tour guides',
          'Sleep in provided tents',
          'Difficulty: hard'
        ]}
        price="$897"
        style={oneOf(3)}
      />
    </div>

    <div css={[ centerText, marginTop(10) ]}>
      <Button
        backgroundColor={colors.greenMedium}
        href="#"
        textColor={colors.white}
      >
        Discover all tours
      </Button>
    </div>
  </div>
);

const styles = {
  container: css`
    background-color: ${colors.grayLight1};
    margin-top: -16rem;
    padding: 40rem 0 15rem 0;
  `,
};
