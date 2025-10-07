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
    primaryGreen: '#00D489',
    textHeading: '#121217',
    textParagraph: '#535371',
    textCaption: '#8E8EAB',
    white: '#FFFFFF',
    error: '#F44040',

    surfaceBorders: '#EBEBF5',
    surfaceScreen: '#FAFAFE',
    borderFilled: '#D7D7EC',
  },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
