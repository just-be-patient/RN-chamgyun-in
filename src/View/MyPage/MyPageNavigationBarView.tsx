import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import {NavigationBar} from '../shared/NavigationBar';

const MyPageNavigationBarView = () => {
  return (
    <MyPageNavigationBarWrapper>
      <Text>내가 네비게이션바여~</Text>
    </MyPageNavigationBarWrapper>
  );
};

const MyPageNavigationBarWrapper = styled(NavigationBar)``;

export default MyPageNavigationBarView;
