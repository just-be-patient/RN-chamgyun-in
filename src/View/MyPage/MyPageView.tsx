import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const MyPageView: React.FC = () => {
  return (
    <MyPageWrapper>
      <Text>마이페이지</Text>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled(View)`
  width: 100%;
  height: 100%;
`;

export default MyPageView;
