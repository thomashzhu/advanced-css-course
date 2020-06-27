/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { breakpoints } from '../res/styles';
import { rgba } from '../utils/rgba';

interface Props extends React.HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
}

export const InputField: React.FunctionComponent<Props> = ({
  id, label, ...restProps
}) => (
  <div css={styles.container}>
    <input
      {...restProps}
      css={styles.input}
      id={id}
    />
    <label
      css={styles.label}
      htmlFor={id}
    >
      {label}
    </label>
  </div>
);

const styles = {
  container: css`
    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    input:placeholder-shown + label {
      opacity: 0;
      transform: translateY(-4rem);
      visibility: hidden;
    }
  `,
  input: css`
    background-color: ${rgba(colors.white, 0.5)};
    border: none;
    border-bottom: 3px solid transparent;
    border-radius: 2px;
    color: inherit;
    display: block;
    font-family: inherit;
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    transition: all .3s;
    width: 90%;


    ${breakpoints.tabletPortrait.mq} {
      width: 100%;
    }

    &:focus {
      box-shadow: 0 1rem 2rem ${rgba(colors.black, 0.1)};
      border-bottom: 3px solid ${colors.greenMedium};
      outline: none;

      &:invalid {
        border-bottom: 3px solid ${colors.yellowDark};
      }
    }

    &::-webkit-input-placeholder {
      color: ${colors.grayDark2};
    }
  `,
  label: css`
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: .7rem;
    transition: all .3s;
  `,
};
