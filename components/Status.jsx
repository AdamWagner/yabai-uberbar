/* eslint react/react-in-jsx-scope: off */

import batteryLevels from './batteryLevels';

const getbatteryStatus = ({ amount, state }) => {
   amount = parseInt(amount);
   const isLoading = state === 'AC';

   for (let i = 0; i <= batteryLevels.length - 1; i++) {
      const item = batteryLevels[i];

      if (amount <= item.levelMax) {
         return (
            <div>
               <span>{item.icon}</span>
               <span>
                  {amount}
%
               </span>
            </div>
         );
      }
   }
};

const getWifiStatus = ({ netStatus, netName }) => {
   const netIcons = {
      'Wi-Fi': '',
      'USB 10/100/1000 LAN': '',
      'Apple USB Ethernet Adapter': '',
      none: '',
   };
   netName = netName === 'none' ? 'Not connected' : netName;

   return (
      <div>
         <span>{netIcons[netStatus]}</span>
         <span>{netName}</span>
      </div>
   );
};

const getDateTime = ({ time, date }) => (
   <div>
      <div>{time}</div>
      <div>{date}</div>
   </div>
);

const render = ({ output }) => {
   const values = output.split('@');

   const dateTimeInfos = {
      time: values[0].replace(/^\s+|\s+$/g, ''),
      date: values[1],
   };
   const batteryInfos = {
      amount: values[2],
      state: values[3].split(' ')[1],
   };
   const wifiInfos = {
      netStatus: values[4].split(' ')[1],
      netName: values[5],
   };

   return (
      <div style={statusWrapper}>
         <div>{getbatteryStatus(batteryInfos)}</div>
         <div>{getWifiStatus(wifiInfos)}</div>
         <div>{getDateTime(dateTimeInfos)}</div>
      </div>
   );
};

export default render;
