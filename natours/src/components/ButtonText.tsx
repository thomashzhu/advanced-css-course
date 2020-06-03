/** @jsx jsx */
import { css, jsx } from '@emotion/core';
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
  container: css({
    '&:link, &:visited': {
      borderBottom: `1px solid ${colors.greenMedium}`,
      color: colors.greenMedium,
      display: 'inline-block',
      fontSize: defaultFontSize,
      padding: '3px',
      textDecoration: 'none',
      transition: 'all .2s',
    },

    '&:hover': {
      backgroundColor: colors.greenMedium,
      boxShadow: `0 1rem 2rem rgba(${colors.black}, .15)`,
      color: colors.white,
      transform: 'translateY(-2px)',
    },

    '&:active': {
      boxShadow: `0 .5rem 1rem rgba(${colors.black}, .15)`,
      transform: 'translateY(-2px)',
    },
  }),
}
