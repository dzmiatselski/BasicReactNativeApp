import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
// import { useAuthContext } from '../../contexts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icons } from '../../assets/icons';
import { Text } from '../../components';
import styles from './OnboardingScreen.styles';
import { ContactInformationStep, PhoneNumberStep, Stepper } from './components';

type Props = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;

// TODO: move inline styles to OnboardingScreen.styles
export function OnboardingScreen({}: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  // const { setIsLoggedIn } = useAuthContext();
  const safeInsets = useSafeAreaInsets();

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
              {currentStep === 0 && (
                <ContactInformationStep setStep={setCurrentStep} />
              )}
              {currentStep === 1 && (
                <PhoneNumberStep setStep={setCurrentStep} />
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
