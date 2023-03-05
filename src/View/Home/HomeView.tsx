import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled from 'styled-components';
import {InterestData} from '../InterestList/InterestListView';
import Wrapper from '../shared/Wrapper';

import HomeNavigationBarView from './HomeNavigationBarView';

type HomeViewParam = {
  Param: {
    interestData?: InterestData;
  };
};

const HomeView: React.FC = ({navigation}: any) => {
  const route = useRoute<RouteProp<HomeViewParam, 'Param'>>();
  const id = route.params?.interestData?.id;
  const name = route.params?.interestData?.name;
  console.log('uk', id, name);

  const onAddButtonClick = () => {
    navigation.navigate('RegistWorry');
  };

  const onInterestListButtonClick = () => {
    navigation.navigate('InterestList');
  };

  const onDetailWorryClick = () => {
    navigation.navigate('WorryDetail');
  };

  return (
    <HomeWrapper>
      <HomeNavigationBarView onAddButtonClick={onAddButtonClick} />

      <InterestWrapper>
        <InterestTextWrapper>
          <TouchableWithoutFeedback onPress={onInterestListButtonClick}>
            <InterestText>
              관심사: {name ?? '전체'}{' '}
              <Image source={require('../../../assets/arrow_gray.png')} />
            </InterestText>
          </TouchableWithoutFeedback>
        </InterestTextWrapper>
      </InterestWrapper>
      <Button title="디테일" onPress={onDetailWorryClick} />
    </HomeWrapper>
  );
};

const HomeWrapper = styled(Wrapper)``;

const InterestWrapper = styled(View)`
  display: flex;
  align-items: flex-end;
`;

const InterestTextWrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-right: 20px;
`;

const InterestText = styled(Text)``;

export default HomeView;
