import React, { useState } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { useAuthContext } from '../../contexts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '../../assets/images';
import { Icons } from '../../assets/icons';
import { Button, Text } from '../../components';
import { GradientText } from './components';
import styles from './WelcomeScreen.styles';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

const steps = [
  <>
    <Text variant="h1" style={styles.text}>
      Unlock{' '}
    </Text>
    <GradientText variant="h1" style={styles.text}>
      Rewards
    </GradientText>
    <Text variant="h1" style={styles.text}>
      {' '}
      Everywhere
    </Text>
  </>,
  <>
    <GradientText variant="h1" style={styles.text}>
      Earn Points
    </GradientText>
    <Text variant="h1" style={styles.text}>
      {' '}
      as You Shop
    </Text>
  </>,
  <>
    <Text variant="h1" style={styles.text}>
      Find Rewards{' '}
    </Text>
    <GradientText variant="h1" style={styles.text}>
      Near You
    </GradientText>
  </>,
  <>
    <Text variant="h1" style={styles.text}>
      Be the First to{' '}
    </Text>
    <GradientText variant="h1" style={styles.text}>
      Know About Deals
    </GradientText>
  </>,
  <>
    <Text variant="h1" style={styles.text}>
      Ready to{' '}
    </Text>
    <GradientText variant="h1" style={styles.text}>
      Unlock
    </GradientText>
    <Text variant="h1" style={styles.text}>
      {' '}
      Rewards?
    </Text>
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
            <Text variant="controlL" style={styles.buttonText}>
              Get Started
            </Text>
          ) : (
            <Icons.ArrowRight width={24} height={24} />
          )}
        </Button>
      </View>
    </View>
  );
}
