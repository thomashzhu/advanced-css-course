/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

interface Props extends React.VideoHTMLAttributes<HTMLVideoElement> {
  defaultText: string;
  sources: Array<{
    src: string,
    type: string,
  }>;
}

export const VideoBackground: React.FC<Props> = ({
  defaultText, sources, ...restProps
}) => (
  <div css={styles.container}>
    <video
      {...restProps}
      css={styles.content}
    >
      {sources.map((source) => (
        <source
          key={source.src}
          {...source}
        />
      ))}
      {defaultText}
    </video>
  </div>
);

const styles = {
  container: css`
    height: 100%;
    left: 0;
    opacity: .15;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  `,
  content: css`
    height: 100%;
    object-fit: cover;
    width: 100%;
  `,
};
