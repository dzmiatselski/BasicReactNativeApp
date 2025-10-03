import React, { forwardRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useAppTheme } from '../../theme';
import { Text } from '../Text';

export type BaseInputProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  label?: string;
  errorMessage?: string;
  helperText?: string;
} & React.ComponentProps<typeof TextInput>;

// TODO: add custom BaseInputLabel component with different text colors based on component state
export const BaseInput = forwardRef<any, BaseInputProps>(
  ({ style, value, errorMessage, helperText, disabled, ...rest }, ref) => {
    const theme = useAppTheme();
    const [focused, setFocused] = useState(false);

    let borderColor = theme.colors.surfaceBorders;
    if (errorMessage) {
      borderColor = theme.colors.error;
    } else if (value) {
      borderColor = theme.colors.borderFilled;
    } else if (focused) {
      borderColor = theme.colors.primary;
    }

    return (
      <>
        <TextInput
          ref={ref}
          mode="flat"
          style={[
            styles.input,
            style,
            { borderColor },
            disabled && styles.disabledInput,
          ]}
          editable={!disabled}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          underlineColorAndroid="transparent"
          selectionColor={theme.colors.primary}
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
          helperText && (
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

const styles = StyleSheet.create({
  input: {
    height: 52,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  disabledInput: {
    opacity: 0.4,
  },
  helperText: {
    paddingLeft: 16,
  },
});
