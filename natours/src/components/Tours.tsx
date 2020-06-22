/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { centerText, marginTop, oneOf, row } from '../res/styles';
import { colors } from '../res/colors';
import { AnchorButton } from './Buttons';
import { HeadingSecondary } from './HeadingSecondary';
import { TourCard } from './TourCard';

export const Tours: React.FC = () => (
  <div
    css={styles.container}
    id="tours"
  >
    <HeadingSecondary>
      Most popular tours
    </HeadingSecondary>

    <div css={row}>
      <TourCard
        backgroundImage={require('../assets/nat-4.jpg')}
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
        backgroundImage={require('../assets/nat-5.jpg')}
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
        backgroundImage={require('../assets/nat-6.jpg')}
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

    <div css={[centerText, marginTop(10)]}>
      <AnchorButton
        backgroundColor={colors.greenMedium}
        href="#"
        textColor={colors.white}
      >
        Discover all tours
      </AnchorButton>
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
