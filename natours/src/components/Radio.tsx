/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { center, defaultFontSize } from '../res/styles';

interface Props extends React.HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
}

export const Radio: React.FunctionComponent<Props> = ({
  id, label, ...restProps
}) => (
  <div css={styles.container}>
    <input
      {...restProps}
      css={styles.input}
      id={id}
      type="radio"
    />
    <label
      css={styles.label}
      htmlFor={id}
    >
      <span css={styles.radioButton} />
      {label}
    </label>
  </div>
);

const styles = {
  container: css`
    display: inline-block;
    width: 45%;

    input:checked ~ label span::after {
      opacity: 1;
    }
  `,
  input: css`
    display: none;
  `,
  label: css`
    cursor: pointer;
    font-size: ${defaultFontSize};
    padding-left: 5rem;
    position: relative;
  `,
  radioButton: css`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: 5px solid ${colors.greenMedium};
    display: inline-block;
    position: absolute;
    left: 0;
    top: -.4rem;

    &::after {
      ${center};

      background-color: ${colors.greenMedium};
      border-radius: 50%;
      content: "";
      display: block;
      height: 1.3rem;
      opacity: 0;
      transition: opacity .2s;
      width: 1.3rem;
    }
  `,
};
