import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import ParticipateWorryContent from './ParticipateWorryContent';

const mockData = [
  {
    idx: 1,
    userProfile: 'http://img.theqoo.net/img/OiWJB.jpg',
    userNickName: '네이티브가하고싶은ralph',
    time: '1분전',
    isInProgress: true,
    isParticipate: true,
    title:
      '랄프 맨날 RN 만해서 너무 슬퍼.. 랄프 맨날 RN 만해서 너무 슬퍼.. 랄프 맨날 RN 만해서 너무 슬퍼..',
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
  },
  {
    idx: 2,
    userProfile: 'http://img.theqoo.net/img/OiWJB.jpg',
    userNickName: '네이티브가하고싶은ralph',
    time: '1분전',
    isInProgress: true,
    isParticipate: true,
    title: '랄프 맨날 RN 만해서 너무 슬퍼..',
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
  },
  {
    idx: 3,
    userProfile: 'http://img.theqoo.net/img/OiWJB.jpg',
    userNickName: '네이티브가하고싶은ralph',
    time: '1분전',
    isInProgress: true,
    isParticipate: true,
    title: '랄프 맨날 RN 만해서 너무 슬퍼..',
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
  },
  {
    idx: 4,
    userProfile: 'http://img.theqoo.net/img/OiWJB.jpg',
    userNickName: '네이티브가하고싶은ralph',
    time: '1분전',
    isInProgress: true,
    isParticipate: true,
    title: '랄프 맨날 RN 만해서 너무 슬퍼..',
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
  },
  {
    idx: 5,
    userProfile: 'http://img.theqoo.net/img/OiWJB.jpg',
    userNickName: '네이티브가하고싶은ralph',
    time: '1분전',
    isInProgress: true,
    isParticipate: true,
    title: '랄프 맨날 RN 만해서 너무 슬퍼..',
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
  },
];

const PraticipateWorryList = () => {
  return (
    <Wrapper>
      {mockData.map((data, i) => {
        return (
          <ParticipateWorryContent
            key={data.idx + i}
            userProfile={data.userProfile}
            userNickName={data.userNickName}
            time={data.time}
            isInProgress={data.isInProgress}
            isParticipate={data.isParticipate}
            title={data.title}
            thumbNail={data.thumbNail}
            viewCount={data.viewCount}
            voteCount={data.voteCount}
            commentCount={data.commentCount}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled(ScrollView)`
  display: flex;
  flex-direction: column;
`;

export default PraticipateWorryList;
