/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {
  Badge,
  BadgeText,
  ProfileImage,
  ProfileNickName,
  StatisticsText,
  ThumbnailImage,
  Time,
  WorryTitle,
} from '../shared/WorryContent';

interface ParticipateWorryContentProps {
  userProfile: string;
  userNickName: string;
  time: string;
  isInProgress: boolean;
  isParticipate: boolean;
  title: string;
  subtitle: string;
  thumbNail: string;
  viewCount: number;
  voteCount: number;
  commentCount: number;
}

const ParticipateWorryContent = ({
  userProfile,
  userNickName,
  time,
  isInProgress,
  isParticipate,
  title,
  thumbNail,
  viewCount,
  voteCount,
  commentCount,
}: ParticipateWorryContentProps) => {
  return (
    <Wrapper>
      <LeftContentsWrapper>
        <ProfileWrapper>
          <ProfileImage source={{uri: userProfile}} borderRadius={100} />
          <ProfileNickNameTimeWrapper>
            <ProfileNickName>{userNickName}</ProfileNickName>
            <Time>{time}</Time>
          </ProfileNickNameTimeWrapper>
        </ProfileWrapper>
        <WorryTitle numberOfLines={2}>{title}</WorryTitle>
        <StatisticsWrapper>
          <StatisticsText>
            조회수 {viewCount.toLocaleString()} | 투표수{' '}
            {voteCount.toLocaleString()} | 댓글수{' '}
            {commentCount.toLocaleString()}
          </StatisticsText>
        </StatisticsWrapper>
      </LeftContentsWrapper>
      <RightContentsWrapper>
        <BadgeWrapper>
          {isInProgress ? (
            <Badge style={{backgroundColor: '#2E4CE7'}}>
              <BadgeText>고민중</BadgeText>
            </Badge>
          ) : (
            <Badge style={{backgroundColor: '#5FBD52'}}>
              <BadgeText>고민완료</BadgeText>
            </Badge>
          )}
          {isParticipate && (
            <Badge style={{backgroundColor: '#F5BE46', marginLeft: 4}}>
              <BadgeText>참여중</BadgeText>
            </Badge>
          )}
        </BadgeWrapper>
        <ThumbnailImage source={{uri: thumbNail}} />
      </RightContentsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  padding: 12px 20px;
  justify-content: space-between;

  border-bottom-width: 0.2px;
  border-style: solid;
`;

const LeftContentsWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  width: 68.35%;
  margin-right: 12px;
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
  margin-bottom: 8px;
`;

const ProfileNickNameTimeWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  margin-left: 9px;
`;

const StatisticsWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: auto;
`;

const BadgeWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export default ParticipateWorryContent;
