import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseInput, Button, Text } from '../../../components';
import { Icons } from '../../../assets/icons';
import { useAppTheme } from '../../../theme';

type PhoneNumberStepProps = {
  setStep: (step: number) => void;
};

export function PhoneNumberStep({ setStep }: PhoneNumberStepProps) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.stepContentContainer,
          { backgroundColor: colors.surfaceScreen },
        ]}
      >
        <Text variant="subheading" color="caption">
          To complete registration, the phone number must be verified.
        </Text>
        <View style={styles.formFieldsWrapper}>
          {/* TODO: add mask functionality */}
          <BaseInput placeholder="Phone number" />
          {/* TODO: add checkbox */}
        </View>
        <Button
          variant="primary"
          size="large"
          // TODO: send verification code
          onPress={() => {}}
          style={styles.verificationCodeButton}
          disabled
        >
          <Text variant="controlL" color="white">
            Send Verification Code
          </Text>
        </Button>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          variant="outlined"
          size="large"
          onPress={() => setStep(0)}
          style={styles.button}
        >
          <Icons.ArrowRight
            width={24}
            height={24}
            color={colors.textCaption}
            transform="rotate(180)"
          />
          <Text variant="controlL" color="heading">
            Back
          </Text>
        </Button>
        <Button
          variant="primary"
          size="large"
          // TODO: submit form
          onPress={() => {}}
          style={styles.button}
        >
          <Text variant="controlL" color="white">
            Done
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  },
  stepContentContainer: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    borderRadius: 12,
  },
  formFieldsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  verificationCodeButton: {
    width: '100%',
  },
  buttonsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 48,
  },
  button: {
    flexGrow: 1,
    flexBasis: 0,
    gap: 8,
  },
});
