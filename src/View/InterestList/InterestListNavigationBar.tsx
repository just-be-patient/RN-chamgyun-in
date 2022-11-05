import React from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components';

interface InterestListNavigationBarProps {
  onPreButtonClick: () => void;
}

const InterestListNavigationBar = ({
  onPreButtonClick,
}: InterestListNavigationBarProps) => {
  return (
    <InterestListNavigationBarWrapper>
      <TouchableOpacity onPress={onPreButtonClick}>
        <PreButton source={require('../../../assets/nb_pre.png')} />
      </TouchableOpacity>
    </InterestListNavigationBarWrapper>
  );
};

const InterestListNavigationBarWrapper = styled(View)`
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

const PreButton = styled(Image)`
  width: 11.3px;
  height: 20px;
`;

export default InterestListNavigationBar;
