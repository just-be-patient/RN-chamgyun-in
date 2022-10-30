import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const RegistWorryView: React.FC = () => {
  return (
    <RegistWorryWrapper>
      <Text>고민 등록</Text>
    </RegistWorryWrapper>
  );
};

const RegistWorryWrapper = styled(View)`
  width: 100%;
  height: 100%;
`;

export default RegistWorryView;
