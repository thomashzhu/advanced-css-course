/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { marginTop } from '../res/styles';
import { Button } from './Buttons';
import { HeadingSecondary } from './HeadingSecondary';
import { InputField } from './InputField';
import { Radio } from './Radio';

export const BookingForm: React.FC = () => (
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

      <Radio
        id="small"
        label="Small tour group"
        name="size"
      />

      <Radio
        id="large"
        label="Large tour group"
        name="size"
      />

      <div css={marginTop(4)}>
        <Button
          backgroundColor={colors.greenMedium}
          textColor={colors.white}
        >
          Next step
        </Button>
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
};
