/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components';

const mock1 = {
  userProfile: 'http://img.theqoo.net/img/OiWJB.jpg',
  userNickName: '네이티브가하고싶은ralph',
  time: '1분전',
  isInProgress: true,
  isParticipate: true,
  title: '랄프 맨날 RN 만해서 너무 슬퍼..',
  subtitle:
    '내가 자바스크립트할라고 취직한게 아닌데 개같네 하 스위프트하고 싶다. 스위프트 하고싶다... 내가 자바스크립트할라고 취직한게 아닌데 개같네 하 스위프트하고 싶다. 스위프트 하고싶다...',
  thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
  viewCount: 1123,
  voteCount: 123,
  commentCount: 83,
};

const mock2 = {
  userProfile: 'http://img.theqoo.net/img/OiWJB.jpg',
  userNickName: '네이티브가하고싶은ralph',
  time: '1분전',
  isInProgress: false,
  isParticipate: false,
  title: '랄프 맨날 RN 만해서 너무 슬퍼..',
  subtitle:
    '내가 자바스크립트할라고 취직한게 아닌데 개같네 하 스위프트하고 싶다. 스위프트 하고싶다... 내가 자바스크립트할라고 취직한게 아닌데 개같네 하 스위프트하고 싶다. 스위프트 하고싶다...',
  thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
  viewCount: 1123,
  voteCount: 123,
  commentCount: 83,
};

const WorryContent = () => {
  return (
    <WorryContentWrapper>
      <LeftContentsWrapper>
        <ProfileWrapper>
          <ProfileImage source={{uri: mock1.userProfile}} borderRadius={100} />
          <ProfileNickNameTimeWrapper>
            <ProfileNickName>{mock1.userNickName}</ProfileNickName>
            <Time>{mock1.time}</Time>
          </ProfileNickNameTimeWrapper>
        </ProfileWrapper>
        <Title>{mock1.title}</Title>
        <Subtitle numberOfLines={2}>{mock1.subtitle}</Subtitle>
        <StatisticsWrapper>
          <StatisticsText>
            조회수 {mock1.viewCount.toLocaleString()} | 투표수{' '}
            {mock1.voteCount.toLocaleString()} | 댓글수{' '}
            {mock1.commentCount.toLocaleString()}
          </StatisticsText>
        </StatisticsWrapper>
      </LeftContentsWrapper>
      <RightContentsWrapper>
        <BadgeWrapper>
          {mock2.isInProgress ? (
            <Badge style={{backgroundColor: '#2E4CE7'}}>
              <BadgeText>고민중</BadgeText>
            </Badge>
          ) : (
            <Badge style={{backgroundColor: '#5FBD52'}}>
              <BadgeText>고민완료</BadgeText>
            </Badge>
          )}
          {mock2.isParticipate && (
            <Badge style={{backgroundColor: '#F5BE46', marginLeft: 4}}>
              <BadgeText>참여중</BadgeText>
            </Badge>
          )}
        </BadgeWrapper>
        <ThumbnailImage source={{uri: mock1.thumbNail}} />
      </RightContentsWrapper>
    </WorryContentWrapper>
  );
};

const WorryContentWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  padding: 12px 20px 16px;
  justify-content: space-between;

  border-bottom-width: 0.2px;
  border-style: solid;
`;

const LeftContentsWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  width: 68.35%;
  margin-right: 10px;
`;
const RightContentsWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
`;

const ProfileWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const ProfileNickNameTimeWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  margin-left: 9px;
`;

const StatisticsWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 7px;
`;

const BadgeWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const ProfileImage = styled(Image)`
  width: 30px;
  height: 30px;
`;

const ProfileNickName = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({theme}) => theme.black01};
`;

const Time = styled(Text)`
  margin-top: 1px;

  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;

  color: ${({theme}) => theme.gray01};
`;

const Title = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: ${({theme}) => theme.black02};
`;

const Subtitle = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({theme}) => theme.gray02};
`;

const StatisticsText = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.gray03};
`;

const Badge = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 18px;

  border-radius: 100;
  overflow: hidden;
`;

const BadgeText = styled(Text)`
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  color: ${({theme}) => theme.white};
`;

const ThumbnailImage = styled(Image)`
  width: 70px;
  height: 70px;

  border-radius: 8;
  overflow: hidden;
`;

export {WorryContent};
