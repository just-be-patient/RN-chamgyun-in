import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper';
import WorryDetailNavigationBar from './WorryDetailNavigationBar';

const WorryDetailView: React.FC = () => {
  return (
    <WorryDetailWrapper>
      <WorryDetailNavigationBar />
      <Text>고민 상세</Text>
    </WorryDetailWrapper>
  );
};

const WorryDetailWrapper = styled(Wrapper)``;

export default WorryDetailView;
