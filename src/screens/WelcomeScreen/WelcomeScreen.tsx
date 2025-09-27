import React, { useState } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { Text } from 'react-native-paper';
import { useAuthContext } from '../../contexts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '../../assets/images';
import { Icons } from '../../assets/icons';
import { Button } from '../../components';
import { GradientText } from './components';
import styles from './WelcomeScreen.styles';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

const steps = [
  <>
    <Text style={styles.text}>Take the Next Step in Your </Text>
    <GradientText style={styles.text}>Loyalty</GradientText>
    <Text style={styles.text}> Journey</Text>
  </>,
  <>
    <Text style={styles.text}>Unforgettable </Text>
    <GradientText style={styles.text}>Experiences</GradientText>
  </>,
  <>
    <Text style={styles.text}>Strength </Text>
    <Text style={styles.text}>in </Text>
    <GradientText style={styles.text}>Numbers</GradientText>
  </>,
  <>
    <Text style={styles.text}>Inspiring </Text>
    <GradientText style={styles.text}>Local Shopping</GradientText>
  </>,
  <>
    <GradientText style={styles.text}>Cost-Effective</GradientText>
    <Text style={styles.text}> Solutions</Text>
  </>,
];

export function WelcomeScreen({}: Props) {
  const [step, setStep] = useState(0);
  const { setIsLoggedIn } = useAuthContext();
  const safeInsets = useSafeAreaInsets();

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsLoggedIn(true);
    }
  };

  const isLastStep = step === steps.length - 1;

  return (
    <View style={[styles.container, { paddingTop: safeInsets.top }]}>
      <StatusBar barStyle="light-content" />

      <View style={styles.stepper}>
        {steps.map((_, i) => (
          <View
            key={i}
            style={[styles.step, i === step && styles.activeStep]}
          />
        ))}
      </View>

      <View style={styles.imageWrapper}>
        <Image
          source={Images.welcomeBg}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.stepContentWrapper}>{steps[step]}</View>

      <View style={styles.buttonWrapper}>
        <Button
          color="primary"
          size="large"
          onPress={nextStep}
          style={isLastStep ? styles.button : styles.arrowButton}
        >
          {isLastStep ? (
            <Text style={styles.buttonText}>Get Started</Text>
          ) : (
            <Icons.ArrowRight width={24} height={24} />
          )}
        </Button>
      </View>
    </View>
  );
}
