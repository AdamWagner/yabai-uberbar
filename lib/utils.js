/* eslint import/no-unresolved: off */
import { css } from 'uebersicht';
import { spaceStyle, currentStyle } from './style';
import colors from './colors';

const windowIsZoomed = win => win['zoom-fullscreen'] === 1 || win['zoom-parent'] === 1;

const computeStyle = (opacity = 0, color, z = 'initial') => css`
  opacity: ${opacity};
  fill: ${color}!important;
  z-index: ${z};
`;

export const defaultConfig = {
   barHeight: 50,
   resolution: {
      screenWidth: 1920, screenHeight: 1200,
   },
};

export const computeSpace = (space, windows, current, config) => {
   const index = space;

   const { barHeight, resolution } = config;
   const { screenWidth, screenHeight } = resolution;
   const barSpaceWidth = barHeight / (screenHeight / screenWidth);

   const hasWindows = windows.length > 0;
   const hasZoomed = windows.filter(windowIsZoomed).length > 0;

   const spaceIdxColor = hasWindows
      ? 'white'
      : colors.bg;

   const currentSpaceClass = (index === parseInt(current))
      ? currentStyle
      : '';

   const style = [spaceStyle(barSpaceWidth), currentSpaceClass].join(' ');

   if (hasWindows && hasZoomed) {
      // sort zoomed windows to end
      // will appear on top in svg z-index stack
      windows.sort(windowIsZoomed);
   }

   return {
      index,
      barHeight,
      screenWidth,
      screenHeight,
      hasWindows,
      hasZoomed,
      spaceWindows: windows,
      style,
      spaceIdxColor,
   };
};


export const computeWindow = (win, barHeight) => {
   const { frame, id, floating } = win;
   const opacity = floating
      ? 0.65
      : 1;

   const isZoomed = windowIsZoomed(win);
   const color = isZoomed
      ? colors.accent
      : 'inherit';

   const { x, y, w, h } = frame;
   const margin = 15 / (barHeight / 100);

   const width = w - 2 * margin;
   const height = h - 2 * margin;
   const posX = x + margin;
   const posY = y + margin;
   const style = computeStyle(opacity, color);

   return {
      id,
      width,
      height,
      posX,
      posY,
      floating,
      isZoomed,
      style,
      margin,
   };
};

