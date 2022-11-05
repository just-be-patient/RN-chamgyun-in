import React from 'react';
import {Button, Text, View} from 'react-native';
import styled from 'styled-components';

const ProfileView: React.FC = ({navigation}: any) => {
  const onNextButtonClick = () => {
    navigation.replace('TabBar', {screen: 'Home'});
  };

  return (
    <ProfileWrapper>
      <Text>프로필</Text>
      <Button title="다음" onPress={onNextButtonClick} />
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled(View)`
  width: 100%;
  height: 100%;
`;

export default ProfileView;
