import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const MyPageWorryListView = () => {
  return (
    <MyPageWorryListWrapper>
      <Text>나야~ 내가 고민 리스트야~~</Text>
    </MyPageWorryListWrapper>
  );
};

const MyPageWorryListWrapper = styled(View)``;

export default MyPageWorryListView;
