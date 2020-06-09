/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import React from 'react';

interface Props {
  style: SerializedStyles
}

export const TourCard: React.FC<Props> = ({
  style,
}) => (
  <div css={[styles.container, style]}>
    <div className="side side--front">
      FRONT
    </div>

    <div className="side side--back">
      BACK
    </div>
  </div>
);

const styles = {
  container: css({
    MozPerspective: '1500rem',
    height: '50rem',
    perspective: '1500rem',
    position: 'relative',

    '.side': {
      backfaceVisibility: 'hidden',
      color: 'white',
      fontSize: '2rem',
      height: '50rem',
      left: 0,
      position: 'absolute',
      top: 0,
      transition: 'all, .8s ease',
      width: '100%',

      '&--front': {
        background: 'white',
      },
  
      '&--back': {
        background: 'green',
        transform: 'rotateY(180deg)',
      },
    },

    '&:hover': {
      '.side--front': {
        transform: 'rotateY(180deg)',
      },

      '.side--back': {
        transform: 'rotateY(0deg)',
      },
    },
  }),
};
