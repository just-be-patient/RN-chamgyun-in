import React from 'react';
import {Image, Text, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components';
import {MoreMenu} from '../shared/MoreMenu';
import {NavigationBar} from '../shared/NavigationBar';
import useMyPageNavigation from './hook/useMyPageNavigation';

const MyPageNavigationBarView = () => {
  const {menuVisible, onDddotClick, moreMenuOption} = useMyPageNavigation();

  return (
    <>
      <MyPageNavigationBarWrapper>
        <Text>logo</Text>
        <TouchableWithoutFeedback onPress={onDddotClick}>
          <DddotIcon source={require('../../../assets/nb_ddd.png')} />
        </TouchableWithoutFeedback>
      </MyPageNavigationBarWrapper>
      {menuVisible && <MoreMenu top={60} right={0} options={moreMenuOption} />}
    </>
  );
};

const MyPageNavigationBarWrapper = styled(NavigationBar)``;

const DddotIcon = styled(Image)`
  width: 4px;
  height: 20px;
`;

export default MyPageNavigationBarView;
