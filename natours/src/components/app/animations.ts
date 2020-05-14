import { keyframes } from "styled-components";

import { TranslateXOrigin } from "../../res/types";

export const moveFrom = (origin: TranslateXOrigin) => keyframes`
  0% {
    opacity: 0;
    transform: translateX(${`${ origin === TranslateXOrigin.Left ? -100 : 100}px`});
  }

  80% {
    transform: translate(${`${ origin === TranslateXOrigin.Left ? 10 : -10}px`});
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`
