import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';

import HomeView from '../Home/HomeView';

const Stack = createStackNavigator();

const TabBarView: React.FC = () => {
  return (
    <TabBarWrapper>
      <NavigationWrapper>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeView} />
        </Stack.Navigator>
      </NavigationWrapper>
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
