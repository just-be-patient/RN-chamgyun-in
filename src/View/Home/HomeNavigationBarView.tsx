import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const NavigationBarView: React.FC = () => {
  return (
    <NavigationBarWrapper>
      <Text>로고</Text>
      <TouchableOpacity onPress={() => console.log('hello')}>
        <AddButton source={require('../../../assets/h_nb_add.png')} />
      </TouchableOpacity>
    </NavigationBarWrapper>
  );
};

const NavigationBarWrapper = styled(View)`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;

  border-bottom-width: 0.2px;
  border-style: solid;
`;

const AddButton = styled(Image)`
  width: 35px;
  height: 35px;
`;

export default NavigationBarView;
