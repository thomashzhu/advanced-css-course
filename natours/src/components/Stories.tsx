/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { centerText, marginTop, row, mq, smallest } from '../res/styles';
import { ButtonText } from './ButtonText';
import { HeadingSecondary } from './HeadingSecondary';
import { Story } from './Story';
import { VideoBackground } from './VideoBackground';

export const Stories: React.FC = () => (
  <section css={styles.container}>
    <VideoBackground
      autoPlay
      defaultText="Your browser is not supported!"
      loop
      muted
      sources={[{
        src: require('../assets/video.mp4'),
        type: 'video/mp4',
      }, {
        src: require('../assets/video.webm'),
        type: 'video/webm',
      }]}
    />

    <HeadingSecondary>
      We make people genuinely happy
    </HeadingSecondary>

    <div css={row}>
      <Story
        caption="Mary Smith"
        heading="I had the best week ever with my family"
        image={require('../assets/nat-8.jpg')}
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex id consectetur similique vero amet natus eum fuga rerum, laboriosam dicta exercitationem in? Itaque cum eveniet distinctio totam, sint perferendis. Alias ex id consectetur similique vero amet natus eum fuga rerum."
      />
    </div>

    <div css={row}>
      <Story
        caption="Jack Wilson"
        heading="WOW! My life is completely different now"
        image={require('../assets/nat-9.jpg')}
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex id consectetur similique vero amet natus eum fuga rerum, laboriosam dicta exercitationem in? Itaque cum eveniet distinctio totam, sint perferendis. Alias ex id consectetur similique vero amet natus eum fuga rerum."
      />
    </div>

    <div css={[centerText, marginTop(10)]}>
      <ButtonText href="#">
        Read all stories &rarr;
      </ButtonText>
    </div>
  </section>
);

const styles = {
  container: css`
    position: relative;

    ${mq({
      padding: smallest(['10rem 0', '10rem 0', '15rem 0']),
    })}
  `,
};
