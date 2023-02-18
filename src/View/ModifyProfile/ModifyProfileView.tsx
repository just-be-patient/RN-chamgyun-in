import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper';
import ModifyProfileNavigationBar from './ModifyProfileNavigationBar';

import Toggle from '../shared/Toggle';

const styles = StyleSheet.create({
  profileInfoLabel: {
    width: 374,
    marginBottom: 13,
  },
  pushAlarmLabel: {},
});

const ModifyProfileView: React.FC = () => {
  const [isPush, setIsPush] = useState(false);

  const onClickToggle = () => {
    setIsPush(!isPush);
  };

  return (
    <ModifyProfileWrapper>
      <ModifyProfileNavigationBar />
      <ProfileImage source={require('../../../assets/default_profile.png')} />
      <LabelText style={styles.profileInfoLabel}>
        프로필 정보를 입력해 주세요
      </LabelText>
      <NicknameInput placeholder="닉네임" />
      <PushAlarmWrapper>
        <LabelText style={styles.pushAlarmLabel}>푸시 알림 수신 동의</LabelText>
        <Toggle isOn={isPush} onClickToogle={onClickToggle} />
      </PushAlarmWrapper>
      <NextButton>
        <ButtonText>저장하기</ButtonText>
      </NextButton>
    </ModifyProfileWrapper>
  );
};

const ModifyProfileWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProfileImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin-bottom: 46px;
`;

const LabelText = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #282828;
`;

const NicknameInput = styled(TextInput)`
  padding: 17px 13px;
  width: 374px;
  height: 57px;
  margin-bottom: 40px;

  border-radius: 5px;
  background-color: #f5f5f5;
`;

const PushAlarmWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 374px;
  margin-bottom: 200px;
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

const ButtonText = styled(Text)`
  font-size: 20px;
  color: white;
  font-weight: 700;
`;

export default ModifyProfileView;
