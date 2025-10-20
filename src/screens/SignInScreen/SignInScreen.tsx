import React from 'react';
import { View, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { useAuthContext } from '../../contexts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icons } from '../../assets/icons';
import { Button, FormInput, FormPasswordInput, Text } from '../../components';
import styles from './SignInScreen.styles';
import { HorizontalLine } from './components';
import { Link } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { SignInFormValues } from './types';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

export function SignInScreen({}: Props) {
  const { setIsLoggedIn } = useAuthContext();
  const safeInsets = useSafeAreaInsets();

  const { control, handleSubmit } = useForm<SignInFormValues>({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log('Form data:', data);
    // TODO: navigate to Welcome Final screen
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={[styles.contentContainer, { marginTop: safeInsets.top }]}>
        <Icons.OstanaLogoWithText width={160} height={46} />

        <View style={{ display: 'flex', gap: 20 }}>
          <Text variant="h3" color="heading">
            Sign in
          </Text>
          <Text variant="controlL" color="heading">
            With Existing Account
          </Text>
        </View>

        {/* TODO: add redirect to Forgot password page? */}
        <View style={{ gap: 16 }}>
          <FormInput
            name="email"
            control={control}
            placeholder="name@host.com"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email',
              },
            }}
          />

          <View style={{ gap: 8 }}>
            <FormPasswordInput
              name="password"
              control={control}
              placeholder="Enter password"
              rules={{
                required: 'Password is required',
                minLength: { value: 6, message: 'Min 6 chars' },
              }}
            />
            <View style={{ paddingVertical: 4, alignItems: 'center' }}>
              <Text variant="paragraphS" color="primary">
                Forgot your password?
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.actionsWrapper}>
          <View style={{ gap: 8 }}>
            <Button
              variant="primary"
              size="large"
              onPress={handleSubmit(onSubmit)}
              style={styles.button}
            >
              <Text variant="controlL" color="white">
                Sign In
              </Text>
            </Button>
            <View style={{ paddingVertical: 4, alignItems: 'center' }}>
              <Link screen="Onboarding" params={{}}>
                <Text variant="paragraphS" color="primary">
                  New user? Create an account
                </Text>
              </Link>
            </View>
          </View>

          <View style={styles.orWrapper}>
            <HorizontalLine />
            <Text variant="controlM" color="caption">
              OR
            </Text>
            <HorizontalLine />
          </View>

          <Text variant="controlL" color="heading">
            With Other Accounts
          </Text>

          <View style={{ flexDirection: 'row', gap: 15 }}>
            <View
              style={{
                flexGrow: 1,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(144, 144, 203, 0.05)',
                borderRadius: 40,
              }}
            >
              <Text variant="controlL" color="primary">
                G
              </Text>
            </View>
            <View
              style={{
                flexGrow: 1,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(144, 144, 203, 0.05)',
                borderRadius: 40,
              }}
            >
              <Text variant="controlL" color="heading">
                A
              </Text>
            </View>
            <View
              style={{
                flexGrow: 1,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(144, 144, 203, 0.05)',
                borderRadius: 40,
              }}
            >
              <Text variant="controlL" color="primary">
                F
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
