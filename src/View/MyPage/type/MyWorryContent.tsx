/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {
  Badge,
  BadgeText,
  StatisticsText,
  ThumbnailImage,
  Time,
  WorryTitle,
} from '../../shared/WorryContent';

interface MyWorryContentProps {
  title: string;
  time: string;
  viewCount: number;
  voteCount: number;
  commentCount: number;
  isInProgress: boolean;
  thumbNail: string;
}

const MyWorryContent = ({
  title,
  time,
  viewCount,
  voteCount,
  commentCount,
  isInProgress,
  thumbNail,
}: MyWorryContentProps) => {
  return (
    <Wrapper>
      <LeftContentWrapper>
        <WorryTitle numberOfLines={2} style={{marginBottom: 7}}>
          {title}
        </WorryTitle>
        <StatisticsText>
          조회수 {viewCount.toLocaleString()} | 투표수{' '}
          {voteCount.toLocaleString()} | 댓글수 {commentCount.toLocaleString()}
        </StatisticsText>
      </LeftContentWrapper>
      <RightContentWrapper>
        <RightSubContainer>
          <Time style={{marginTop: 5}}>{time}</Time>
          {isInProgress ? (
            <Badge style={{backgroundColor: '#2E4CE7'}}>
              <BadgeText>고민중</BadgeText>
            </Badge>
          ) : (
            <Badge style={{backgroundColor: '#5FBD52'}}>
              <BadgeText>고민완료</BadgeText>
            </Badge>
          )}
        </RightSubContainer>
        <ThumbnailImage source={{uri: thumbNail}} />
      </RightContentWrapper>
    </Wrapper>
  );
};
const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 20px;
  width: 100%;

  border-bottom-width: 0.2px;
  border-style: solid;
`;

const LeftContentWrapper = styled(View)`
  width: 60%;
  margin-right: 10px;
`;

const RightContentWrapper = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const RightSubContainer = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 20px;
`;

export default MyWorryContent;
