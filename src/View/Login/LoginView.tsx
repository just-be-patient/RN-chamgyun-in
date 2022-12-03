import React, {useEffect} from 'react';
import {Alert, Button, Image, Text as _Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styled from 'styled-components';

import Auth from '../../Api/Auth';
import Wrapper from '../shared/Wrapper';

const LoginView: React.FC = ({navigation}: any) => {
  useEffect(() => {
    console.log('loading');
  });

  const onButtonClick = () => {
    navigation.replace('Profile');
  };

  const onLoginButtonClick = async () => {
    const res = await Auth.localLogin({
      email: 'asd@123.com',
      password: '123123',
    });

    if (res === 'SUCCESS') {
      navigation.replace('Profile');
    } else {
      Alert.alert('로그인 실패!');
    }
  };

  return (
    <LoginWrapper>
      <LogoImg source={require('../../../assets/default_logo.png')} />
      <Text>
        이 세상 <HiighlightText>참견쟁이</HiighlightText>들 모두 여기로 모여라!
      </Text>
      <KakaoLoginContaienr onPress={onLoginButtonClick}>
        <Image
          source={require('../../../assets/kakao_login_medium_wide.png')}
        />
      </KakaoLoginContaienr>
      <Button title={'aasdsd'} onPress={onButtonClick} />
    </LoginWrapper>
  );
};

const LoginWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled(Image)`
  margin-bottom: 24px;
`;

const Text = styled(_Text)`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000;
  opacity: 0.5;
  margin-bottom: 55px;
`;

const HiighlightText = styled(Text)`
  color: #f00000;
`;

const LoginImgContainer = styled(TouchableWithoutFeedback)`
  height: 48px;
`;

const KakaoLoginContaienr = styled(LoginImgContainer)`
  margin-bottom: 12px;
`;

const AppleLoginContainer = styled(LoginImgContainer)``;

export default LoginView;
