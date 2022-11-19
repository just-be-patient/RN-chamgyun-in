import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';
import {Profile} from './type/MyPageDataType';

const style = StyleSheet.create({
  border: {
    borderLeftWidth: 0.2,
    borderStyle: 'solid',
  },
});

interface MypageProfileViewProps {
  profile: Profile;
}

const MyPageProfileView = ({profile}: MypageProfileViewProps) => {
  const myActivity = [
    {figure: profile.myWorry.toLocaleString(), label: '내 고민'},
    {figure: profile.stickWorry.toLocaleString(), label: '참견수'},
    {figure: `${profile.adoptionRate}%`, label: '채택률'},
  ];

  return (
    <MyPageProfileWrapper>
      <ProfileImg source={{uri: profile.profileImg}} />
      <UserName>{profile.userName}</UserName>
      <MyActivityWrapper>
        {myActivity.map((activity, i) => (
          <MyActivityContainer
            key={activity.label}
            style={i !== 0 ? style.border : undefined}>
            <MyActivityFigure>{activity.figure}</MyActivityFigure>
            <MyActivityLabel>{activity.label}</MyActivityLabel>
          </MyActivityContainer>
        ))}
      </MyActivityWrapper>
    </MyPageProfileWrapper>
  );
};

const MyPageProfileWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 34px;
  width: 100%;
  height: 239px;

  border-bottom-width: 0.2px;
  border-style: solid;
`;

const ProfileImg = styled(Image)`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
`;

const UserName = styled(Text)`
  margin-bottom: 25px;

  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000;
`;

const MyActivityWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const MyActivityContainer = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  flex: 1;
`;

const MyActivityFigure = styled(Text)`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const MyActivityLabel = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export default MyPageProfileView;
