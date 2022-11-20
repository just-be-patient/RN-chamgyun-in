import React from 'react';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styled from 'styled-components';
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
          <TabContainer key={menu.title} isClicked={menu.isClicked}>
            <TouchableWithoutFeedback onPress={() => onClickTabMenu(i)}>
              <TabText>{menu.title}</TabText>
            </TouchableWithoutFeedback>
          </TabContainer>
        ))}
      </TabWrapper>
    </MyPageWorryListWrapper>
  );
};

const MyPageWorryListWrapper = styled(View)``;

const TabWrapper = styled(View)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

interface TabContainerProps {
  isClicked: boolean;
}

const TabContainer = styled(View)<TabContainerProps>`
  flex: 1;

  border-bottom-width: ${({isClicked}) => (isClicked ? '1px' : '0.2px')};
  border-style: solid;
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
