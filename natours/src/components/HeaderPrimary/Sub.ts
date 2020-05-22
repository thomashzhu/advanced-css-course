import styled from 'styled-components';

import { moveHorizontally } from '../../res/animations';
import { TranslateXOrigin } from '../../res/types';

export const Sub = styled.span`
  animation: ${moveHorizontally(TranslateXOrigin.Right)} 1s ease-out;
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.75rem;
`;
