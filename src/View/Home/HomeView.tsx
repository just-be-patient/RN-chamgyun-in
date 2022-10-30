import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

import HomeNavigationBarView from './HomeNavigationBarView';

const HomeView: React.FC = () => {
  return (
    <HomeWrapper>
      <HomeNavigationBarView />
      <Text>홈</Text>
    </HomeWrapper>
  );
};

const HomeWrapper = styled(View)`
  width: 100%;
  height: 100%;
`;

export default HomeView;
