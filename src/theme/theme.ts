import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
  useTheme,
} from 'react-native-paper';
import { typographyConfig } from './typography';

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: typographyConfig }),
  colors: {
    ...DefaultTheme.colors,
    primary: '#2B57CD',
    textHeading: '#121217',
    textParagraph: '#535371',
    textCaption: '#8E8EAB',
    white: '#FFFFFF',
  },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
