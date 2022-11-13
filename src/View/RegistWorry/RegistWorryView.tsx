import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper';

const RegistWorryView: React.FC = () => {
  return (
    <RegistWorryWrapper>
      <Text>고민 등록</Text>
    </RegistWorryWrapper>
  );
};

const RegistWorryWrapper = styled(Wrapper)``;

export default RegistWorryView;
