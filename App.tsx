import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigation/RootNavigator';
import { PaperProvider } from 'react-native-paper';
import { theme } from './src/theme';
import { AuthProvider } from './src/contexts';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootNavigator />
        </PaperProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
