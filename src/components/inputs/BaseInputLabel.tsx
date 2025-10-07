import React from 'react';
import { Text } from '../Text';
import { InputState } from './BaseInput';

type BaseInputLabelProps = {
  label: string;
  inputState: InputState;
};

export const BaseInputLabel = function ({
  label,
  inputState,
}: BaseInputLabelProps) {
  const shrinkedLabel =
    inputState === InputState.Focused || inputState === InputState.Filled;

  const labelColor =
    inputState === InputState.Error
      ? 'error'
      : shrinkedLabel
      ? 'paragraph'
      : 'caption';

  return (
    <Text variant="callout" color={labelColor}>
      {label}
    </Text>
  );
};
