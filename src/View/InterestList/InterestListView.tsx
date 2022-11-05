import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import InterestListNavigationBar from './InterestListNavigationBar';

const InterestListView: React.FC = ({navigation}: any) => {
  const onPreButtonClick = () => {
    navigation.goBack();
  };

  return (
    <InterestListWrapper>
      <InterestListNavigationBar onPreButtonClick={onPreButtonClick} />
      <Text>관심사 목록</Text>
    </InterestListWrapper>
  );
};

const InterestListWrapper = styled(View)`
  width: 100%;
  height: 100%;
`;

export default InterestListView;
