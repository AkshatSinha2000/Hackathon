import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { screen } from './screen';
import Splash from '../screen/splash';
import Home from '../screen/home';
import BotttomNavigation from './bottomtab';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screen.Splash}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screen.BotttomNavigation}
          component={BotttomNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;