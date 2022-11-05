import React from 'react';
import {BackHandler, Text, View} from 'react-native';
import styled from 'styled-components';
import WorryDetailNavigationBar from './WorryDetailNavigationBar';

const WorryDetailView: React.FC = ({navigation}: any) => {
  const onPreButtonClick = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      BackHandler.exitApp();
    }
  };

  return (
    <WorryDetailWrapper>
      <WorryDetailNavigationBar onPreButtonClick={onPreButtonClick} />
      <Text>고민 상세</Text>
    </WorryDetailWrapper>
  );
};

const WorryDetailWrapper = styled(View)`
  width: 100%;
  height: 100%;
`;

export default WorryDetailView;
