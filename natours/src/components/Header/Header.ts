import Color from 'color';
import styled from 'styled-components';

import { colors } from '../../res/colors';
import hero from '../../assets/hero.jpg';

export const Header = styled.header`
  background-image:
    linear-gradient(
      to right bottom,
      ${Color(colors.greenLight).alpha(0.8).toString()},
      ${Color(colors.greenDark).alpha(0.8).toString()}
    ), 
    url(${hero});
  background-position: top;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  height: 95vh;
  position: relative;
`;
