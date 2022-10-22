import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

import NavigationBarView from '../shared/NavigationBarView';

const HomeView: React.FC = () => {
  return (
    <HomeWrapper>
      <NavigationBarView />
      <Text>홈</Text>
    </HomeWrapper>
  );
};

const HomeWrapper = styled(View)`
  width: 100%;
  height: 100%;
`;

export default HomeView;
