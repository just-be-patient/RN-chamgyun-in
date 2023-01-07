import {DefaultTheme} from 'styled-components';

const light: DefaultTheme = {
  primary: '#0E6438',
  black: '#000000',
  black01: '#33333',
  black02: '#282828',
  white: '#ffffff',
  gray01: '#808080',
  gray02: '#666666',
  gray03: '#9a9a9a',
  red01: ' #E34343',
};

const dark: DefaultTheme = {
  ...light,
};

export {light, dark};
