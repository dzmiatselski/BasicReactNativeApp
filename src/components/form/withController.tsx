import React from 'react';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

export function withController<
  P extends {
    value?: any;
    onChangeText?: (val: any) => void;
    errorMessage?: string;
  },
>(InputComponent: React.ComponentType<P>) {
  return function ControlledInput<T extends FieldValues>({
    name,
    control,
    rules,
    ...rest
  }: Omit<P, 'value' | 'onChangeText' | 'errorMessage'> & {
    name: Path<T>;
    control: Control<T>;
    rules?: RegisterOptions<T, Path<T>>;
  }) {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error },
        }) => (
          <InputComponent
            {...(rest as any)}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            errorMessage={error?.message}
          />
        )}
      />
    );
  };
}
