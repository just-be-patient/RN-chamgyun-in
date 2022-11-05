import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DefaultView from './View/Default/DefaultView';
import LoginView from './View/Login/LoginView';
import ProfileView from './View/Profile.tsx/ProfileView';
import RegistWorryView from './View/RegistWorry/RegistWorryView';
import InterestListView from './View/InterestList/InterestListView';
import WorryDetailView from './View/WorryDetail/WorryDetailView';
import TabBarView from './View/TabBar/TabBarView';

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
        <Stack.Screen name="Profile" component={ProfileView} />
        <Stack.Screen name="RegistWorry" component={RegistWorryView} />
        <Stack.Screen name="InterestList" component={InterestListView} />
        <Stack.Screen name="WorryDetail" component={WorryDetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
