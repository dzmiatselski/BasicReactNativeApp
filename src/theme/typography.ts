import { MD3Type } from 'react-native-paper/lib/typescript/types';

export type TypographyVariant =
  | 'h1'
  | 'h3'
  | 'subheading'
  | 'controlL'
  | 'controlM'
  | 'footnoteRegular'
  | 'footnoteBold'
  | 'paragraphS'
  | 'captionRegular'
  | 'callout';

export const typographyConfig: Record<TypographyVariant, MD3Type> = {
  h1: {
    fontFamily: 'PoppinsSemiBold',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
  },
  h3: {
    fontFamily: 'PoppinsSemiBold',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: -0.24,
  },
  // TODO: load new Poppins (Regular?) for fontWeight 400
  subheading: {
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.15,
  },
  controlL: {
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.034,
  },
  controlM: {
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  footnoteRegular: {
    fontFamily: 'RobotoRegular',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.195,
  },
  footnoteBold: {
    fontFamily: 'RobotoBold',
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.195,
  },
  paragraphS: {
    fontFamily: 'Inter18ptRegular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
  captionRegular: {
    fontFamily: 'Inter18ptRegular',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: 0.11,
  },
  callout: {
    fontFamily: 'RobotoRegular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.12,
  },
};
