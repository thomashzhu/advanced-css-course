/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { colors } from '../res/colors';
import { centerText, marginBottom, mq, smallest } from '../res/styles';
import { rgba } from '../utils/rgba';

interface Props {
  bottomSpace?: number;
}

export const HeadingSecondary: React.FC<Props> = ({
  children, bottomSpace = 8,
}) =>  (
  <div css={[centerText, marginBottom(bottomSpace)]}>
    <h2 css={styles.headingSecondary}>
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
    font-weight: 700;
    letter-spacing: .2rem;
    text-transform: uppercase;
    transition: all .2s;

    ${mq({
      fontSize: smallest(['2rem', '3rem', '3.5rem']),
    })}

    &:hover {
      text-shadow: .5rem 1rem 2rem ${rgba(colors.black, 0.2)};
      transform: skewY(2deg) skewX(15deg) scale(1.1);
    }
  `,
};
