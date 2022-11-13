import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {NavigationBar} from '../shared/NavigationBar';
import Wrapper from '../shared/Wrapper';

interface NavigationBarViewProps {
  onAddButtonClick: () => void;
}

const HomeNavigationBarView = ({onAddButtonClick}: NavigationBarViewProps) => {
  return (
    <NavigationBarWrapper>
      <Text>로고</Text>
      <TouchableOpacity onPress={onAddButtonClick}>
        <AddButton source={require('../../../assets/h_nb_add.png')} />
      </TouchableOpacity>
    </NavigationBarWrapper>
  );
};

const NavigationBarWrapper = styled(NavigationBar)``;

const AddButton = styled(Image)`
  width: 35px;
  height: 35px;
`;

export default HomeNavigationBarView;
