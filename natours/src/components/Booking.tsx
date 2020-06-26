/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { mq, row, smallest } from '../res/styles';
import { rgba } from '../utils/rgba';
import { BookingForm } from './BookingForm';

export const Booking: React.FC = () => (
  <section css={styles.container}>
    <div css={row}>
      <div css={styles.content}>
        <BookingForm />
      </div>
    </div>
  </section>
);

const styles = {
  container: css`
    background-image: linear-gradient(
      to right bottom,
      ${colors.greenLight},
      ${colors.greenDark}
    );

    ${mq({
      padding: smallest(['10rem 0', '10rem 0', '15rem 0']),
    })}
  `,
  content: css`
    background-image:
      linear-gradient(
        105deg,
        ${rgba(colors.white, 0.9)} 0%,
        ${rgba(colors.white, 0.9)} 50%,
        transparent 50%
      ),
      url(${require('../assets/nat-10.jpg')});
    background-size: 100%;
    height: 50rem;
  `,
};
