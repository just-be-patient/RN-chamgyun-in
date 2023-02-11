import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper';
import ModifyProfileNavigationBar from './ModifyProfileNavigationBar';

const ModifyProfileView: React.FC = () => {
  return (
    <ModifyProfileWrapper>
      <ModifyProfileNavigationBar />
      <Text>프로필 수정</Text>
    </ModifyProfileWrapper>
  );
};

const ModifyProfileWrapper = styled(Wrapper)``;

export default ModifyProfileView;
