/* eslint react/react-in-jsx-scope: off */
import { barBgStyle } from './lib/style';
import { defaultConfig } from './lib/utils';

export const command = './scripts/screens-scripts';

export const initialState = '[]';

export const refreshFrequency = false;

export const updateState = event => event.output || initialState;

export const render = (output) => {
   if (!output) return <div>error</div>;
   const data = JSON.parse(output);
   const config = data.config || defaultConfig;

   return <div className={barBgStyle(config)} />;
};
