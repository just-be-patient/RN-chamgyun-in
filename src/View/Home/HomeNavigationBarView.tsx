import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

const NavigationBarView: React.FC = () => {
  return <NavigationBarWrapper />;
};

const NavigationBarWrapper = styled(View)`
  width: 100%;
  height: 60px;

  border-bottom-width: 0.2px;
  border-style: solid;
`;

export default NavigationBarView;
