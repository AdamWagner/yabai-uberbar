/* eslint import/no-unresolved: off */
import { css } from 'uebersicht';
import colors from './colors';

export const spaceStyle = width => css`
  display: flex;
  width: ${width - 10}px;
  padding: 6px 0px;
  position: relative;
  svg {
    flex: 1 0 100%;
    display: block;
    height: auto;
    width: auto;
    fill: ${colors.bg} !important;
    opacity: 0.5;
  }

  svg > rect {
    fill: white;
    stroke: white;
  }

  svg path {
    fill: white !important;
  }
`;

export const currentStyle = css`
  svg {
    opacity: 1 !important;
  }
  svg > rect {
    fill: white !important;
    stroke: white !important;
  }
`;

export const backgroundStyle = config => css`
  height: ${parseInt(config.barHeight)}px;
  display: flex;
`;


export const barBgStyle = config => css`
  height: ${parseInt(config.barHeight)}px;
  position: fixed;
  z-index: 0;
  background: rgba(35, 33, 70, 0.3);
  top: 0px;
  right: 0px;
  left: 0px;
`;
