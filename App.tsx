import React from 'react';
import {ThemeProvider} from 'styled-components';
import Navigation from './src/Navigation';
import {light, dark} from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
