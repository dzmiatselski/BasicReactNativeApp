import React, { forwardRef } from 'react';
import { BaseInput, BaseInputProps } from './BaseInput';
import { TextInput } from 'react-native-paper';
import { useAppTheme } from '../../theme';

export const PasswordInput = forwardRef<
  any,
  Omit<BaseInputProps, 'secureTextEntry'>
>((props, ref) => {
  const { colors } = useAppTheme();
  const [hidden, setHidden] = React.useState(true);

  return (
    <BaseInput
      {...props}
      ref={ref}
      secureTextEntry={hidden}
      right={
        <TextInput.Icon
          icon={hidden ? 'eye-off' : 'eye'}
          onPress={() => setHidden(!hidden)}
          color={colors.textCaption}
        />
      }
    />
  );
});

PasswordInput.displayName = 'PasswordInput';
