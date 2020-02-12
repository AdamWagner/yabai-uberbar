/* eslint max-len: off  */
/* eslint react/react-in-jsx-scope: off */
/* eslint import/no-unresolved: off */
import Spaces from './lib/Spaces.jsx';
import { backgroundStyle } from './lib/style';
import { defaultConfig } from './lib/utils';

export const command = './scripts/screens-scripts';

export const initialState = '[]';

export const refreshFrequency = false;

export const updateState = event => event.output || initialState;

export const render = (output) => {
   if (!output) return <div className={backgroundStyle}>error</div>;
   const data = JSON.parse(output);
   const config = data.config || defaultConfig;

   return (
      <div className={backgroundStyle(config)}>
         <Spaces
            spaces={data.spaces || []}
            current={data.current || 0}
            config={config}
         />
      </div>
   );
};
