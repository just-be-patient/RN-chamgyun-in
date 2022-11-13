import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper';

const MyPageView: React.FC = () => {
  return (
    <MyPageWrapper>
      <Text>마이페이지</Text>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled(Wrapper)``;

export default MyPageView;
