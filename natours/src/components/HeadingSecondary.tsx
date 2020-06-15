/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { colors } from '../res/colors';
import { centerText, marginBottom } from '../res/styles';
import { rgba } from '../utils/rgba';

export const HeadingSecondary: React.FC = ({ children }) =>  (
  <div css={centerText}>
    <h2 css={[styles.headingSecondary, marginBottom(8)]}>
      {children}
    </h2>
  </div>
);

const styles = {
  headingSecondary: css`
    -webkit-background-clip: text;
    background-image: linear-gradient(
      to right,
      ${colors.greenLight},
      ${colors.greenDark}
    );
    color: transparent;
    display: inline-block;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: .2rem;
    text-transform: uppercase;
    transition: all .2s;

    &:hover {
      text-shadow: .5rem 1rem 2rem ${rgba(colors.black, 0.2)};
      transform: skewY(2deg) skewX(15deg) scale(1.1);
    }
  `,
};
