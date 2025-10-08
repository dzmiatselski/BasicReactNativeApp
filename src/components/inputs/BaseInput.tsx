import React, { forwardRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useAppTheme } from '../../theme';
import { Text } from '../Text';
import { typographyConfig } from '../../theme/typography';
import { BaseInputLabel } from './BaseInputLabel';

export enum InputState {
  Default = 'default',
  Filled = 'filled',
  Focused = 'focused',
  Error = 'error',
}

export type BaseInputProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  label?: string;
  errorMessage?: string;
  helperText?: string;
} & React.ComponentProps<typeof TextInput>;

export const BaseInput = forwardRef<any, BaseInputProps>(
  (
    { style, value, errorMessage, helperText, label, disabled, ...rest },
    ref,
  ) => {
    const theme = useAppTheme();
    const [focused, setFocused] = useState(false);

    let inputState: InputState = InputState.Default;
    if (errorMessage) {
      inputState = InputState.Error;
    } else if (focused) {
      inputState = InputState.Focused;
    } else if (value) {
      inputState = InputState.Filled;
    }

    const borderColorMap: Record<InputState, string> = {
      [InputState.Default]: theme.colors.surfaceBorders,
      [InputState.Focused]: theme.colors.primary,
      [InputState.Filled]: theme.colors.borderFilled,
      [InputState.Error]: theme.colors.error,
    };

    return (
      <>
        <TextInput
          ref={ref}
          mode="flat"
          style={[
            styles.input,
            style,
            { borderColor: borderColorMap[inputState] },
            disabled && styles.disabledInput,
          ]}
          label={
            label && <BaseInputLabel label={label} inputState={inputState} />
          }
          editable={!disabled}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          underlineColorAndroid="transparent"
          selectionColor={`${theme.colors.primary}b3`}
          placeholderTextColor={theme.colors.textCaption}
          contentStyle={[
            styles.internalInput,
            { color: theme.colors[focused ? 'textHeading' : 'textParagraph'] },
          ]}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          error={false}
          {...rest}
        />
        {errorMessage ? (
          <Text
            variant="captionRegular"
            color="error"
            style={styles.helperText}
          >
            {errorMessage}
          </Text>
        ) : (
          !!helperText && (
            <Text
              variant="captionRegular"
              color="paragraph"
              style={styles.helperText}
            >
              {helperText}
            </Text>
          )
        )}
      </>
    );
  },
);

BaseInput.displayName = 'BaseInput';

const styles = StyleSheet.create({
  input: {
    height: 52,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  internalInput: {
    ...typographyConfig.callout,
  },
  disabledInput: {
    opacity: 0.4,
  },
  helperText: {
    paddingLeft: 16,
  },
});
