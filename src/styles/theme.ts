import { css, keyframes } from 'styled-components/macro';
import { pxToRem } from './utils';
import navFarger from 'nav-frontend-core';

export const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(2rem) scale(.9);
    }
`;

export const theme = {
  colors: {
    ...navFarger,
    bakgrunn: navFarger.navLysGra,
    lenke: navFarger.navBla,
  },
  visuallyHidden: css`
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
  `,
  media: {
    smallScreen: 'max-width: 65rem',
    bigScreen: 'min-width: 65rem',
  },
  focus: css`
    outline: none;
    box-shadow: 0 0 0 ${pxToRem(3)} ${navFarger.fokusFarge};
  `,
  borderRadius: '.2rem',
  layoutMargin: '4vmin',
  layoutPadding: '1.5rem',
  fadeInAnimation: css`
    animation: ${fadeIn} 0.5s backwards;
  `,
  border: {
    banner: `0.3rem solid ${navFarger.navBlaLighten60}`,
  },
};
