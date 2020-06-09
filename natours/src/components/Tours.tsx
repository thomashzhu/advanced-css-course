/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import { HeadingSecondary } from './HeadingSecondary';
import { oneOf, row } from '../res/styles';
import { colors } from '../res/colors';
import { TourCard } from './TourCard';

interface Props {
  
}

export const Tours: React.FC<Props> = () => (
  <div css={styles.container}>
    <HeadingSecondary>
      Most popular tours
    </HeadingSecondary>

    <div css={row}>
      <TourCard
        style={oneOf(3)}
      />

      <TourCard
        style={oneOf(3)}
      />

      <TourCard
        style={oneOf(3)}
      />
    </div>
  </div>
);

const styles = {
  container: css({
    backgroundColor: colors.grayLight1,
    marginTop: '-16rem',
    padding: '40rem 0 50rem 0',
  })
};
