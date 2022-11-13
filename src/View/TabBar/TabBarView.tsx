import React, {useState} from 'react';
import {Image, View} from 'react-native';
import styled from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import HomeView from '../Home/HomeView';
import MyPageView from '../MyPage/MyPageView';
import Wrapper from '../shared/Wrapper';

const ACTIVE_HOME = '../../../assets/tb_home_active.png';
const HOME = '../../../assets/tb_home.png';
const ACTIVE_MYPAGE = '../../../assets/tb_mypage_active.png';
const MYPAGE = '../../../assets/tb_mypage.png';

type TabBarStackParamList = {
  TabBar: {screen: string};
};

const TabBar = createStackNavigator();

const TabBarView: React.FC = () => {
  const [isHome, setIsHome] = useState(true);

  const navigation = useNavigation<StackNavigationProp<TabBarStackParamList>>();

  const onHomeButtonClick = () => {
    navigation.navigate('TabBar', {screen: 'Home'});
    setIsHome(true);
  };

  const onMyPageButtonClick = () => {
    navigation.navigate('TabBar', {screen: 'MyPage'});
    setIsHome(false);
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
      <TabBarContainer>
        <ImageContainer onPress={onHomeButtonClick}>
          {isHome ? (
            <TabBarImage source={require(ACTIVE_HOME)} />
          ) : (
            <TabBarImage source={require(HOME)} />
          )}
        </ImageContainer>
        <ImageContainer onPress={onMyPageButtonClick}>
          {isHome ? (
            <TabBarImage source={require(MYPAGE)} />
          ) : (
            <TabBarImage source={require(ACTIVE_MYPAGE)} />
          )}
        </ImageContainer>
      </TabBarContainer>
    </TabBarWrapper>
  );
};

const TabBarWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
`;

const NavigationWrapper = styled(View)`
  width: 100%;
  flex: 1;
`;

const TabBarContainer = styled(View)`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  border-top-width: 0.2px;
  border-style: solid;
  border-color: #848488;
`;

const ImageContainer = styled(TouchableWithoutFeedback)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
`;

const TabBarImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

export default TabBarView;
