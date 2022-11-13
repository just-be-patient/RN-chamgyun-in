import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper';
import WorryDetailNavigationBar from './WorryDetailNavigationBar';

const WorryDetailView: React.FC = ({navigation}: any) => {
  return (
    <WorryDetailWrapper>
      <WorryDetailNavigationBar />
      <Text>고민 상세</Text>
    </WorryDetailWrapper>
  );
};

const WorryDetailWrapper = styled(Wrapper)``;

export default WorryDetailView;
