/* eslint react/react-in-jsx-scope: off */
/* eslint react/prop-types: off  */
/* eslint max-len: off  */

const SvgRect = ({ width, height }) => (
   <rect
      x="0"
      y="0"
      width={width}
      height={height}
      strokeWidth="50"
      fillOpacity="1"
   />

);

const SvgGroup = ({ children }) => (
   <g fontFamily="OperatorMono Nerd Font" fontSize="480" fontWeight="300">
      {children}
   </g>
);

const SvgBlur = () => (
   <defs>
      <filter id="GaussianBlur">
         <feGaussianBlur stdDeviation="50" />
      </filter>
   </defs>
);

const Svg = ({ width, height, children }) => (
   <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
   >
      <SvgBlur />
      <SvgRect width={width} height={height} />
      {children}
   </svg>
);

const CenteredText = ({ color, children }) => (
   <text
      x="50%"
      y="55%"
      fill={color}
      textAnchor="middle"
      alignmentBaseline="middle"
   >
      { children }
   </text>
);

const MaxIcon = ({ width, height }) => (
   <svg
      width={width}
      height={height}
      fill="none"
      x="0"
      y="0"
   >
      <path d="M1308.15 0L1400.83 94.3067L1328.37 168.037C1309.83 186.899 1309.83 217.763 1328.37 236.624L1402.51 312.069C1421.05 330.931 1451.38 330.931 1469.91 312.069L1542.37 238.339L1645.15 342.933V0H1308.15Z" />
      <path d="M320.15 0H0V342.933L92.675 243.483L168.5 320.643C187.035 339.504 217.365 339.504 235.9 320.643L310.04 245.197C328.575 226.336 328.575 195.472 310.04 176.611L230.845 96.0213L320.15 0Z" />
      <path d="M165.13 672.149L84.25 754.453L0 668.72V994.507H320.15L225.79 898.485L306.67 816.181C325.205 797.32 325.205 766.456 306.67 747.595L232.53 672.149C213.995 653.288 183.665 653.288 165.13 672.149Z" />
      <path d="M1404.2 680.723L1330.06 754.453C1311.52 773.315 1311.52 804.179 1330.06 823.04L1405.88 900.2L1308.15 994.507H1645.15V668.72L1550.79 759.597L1471.6 679.008C1453.06 661.861 1422.73 661.861 1404.2 680.723Z" />
   </svg>
);


export {
   Svg, SvgRect, SvgGroup, SvgBlur, CenteredText, MaxIcon,
};
