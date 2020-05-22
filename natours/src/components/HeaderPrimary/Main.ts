import styled from 'styled-components';

import { moveHorizontally } from '../../res/animations';
import { TranslateXOrigin } from '../../res/types';

export const Main = styled.span`
  animation: ${moveHorizontally(TranslateXOrigin.Left)} 1s ease-out;
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 3.5rem;
`;
