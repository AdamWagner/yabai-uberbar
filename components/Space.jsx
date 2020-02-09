/* eslint react/prop-types: off  */
/* eslint import/no-unresolved: off */
import { React } from 'uebersicht';
import { computeSpace } from '../lib/utils';
import Window from './Window.jsx';
import { Svg, SvgGroup, CenteredText } from './Svg.jsx';

const SpaceNumber = ({ color, children }) => (
   <SvgGroup>
      <CenteredText color={color}>
         { children }
      </CenteredText>
   </SvgGroup>
);

const Space = ({ space, windows = [], current, config }) => {
   const { index,
      barHeight,
      screenWidth,
      screenHeight,
      hasWindows,
      spaceWindows,
      style,
      spaceIdxColor } = computeSpace(space, windows, current, config);

   return (
      <div className={style} key={index}>
         <Svg width={screenWidth} height={screenHeight}>
            { hasWindows && spaceWindows.map(w => Window(w, barHeight)) }
            <SpaceNumber color={spaceIdxColor}>
               {index}
            </SpaceNumber>
         </Svg>
      </div>
   );
};

export default Space;
