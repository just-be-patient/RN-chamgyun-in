import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper';
import InterestListNavigationBar from './InterestListNavigationBar';

const InterestListView: React.FC = ({navigation}: any) => {
  return (
    <InterestListWrapper>
      <InterestListNavigationBar />
      <Text>관심사 목록</Text>
    </InterestListWrapper>
  );
};

const InterestListWrapper = styled(Wrapper)``;

export default InterestListView;
