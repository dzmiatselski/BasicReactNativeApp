import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { Text } from 'react-native-paper';
import { useAuthContext } from '../../contexts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '../../assets/images';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

const steps = [
  'Take the Next Step in Your Loyalty Journey',
  'Unforgettable Experiences',
  'Strength in Numbers',
  'Inspiring Local Shopping',
  'Cost-Effective Solutions',
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

  return (
    // TODO: add appropriate styles for different theme modes? android top bar is invisible on light theme
    <View style={[styles.container, { marginTop: safeInsets.top }]}>
      <View style={styles.stepper}>
        {steps.map((_, i) => (
          <View key={i} style={[styles.step, i <= step && styles.activeStep]} />
        ))}
      </View>

      <View style={styles.imageWrapper}>
        <Image
          source={Images.welcomeBg}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.text}>{steps[step]}</Text>

      {/* TODO: use svg ArrowRight */}
      <TouchableOpacity style={styles.button} onPress={nextStep}>
        <Text style={styles.buttonText}>
          {step === steps.length - 1 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#252137',
  },
  stepper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingHorizontal: 24,
    paddingBottom: 36,
  },
  step: {
    width: 60,
    height: 3,
    backgroundColor: '#fff',
    opacity: 0.3,
    borderRadius: 2,
  },
  activeStep: { backgroundColor: '#fff', opacity: 1 },
  imageWrapper: { width: '100%', paddingHorizontal: 40, paddingBottom: 64 },
  logo: { width: '100%' },
  text: { fontSize: 32, fontWeight: 600, textAlign: 'center', color: '#fff' },
  button: {
    position: 'absolute',
    right: 32,
    bottom: 72,
    backgroundColor: '#037ED6',
    padding: 13,
    borderRadius: 40,
  },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '500' },
});
