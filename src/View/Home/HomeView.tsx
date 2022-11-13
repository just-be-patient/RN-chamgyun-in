import React from 'react';
import {Button, Text, View} from 'react-native';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper';

import HomeNavigationBarView from './HomeNavigationBarView';

const HomeView: React.FC = ({navigation}: any) => {
  const onAddButtonClick = () => {
    navigation.navigate('RegistWorry');
  };

  const onInterestListButtonClick = () => {
    navigation.navigate('InterestList');
  };

  const onDetailWorryClick = () => {
    navigation.navigate('WorryDetail');
  };

  return (
    <HomeWrapper>
      <HomeNavigationBarView onAddButtonClick={onAddButtonClick} />
      <Text>홈</Text>
      <Button title="관심사" onPress={onInterestListButtonClick} />
      <Button title="디테일" onPress={onDetailWorryClick} />
    </HomeWrapper>
  );
};

const HomeWrapper = styled(Wrapper)``;

export default HomeView;
