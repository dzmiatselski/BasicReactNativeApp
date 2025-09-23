import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '../pages/HomeScreen';
import { OfferDetailsScreen } from '../pages/OfferDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  // TODO: it's possible to pass entire offer object (even if it contains partial data)
  OfferDetails: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="OfferDetails" component={OfferDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
