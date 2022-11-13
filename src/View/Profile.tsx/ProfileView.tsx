import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper';

const ProfileView: React.FC = ({navigation}: any) => {
  const onNextButtonClick = () => {
    navigation.replace('TabBar', {screen: 'Home'});
  };

  return (
    <ProfileWrapper>
      <DefaultProfileImage
        source={require('../../../assets/default_profile.png')}
      />
      <ProfileInputContainer>
        <NicknameInputLabel>프로필 정보를 입력해 주세요</NicknameInputLabel>
        <NicknameInput placeholder="닉네임" />
      </ProfileInputContainer>
      <NextButton onPress={onNextButtonClick}>
        <NextButtonText>다음</NextButtonText>
      </NextButton>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 121px 16px 242px;
`;

const DefaultProfileImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin-bottom: 46px;
`;

const ProfileInputContainer = styled(View)`
  width: 100%;
  margin-bottom: auto;
`;

const NicknameInputLabel = styled(Text)`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 13px;
  margin-left: 9px;

  color: #282828;
`;

const NicknameInput = styled(TextInput)`
  width: 100%;
  height: 57px;
  padding: 18px 14px;

  font-weight: 400;
  font-size: 16px;

  border-radius: 8px;
  background-color: #f5f5f5;
`;

const NextButton = styled(TouchableOpacity)`
  width: 318px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 40px;
  background-color: ${props => props.theme.primary};
`;

const NextButtonText = styled(Text)`
  font-size: 20px;
  color: white;
  font-weight: 700;
`;

export default ProfileView;
