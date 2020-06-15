/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';

import { colors } from '../res/colors';
import { centerText, marginTop, row } from '../res/styles';
import { ButtonText } from './ButtonText';
import { HeadingSecondary } from './HeadingSecondary';
import { Story } from './Story';

interface Props {
  
}

export const Stories: React.FC<Props> = () => (
  <section css={styles.container}>
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
    background-color: ${colors.grayLight1};
    padding: 15rem 0;
  `,
};
