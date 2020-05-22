import styled from 'styled-components';

import { moveVertically } from '../../res/animations';
import { TranslateYOrigin } from '../../res/types';
import { Button } from './Button';

export const White = styled(Button)`
  animation: ${(props: { animated: boolean }) => props.animated ? moveVertically(TranslateYOrigin.Bottom) : 'none'} .5s ease-out .75s;
  animation-fill-mode: backwards;
  background-color: white;
  color: #777;

  &::after {
    background-color: white;
  }
`