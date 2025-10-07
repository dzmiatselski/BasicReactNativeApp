import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseInput, Button, Text } from '../../../components';
import { Icons } from '../../../assets/icons';

type ContactInformationStepProps = {
  setStep: (step: number) => void;
};

export function ContactInformationStep({
  setStep,
}: ContactInformationStepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.stepContentContainer}>
        <BaseInput label="First Name" />
        <BaseInput label="Last Name" />
        <BaseInput label="Email" />
        {/* TODO: add mask functionality */}
        <BaseInput label="Date of Birth" />
        {/* TODO: create Select component */}
        <BaseInput label="Gender" />
      </View>

      <Button
        variant="primary"
        size="large"
        onPress={() => setStep(1)}
        style={styles.button}
      >
        <Text variant="controlL" color="white">
          Next
        </Text>
        <Icons.ArrowRight width={24} height={24} color="white" />
      </Button>
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
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  button: {
    width: '100%',
    gap: 8,
    color: 'white',
  },
});
