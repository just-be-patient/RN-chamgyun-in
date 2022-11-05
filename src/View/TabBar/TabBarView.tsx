import React from 'react';
import {Button, View} from 'react-native';
import styled from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import HomeView from '../Home/HomeView';
import MyPageView from '../MyPage/MyPageView';

type TabBarStackParamList = {
  TabBar: {screen: string};
};

const TabBar = createStackNavigator();

const TabBarView: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<TabBarStackParamList>>();

  const onHomeButtonClick = () => {
    navigation.navigate('TabBar', {screen: 'Home'});
  };

  const onMyPageButtonClick = () => {
    navigation.navigate('TabBar', {screen: 'MyPage'});
  };

  return (
    <TabBarWrapper>
      <NavigationWrapper>
        <TabBar.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <TabBar.Screen name="Home" component={HomeView} />
          <TabBar.Screen name="MyPage" component={MyPageView} />
        </TabBar.Navigator>
      </NavigationWrapper>
      <Button title="홈" onPress={onHomeButtonClick} />
      <Button title="마이페이지" onPress={onMyPageButtonClick} />
    </TabBarWrapper>
  );
};

const TabBarWrapper = styled(View)`
  width: 100%;
  height: 100%;
`;

const NavigationWrapper = styled(View)`
  width: 100%;
  height: 80%;
`;

export default TabBarView;
