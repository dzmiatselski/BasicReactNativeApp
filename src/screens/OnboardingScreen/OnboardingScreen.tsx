import React, { useState } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { useAuthContext } from '../../contexts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icons } from '../../assets/icons';
import { Text } from '../../components';
import { ContactInformationStep, PhoneNumberStep, Stepper } from './components';
import { FormProvider, useForm } from 'react-hook-form';
import { OnboardingFormValues } from './types';
import { defaultValues } from './defaultValues';

type Props = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;

export function OnboardingScreen({}: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  const { setIsLoggedIn } = useAuthContext();
  const safeInsets = useSafeAreaInsets();

  const methods = useForm<OnboardingFormValues>({
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: OnboardingFormValues) => {
    console.log('Form data:', data);
    // TODO: navigate to Welcome Final screen
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={[styles.contentContainer, { marginTop: safeInsets.top }]}>
        <Icons.OstanaLogoWithText width={160} height={46} />

        <View style={{ flex: 1, display: 'flex', gap: 32 }}>
          <Text variant="h3" color="heading">
            Create an Account
          </Text>

          <View style={{ flex: 1, display: 'flex', gap: 24 }}>
            <Stepper currentStep={currentStep} />

            <View style={{ flex: 1, display: 'flex', gap: 32 }}>
              <FormProvider {...methods}>
                {currentStep === 0 && (
                  <ContactInformationStep setStep={setCurrentStep} />
                )}
                {currentStep === 1 && (
                  <PhoneNumberStep
                    setStep={setCurrentStep}
                    onSubmit={handleSubmit(onSubmit)}
                  />
                )}
              </FormProvider>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#252137',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 40,
  },
});
