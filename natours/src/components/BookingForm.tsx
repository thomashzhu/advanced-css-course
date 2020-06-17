/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { HeadingSecondary } from './HeadingSecondary';
import { InputField } from './InputField';

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

      <InputField
        id="name"
        label="Full name"
        placeholder="Full name"
        required
        type="text"
      />

      <InputField
        id="email"
        label="Email address"
        placeholder="Email address"
        required
        type="email"
      />
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
};
