/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import MyWorryContent from './MyWorryContent';

const mockDate = [
  {
    idx: 11,
    title: '랄프 맨날 RN 만해서 너무 슬퍼.. ㅁㄴㅇㅁㄴㅇ',
    time: '1분전',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
    isInProgress: true,
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
  },
  {
    idx: 21,
    title: '랄프 맨날 RN 만해서 너무 슬퍼.. ㅁㄴㅇㅁㄴㅇ',
    time: '1분전',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
    isInProgress: true,
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
  },
  {
    idx: 31,
    title: '랄프 맨날 RN 만해서 너무 슬퍼.. ㅁㄴㅇㅁㄴㅇ',
    time: '1분전',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
    isInProgress: false,
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
  },
  {
    idx: 41,
    title: '랄프 맨날 RN 만해서 너무 슬퍼.. ㅁㄴㅇㅁㄴㅇ',
    time: '1분전',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
    isInProgress: true,
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
  },
  {
    idx: 51,
    title: '랄프 맨날 RN 만해서 너무 슬퍼.. ㅁㄴㅇㅁㄴㅇ',
    time: '1분전',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
    isInProgress: true,
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
  },
];

const MyWorryList = () => {
  return (
    <MyWorryListWrapper>
      {mockDate.map((data, i) => {
        return (
          <MyWorryContent
            key={data.idx}
            title={data.title}
            time={data.time}
            viewCount={data.viewCount}
            voteCount={data.voteCount}
            commentCount={data.commentCount}
            isInProgress={data.isInProgress}
            thumbNail={data.thumbNail}
          />
        );
      })}
    </MyWorryListWrapper>
  );
};

const MyWorryListWrapper = styled(ScrollView)`
  display: flex;
  flex-direction: column;
`;

export default MyWorryList;
