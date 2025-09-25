import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types';
import { HomeScreen } from '../screens/HomeScreen';
import { OfferDetailsScreen } from '../screens/OfferDetailsScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="OfferDetails" component={OfferDetailsScreen} />
    </Stack.Navigator>
  );
}
