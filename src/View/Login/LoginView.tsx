import React from 'react';
import {Button, Text, View} from 'react-native';
import styled from 'styled-components';

const LoginView: React.FC = ({navigation}: any) => {
  const onButtonClick = () => {
    navigation.navigate('Home');
  };

  return (
    <LoginWrapper>
      <Text>로그인</Text>
      <Button title={'aasdsd'} onPress={onButtonClick} />
    </LoginWrapper>
  );
};

const LoginWrapper = styled(View)`
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.primary};
`;

export default LoginView;
