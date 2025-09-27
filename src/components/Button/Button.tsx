import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = {
  onPress: () => void;
  color?: 'primary' | 'default';
  size?: 'large' | 'medium' | 'small';
  style?: ViewStyle;
  children: ReactNode;
};

const HEIGHTS = {
  large: 50,
  medium: 34,
  small: 30,
};

export function Button({
  onPress,
  color = 'default',
  size = 'medium',
  style,
  children,
}: ButtonProps) {
  const height = HEIGHTS[size];

  if (color === 'primary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.primaryButton, { height }, style]}
      >
        <LinearGradient
          colors={['#037ED6', '#5232DB']}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[StyleSheet.absoluteFillObject, { height }]}
        />
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.defaultButton, { height }, style]}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderRadius: 40,
    overflow: 'hidden',
  },
  defaultButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(144, 144, 203, 0.05)',
    borderRadius: 40,
    overflow: 'hidden',
    paddingLeft: 24,
    paddingRight: 24,
  },
});
