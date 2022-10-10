import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const Login: React.FC = () => {
  return (
    <LoginView>
      <Text>로그인</Text>
    </LoginView>
  );
};

const LoginView = styled(View)`
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.primary};
`;

export default Login;
