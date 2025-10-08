import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, FormInput, Text } from '../../../components';
import { Icons } from '../../../assets/icons';
import { useFormContext } from 'react-hook-form';
import { OnboardingFormValues } from '../types';

type ContactInformationStepProps = {
  setStep: (step: number) => void;
};

export function ContactInformationStep({
  setStep,
}: ContactInformationStepProps) {
  const { control, trigger } = useFormContext<OnboardingFormValues>();

  const handleNextClick = async () => {
    const isValid = await trigger([
      'firstName',
      'lastName',
      'email',
      'dateOfBirth',
      'gender',
    ]);
    if (isValid) {
      setStep(1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepContentContainer}>
        <FormInput
          name="firstName"
          control={control}
          label="First Name"
          rules={{ required: 'First Name is required' }}
        />
        <FormInput
          name="lastName"
          control={control}
          label="Last Name"
          rules={{ required: 'Last Name is required' }}
        />
        <FormInput
          name="email"
          control={control}
          label="Email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email',
            },
          }}
        />
        {/* TODO: add mask functionality */}
        <FormInput
          name="dateOfBirth"
          control={control}
          label="Date of Birth"
          rules={{ required: 'Date of Birth is required' }}
        />
        {/* TODO: create Select component */}
        <FormInput
          name="gender"
          control={control}
          label="Gender"
          rules={{ required: 'Gender is required' }}
        />
      </View>

      <Button
        variant="primary"
        size="large"
        onPress={handleNextClick}
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
