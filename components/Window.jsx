/* eslint react/prop-types: off  */
/* eslint import/no-unresolved: off */
import { React } from 'uebersicht';
import { computeWindow } from '../lib/utils';
import { MaxIcon } from './Svg.jsx';

const WinRect = ({ id, width, height, posX, posY, style, isShadow }) => (
   <rect
      key={id}
      width={width}
      height={height}
      x={posX}
      y={posY}
      className={style}
      filter={isShadow && 'url(#GaussianBlur)'}
   />
);

const Window = (win, barHeight) => {
   if (win.frame) {
      const winProps = computeWindow(win, barHeight);
      console.log('winProps:', winProps);

      return (
         <g key={win.id}>
            {win.floating && <WinRect {...winProps} isShadow />}
            <WinRect {...winProps} />
            { winProps.isZoomed && <MaxIcon width={winProps.width} height={winProps.height} /> }
         </g>
      );
   }

   console.log('no windows');

   return <div>No windows</div>;
};

export default Window;
