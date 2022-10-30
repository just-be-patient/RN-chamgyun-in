import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DefaultView from './View/Default/DefaultView';
import LoginView from './View/Login/LoginView';
import TabBarView from './View/shared/TabBarView';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Default"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen
          name="Default"
          component={DefaultView}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="TabBar"
          component={TabBarView}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
