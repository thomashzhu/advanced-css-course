/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { marginBottom } from '../res/styles';
import { HeadingSecondary } from './HeadingSecondary';

interface Props {
  
}

export const BookingForm: React.FC<Props> = () => (
  <div css={styles.container}>
    <form
      action="#"
      css={styles.form}
    >
      <HeadingSecondary bottomSpace={4}>
        Start booking now
      </HeadingSecondary>

      <div css={styles.group}>
        <input
          id="name"
          placeholder="Full name"
          required
          type="text"
        />
        <label htmlFor="name">
          Full name
        </label>
      </div>

      <div css={styles.group}>
        <input
          id="email"
          placeholder="Email address"
          required
          type="email"
        />
        <label htmlFor="email">
          Email address
        </label>
      </div>
    </form>
  </div>
);

const styles = {
  container: css`
    padding: 6rem;
    width: 50%;
  `,
  form: css`
    
  `,
  group: css`
    
  `,
};
