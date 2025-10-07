import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppTheme } from '../../../theme';
import { Step } from './Step';
import { steps } from '../steps';

type StepperProps = {
  currentStep: number;
};

export function Stepper({ currentStep }: StepperProps) {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.surfaceScreen }]}>
      {steps.map((step, idx) => (
        <Step
          key={`${step.title}-step`}
          title={step.title}
          active={currentStep === idx}
          passed={idx < currentStep}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 4,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
  },
});
