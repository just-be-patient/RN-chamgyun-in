import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DefaultView from './View/Default/DefaultView';
import LoginView from './View/Login/LoginView';
import RegistWorryView from './View/RegistWorry/RegistWorryView';
import TabBarView from './View/shared/TabBarView';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Default"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Default" component={DefaultView} />
        <Stack.Screen name="TabBar" component={TabBarView} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="RegistWorry" component={RegistWorryView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
