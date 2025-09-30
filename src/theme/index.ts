import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import { typographyConfig } from './typography';

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: typographyConfig }),
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};
