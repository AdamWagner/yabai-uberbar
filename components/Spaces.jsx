import Space from './Space.jsx';

// capture vars current, config and return space mapping function
const reshapeSpaces = (current, config) => s => ({
   space: s.space, windows: s.windows, current, config,
});

const Spaces = ({ spaces, current, config }) => spaces
   .map(reshapeSpaces(current, config))
   .map(Space);

export default Spaces;
