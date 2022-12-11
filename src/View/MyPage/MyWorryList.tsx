/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View} from 'react-native';
import styled from 'styled-components';
import MyWorryContent from './type/MyWorryContent';

const mockDate = [
  {
    title: '랄프 맨날 RN 만해서 너무 슬퍼.. ㅁㄴㅇㅁㄴㅇ',
    time: '1분전',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
    isInProgress: true,
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
  },
  {
    title: '랄프 맨날 RN 만해서 너무 슬퍼.. ㅁㄴㅇㅁㄴㅇ',
    time: '1분전',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
    isInProgress: true,
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
  },
  {
    title: '랄프 맨날 RN 만해서 너무 슬퍼.. ㅁㄴㅇㅁㄴㅇ',
    time: '1분전',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
    isInProgress: false,
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
  },
  {
    title: '랄프 맨날 RN 만해서 너무 슬퍼.. ㅁㄴㅇㅁㄴㅇ',
    time: '1분전',
    viewCount: 1123,
    voteCount: 123,
    commentCount: 83,
    isInProgress: true,
    thumbNail: 'http://img.theqoo.net/img/OiWJB.jpg',
  },
  {
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
            key={i + data.title + data.viewCount}
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
