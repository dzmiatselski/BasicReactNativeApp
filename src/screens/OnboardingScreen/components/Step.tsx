import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../../components';
import { Icons } from '../../../assets/icons';
import { useAppTheme } from '../../../theme';

type StepProps = {
  title: string;
  active: boolean;
  passed: boolean;
};

export function Step({ title, active, passed }: StepProps) {
  const { colors } = useAppTheme();
  let iconFill = colors.textCaption;
  if (active) {
    iconFill = colors.primary;
  } else if (passed) {
    iconFill = colors.primaryGreen;
  }

  return (
    <View style={styles.container}>
      <Icons.CheckFilled
        width={24}
        height={24}
        fill={iconFill}
        color={iconFill}
      />
      <Text
        variant="footnoteRegular"
        color={active || passed ? 'heading' : 'caption'}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
