import React from 'react';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper';
import MyPageNavigationBarView from './MyPageNavigationBarView';
import MyPageProfileView from './MyPageProfileView';
import MyPageWorryListView from './MyPageWorryListView';
import useMyPage from './hook/useMyPage';
import {Text} from 'react-native';

const MyPageView: React.FC = () => {
  const {profile} = useMyPage();

  return (
    <MyPageWrapper>
      <MyPageNavigationBarView />
      {profile ? (
        <>
          <MyPageProfileView profile={profile} />
          <MyPageWorryListView />
        </>
      ) : (
        <Text>loading...</Text>
      )}
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled(Wrapper)``;

export default MyPageView;
