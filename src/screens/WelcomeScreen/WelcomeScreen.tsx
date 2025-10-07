import React, { useState } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { useAuthContext } from '../../contexts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '../../assets/images';
import { Icons } from '../../assets/icons';
import { Button, ExternalLink, Text } from '../../components';
import { GradientText } from './components';
import styles from './WelcomeScreen.styles';
import { Modal, Portal } from 'react-native-paper';
import { useModal } from '../../hooks';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

const steps = [
  <>
    <Text variant="h1" color="white">
      Unlock{' '}
    </Text>
    <GradientText variant="h1" color="white">
      Rewards
    </GradientText>
    <Text variant="h1" color="white">
      {' '}
      Everywhere
    </Text>
  </>,
  <>
    <GradientText variant="h1" color="white">
      Earn Points
    </GradientText>
    <Text variant="h1" color="white">
      {' '}
      as You Shop
    </Text>
  </>,
  <>
    <Text variant="h1" color="white">
      Find Rewards{' '}
    </Text>
    <GradientText variant="h1" color="white">
      Near You
    </GradientText>
  </>,
  <>
    <Text variant="h1" color="white">
      Be the First to{' '}
    </Text>
    <GradientText variant="h1" color="white">
      Know About Deals
    </GradientText>
  </>,
  <>
    <Text variant="h1" color="white">
      Ready to{' '}
    </Text>
    <GradientText variant="h1" color="white">
      Unlock
    </GradientText>
    <Text variant="h1" color="white">
      {' '}
      Rewards?
    </Text>
  </>,
];

export function WelcomeScreen({ navigation }: Props) {
  const [step, setStep] = useState(0);
  const { setIsLoggedIn } = useAuthContext();
  const safeInsets = useSafeAreaInsets();
  const { visible, showModal, hideModal } = useModal();

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      showModal();
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
          variant="primary"
          size="large"
          onPress={nextStep}
          style={isLastStep ? styles.button : styles.arrowButton}
        >
          {isLastStep ? (
            <Text variant="controlL" color="white">
              Get Started
            </Text>
          ) : (
            <Icons.ArrowRight width={24} height={24} color="white" />
          )}
        </Button>
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          style={styles.modalContainer}
          contentContainerStyle={styles.modalContentContainer}
        >
          <View style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Icons.OstanaIcon width={80} height={78} />
            <Text variant="h1" color="heading" style={{ textAlign: 'center' }}>
              Turn moments{'\n'}into rewards
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 15,
            }}
          >
            <Button
              variant="primary"
              size="large"
              onPress={() => {
                hideModal();
                navigation.navigate('SignIn');
              }}
              style={styles.button}
            >
              <Text variant="controlL" color="white">
                Sign In
              </Text>
            </Button>

            <Button
              variant="default"
              size="large"
              onPress={() => {
                hideModal();
                navigation.navigate('Onboarding');
              }}
              style={styles.button}
            >
              <Text variant="controlL" color="heading">
                Create Account
              </Text>
            </Button>

            <Text variant="controlM" color="caption">
              OR
            </Text>

            <Button
              variant="default"
              size="large"
              onPress={() => {
                console.log('navigate to Welcome Final(?) screen');
                setIsLoggedIn(true);
              }}
              style={styles.button}
            >
              <Text variant="controlL" color="heading">
                Browse as a Guest
              </Text>
            </Button>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Text variant="footnoteRegular" color="paragraph">
              By signing up, you agree to our{' '}
            </Text>
            <ExternalLink
              variant="footnoteBold"
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              Terms of Use
            </ExternalLink>
            <Text variant="footnoteRegular" color="paragraph">
              {' '}
              and{' '}
            </Text>
            <ExternalLink
              variant="footnoteBold"
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              Privacy Policy
            </ExternalLink>
          </View>
        </Modal>
      </Portal>
    </View>
  );
}
