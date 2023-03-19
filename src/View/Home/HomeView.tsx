import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled from 'styled-components';
import Worry, {WorryResponse} from '../../Api/Worry';
import {InterestData} from '../InterestList/InterestListView';
import {WorryListItem} from '../shared/WorryListItem';
import Wrapper from '../shared/Wrapper';

import HomeNavigationBarView from './HomeNavigationBarView';

type HomeViewParam = {
  Param: {
    interestData?: InterestData;
  };
};

const HomeView: React.FC = ({navigation}: any) => {
  const [worryList, setWorryList] = useState<WorryResponse[]>();

  const route = useRoute<RouteProp<HomeViewParam, 'Param'>>();
  const id = route.params?.interestData?.id;
  const name = route.params?.interestData?.name;

  const onAddButtonClick = () => {
    navigation.navigate('RegistWorry');
  };

  const onInterestListButtonClick = () => {
    navigation.navigate('InterestList');
  };

  const onDetailWorryClick = () => {
    navigation.navigate('WorryDetail');
  };

  useEffect(() => {
    (async function () {
      const data = await Worry.getWorryList({interestId: id ?? 0});
      setWorryList(data);
    })();
  }, [id]);

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
      <ScrollView>
        {worryList &&
          worryList.map(worry => {
            return <WorryListItem key={worry.id} worryItem={worry} />;
          })}
      </ScrollView>
      {/* <Button title="디테일" onPress={onDetailWorryClick} /> */}
    </HomeWrapper>
  );
};

const HomeWrapper = styled(Wrapper)``;

const InterestWrapper = styled(View)`
  display: flex;
  align-items: flex-end;
`;

const InterestTextWrapper = styled(View)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;
  /* margin-right: 20px; */

  border-bottom-width: 0.2px;
  border-bottom-color: black;
`;

const InterestText = styled(Text)``;

export default HomeView;
