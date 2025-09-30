import { MD3Type } from 'react-native-paper/lib/typescript/types';

export type TypographyVariant = 'h1' | 'controlL';

export const typographyConfig: Record<TypographyVariant, MD3Type> = {
  h1: {
    fontFamily: 'PoppinsSemiBold',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
  },
  controlL: {
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.034,
  },
};
