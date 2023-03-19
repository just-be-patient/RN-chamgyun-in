/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components';
import {WorryResponse} from '../../Api/Worry';
import TimeUtil from '../../util/timeUtil';

interface WorryListItemProps {
  worryItem: WorryResponse;
}

const WorryListItem = ({worryItem}: WorryListItemProps) => {
  const getTime = () => {
    return TimeUtil.getTime(new Date(worryItem.createAt));
  };

  return (
    <WorryListItemWrapper>
      <LeftContentsWrapper>
        <ProfileWrapper>
          <ProfileImage
            source={{uri: worryItem.writer.profileUrl}}
            borderRadius={100}
          />
          <ProfileNickNameTimeWrapper>
            <ProfileNickName>{worryItem.writer.name}</ProfileNickName>
            <Time>{getTime()}</Time>
          </ProfileNickNameTimeWrapper>
        </ProfileWrapper>
        <WorryTitle>{worryItem.title}</WorryTitle>
        <Subtitle numberOfLines={2}>{worryItem.content}</Subtitle>
        <StatisticsWrapper>
          <StatisticsText>
            조회수 {worryItem.viewCount.toLocaleString()}
          </StatisticsText>
        </StatisticsWrapper>
      </LeftContentsWrapper>
      <RightContentsWrapper>
        <BadgeWrapper>
          {worryItem.badges.map((badge, i) => {
            return badge.text === '고민중' ? (
              <Badge key={`${badge}-${i}`} style={{backgroundColor: '#2E4CE7'}}>
                <BadgeText>고민중</BadgeText>
              </Badge>
            ) : badge.text === '고민완료' ? (
              <Badge key={`${badge}-${i}`} style={{backgroundColor: '#5FBD52'}}>
                <BadgeText>고민완료</BadgeText>
              </Badge>
            ) : (
              <Badge
                key={`${badge}-${i}`}
                style={{backgroundColor: '#F5BE46', marginLeft: 4}}>
                <BadgeText>참여중</BadgeText>
              </Badge>
            );
          })}
        </BadgeWrapper>
        <ThumbnailImage source={{uri: worryItem.imageUrl}} />
      </RightContentsWrapper>
    </WorryListItemWrapper>
  );
};

const WorryListItemWrapper = styled(View)`
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

export const ProfileImage = styled(Image)`
  width: 30px;
  height: 30px;
`;

export const ProfileNickName = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({theme}) => theme.black01};
`;

export const Time = styled(Text)`
  margin-top: 1px;

  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;

  color: ${({theme}) => theme.gray01};
`;

export const WorryTitle = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: ${({theme}) => theme.black02};
`;

export const Subtitle = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({theme}) => theme.gray02};
`;

export const StatisticsText = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${({theme}) => theme.gray03};
`;

export const Badge = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 18px;

  border-radius: 100px;
  overflow: hidden;
`;

export const BadgeText = styled(Text)`
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  color: ${({theme}) => theme.white};
`;

export const ThumbnailImage = styled(Image)`
  width: 70px;
  height: 70px;

  border-radius: 8px;
  overflow: hidden;
`;

export {WorryListItem};
