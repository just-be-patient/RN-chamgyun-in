import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import styled from 'styled-components';

import {apiPost, apiGet} from '../../Api/api';
import Wrapper from '../shared/Wrapper';

const LoginView: React.FC = ({navigation}: any) => {
  useEffect(() => {
    console.log('loading');
  });

  const onButtonClick = () => {
    navigation.replace('Profile');
  };

  const onLoginButtonClick = async () => {
    const a = await apiPost('/auth/login/local', {
      email: 'asd@123.com',
      password: 'adnwknd',
    });

    const b = await apiGet('/auth/login/stauts');

    console.log('a: ', a);
    console.log('b: ', b);
  };

  return (
    <LoginWrapper>
      <Text>로그인</Text>
      <Button title={'login'} onPress={onLoginButtonClick} />
      <Button title={'aasdsd'} onPress={onButtonClick} />
    </LoginWrapper>
  );
};

const LoginWrapper = styled(Wrapper)`
  background-color: ${props => props.theme.primary};
`;

export default LoginView;
