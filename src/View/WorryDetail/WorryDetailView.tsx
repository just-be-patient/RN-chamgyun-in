import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import WorryDetailNavigationBar from './WorryDetailNavigationBar';

const WorryDetailView: React.FC = ({navigation}: any) => {
  return (
    <WorryDetailWrapper>
      <WorryDetailNavigationBar />
      <Text>고민 상세</Text>
    </WorryDetailWrapper>
  );
};

const WorryDetailWrapper = styled(View)`
  width: 100%;
  height: 100%;
`;

export default WorryDetailView;
