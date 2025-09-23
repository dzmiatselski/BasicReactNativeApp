import {
  StatusBar,
  // StyleSheet,
  // Text,
  useColorScheme,
  // View,
} from 'react-native';
import {
  SafeAreaProvider,
  // useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigation/RootNavigator';
import { PaperProvider } from 'react-native-paper';
import { theme } from './src/theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigator />
        {/* <AppContent /> */}
      </PaperProvider>
    </SafeAreaProvider>
  );
}

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   console.warn(safeAreaInsets);

//   return (
//     <View style={styles.container}>
//       <Text style={{ paddingTop: safeAreaInsets.top }}>abracadabra0</Text>

//       <Text>abracadabra1</Text>
//       <Text>abracadabra2</Text>
//       <Text>abracadabra3</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
