import React, {useEffect, useState} from 'react';
import {
  InteractionManagerStatic,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import Interest from '../../Api/Interest';
import Wrapper from '../shared/Wrapper';
import InterestListNavigationBar from './InterestListNavigationBar';

export interface InterestData {
  id: number;
  name: string;
}

const InterestListView: React.FC = () => {
  const [interestData, setInterestData] = useState<InterestData[]>();
  const navigate = useNavigation();

  useEffect(() => {
    (async function () {
      const data = await Interest.getMyInterest();
      setInterestData(data);
    })();
  }, []);

  const onInterestItemClick = (interest?: InterestData) => {
    navigate.navigate('Home' as never, {interestData: interest} as never);
  };

  return (
    <InterestListWrapper>
      <InterestListNavigationBar />
      <TouchableWithoutFeedback onPress={() => onInterestItemClick()}>
        <InterestItemWrapper>
          <InterestMainText>#전체</InterestMainText>
        </InterestItemWrapper>
      </TouchableWithoutFeedback>
      {interestData ? (
        interestData.map(interest => (
          <TouchableWithoutFeedback
            key={interest.id}
            onPress={() => onInterestItemClick(interest)}>
            <InterestItemWrapper>
              <InterestMainText>#{interest.name}</InterestMainText>
            </InterestItemWrapper>
          </TouchableWithoutFeedback>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </InterestListWrapper>
  );
};

const InterestListWrapper = styled(Wrapper)``;

const InterestItemWrapper = styled(View)`
  padding: 28px 23px;

  border-bottom-width: 0.2px;
  border-style: solid;
`;

const InterestMainText = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: black;
`;

export default InterestListView;
