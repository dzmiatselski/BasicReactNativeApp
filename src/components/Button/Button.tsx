import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = {
  onPress: () => void;
  variant?: 'primary' | 'outlined' | 'default';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
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
  variant = 'default',
  size = 'medium',
  disabled,
  style,
  children,
}: ButtonProps) {
  const height = HEIGHTS[size];

  // TODO: fix disabled primary button white text color mismatch(?)
  if (variant === 'primary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        disabled={disabled}
        style={[
          styles.primaryButton,
          { height },
          style,
          disabled && styles.disabled,
        ]}
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
      disabled={disabled}
      style={[
        variant === 'outlined' ? styles.outlinedButton : styles.defaultButton,
        { height },
        style,
        disabled && styles.disabled,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderRadius: 40,
    overflow: 'hidden',
  },
  outlinedButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#EBEBF5',
    borderRadius: 40,
    overflow: 'hidden',
    paddingHorizontal: 24,
  },
  defaultButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(144, 144, 203, 0.05)',
    borderRadius: 40,
    overflow: 'hidden',
    paddingHorizontal: 24,
  },
  disabled: {
    opacity: 0.3,
  },
});
