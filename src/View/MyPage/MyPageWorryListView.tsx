import React from 'react';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styled from 'styled-components';
import {WorryContent} from '../shared/WorryContent';
import {MyPageTab} from './type/MyPageDataType';

interface MyPageWorryListViewProps {
  tabMenu: MyPageTab[];
  onClickTabMenu: (idx: number) => void;
}

const MyPageWorryListView = ({
  tabMenu,
  onClickTabMenu,
}: MyPageWorryListViewProps) => {
  return (
    <MyPageWorryListWrapper>
      <TabWrapper>
        {tabMenu.map((menu, i) => (
          <TabContainer key={menu.title}>
            <TouchableWithoutFeedback onPress={() => onClickTabMenu(i)}>
              <TabText>{menu.title}</TabText>
            </TouchableWithoutFeedback>
          </TabContainer>
        ))}
        <BottomBorder isMyWorry={tabMenu[0].isClicked} />
      </TabWrapper>
      <WorryContent />
    </MyPageWorryListWrapper>
  );
};

const MyPageWorryListWrapper = styled(View)``;

const TabWrapper = styled(View)`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;

  border-bottom-width: 0.2px;
  border-style: solid;
`;

const TabContainer = styled(View)`
  flex: 1;

  border-style: solid;
`;

interface BottomBorderProps {
  isMyWorry: boolean;
}

const BottomBorder = styled(View)<BottomBorderProps>`
  position: absolute;
  bottom: 0;
  left: ${({isMyWorry}) => (isMyWorry ? 0 : 50)}%;
  width: 50%;
  border-bottom-width: 1px;
  border-style: solid;

  transition: all ease-in-out 1s;
`;

const TabText = styled(Text)`
  width: 100%;
  padding: 17px 0px;

  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #000;
`;

export default MyPageWorryListView;
