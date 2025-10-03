import React from 'react';
import { BaseInput, BaseInputProps } from './BaseInput';
import { TextInput } from 'react-native-paper';

export function PasswordInput(props: Omit<BaseInputProps, 'secureTextEntry'>) {
  const [hidden, setHidden] = React.useState(true);

  return (
    <BaseInput
      {...props}
      secureTextEntry={hidden}
      right={
        <TextInput.Icon
          icon={hidden ? 'eye-off' : 'eye'}
          onPress={() => setHidden(!hidden)}
          color="#8E8EAB"
        />
      }
    />
  );
}
