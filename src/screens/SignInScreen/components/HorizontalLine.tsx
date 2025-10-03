import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppTheme } from '../../../theme';

export function HorizontalLine() {
  const theme = useAppTheme();

  return (
    <View
      style={[{ backgroundColor: theme.colors.surfaceBorders }, styles.line]}
    />
  );
}

const styles = StyleSheet.create({
  line: { flexGrow: 1, height: 1 },
});
