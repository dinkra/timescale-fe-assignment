import colors from './colors';
import typography from './typography';
import device from './device';

// Available as 'props.theme' in styled-components.
const theme = {
  ...colors,
  ...typography,
  ...device
};

export default theme;
