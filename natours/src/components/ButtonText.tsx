/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Color from 'color';
import React from 'react';

import { colors } from '../res/colors';
import { defaultFontSize } from '../res/styles';

interface IProps extends React.HTMLProps<HTMLAnchorElement> {}

export const ButtonText: React.FC<IProps> = ({
  children, ...restProps
}) => (
  <a
    {...restProps}
    css={styles.container}
  >
    {children}
  </a>
)

const styles = {
  container: css`
    &:link,
    &:visited {
      border-bottom: 1px solid ${colors.greenMedium};
      color: ${colors.greenMedium};
      display: inline-block;
      font-size: ${defaultFontSize};
      padding: 3px;
      text-decoration: none;
      transition: all .2s;
    };

    &:hover {
      background-color: ${colors.greenMedium};
      box-shadow: 0 1rem 2rem ${Color(colors.black).alpha(0.15).toString()};
      color: ${colors.white};
      transform: translateY(-2px);
    };

    &:active {
      box-shadow: 0 .5rem 1rem ${Color(colors.black).alpha(0.15).toString()};
      transform: translateY(-2px);
    };
  `,
}