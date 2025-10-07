import React from 'react';
import { View, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { useAuthContext } from '../../contexts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icons } from '../../assets/icons';
import { BaseInput, Button, PasswordInput, Text } from '../../components';
import styles from './SignInScreen.styles';
import { HorizontalLine } from './components';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

// TODO: move inline styles to SignInScreen.styles
export function SignInScreen({}: Props) {
  const { setIsLoggedIn } = useAuthContext();
  const safeInsets = useSafeAreaInsets();

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

        {/* TODO: remove */}
        {/* <View style={{ gap: 4 }}>
          <Text variant="controlL">with placeholder</Text>
          <BaseInput placeholder="name@host.com" />

          <Text variant="controlL">with label and helper text</Text>
          <BaseInput label="First Name" helperText="Helper text" />

          <Text variant="controlL">filled with label</Text>
          <BaseInput label="First Name" value="John Doe" />

          <Text variant="controlL">incorrect</Text>
          <BaseInput label="First Name" errorMessage="Error msg text" />

          <Text variant="controlL">disabled</Text>
          <BaseInput label="First Name" disabled />

          <Text variant="controlL">PasswordInput</Text>
          <PasswordInput placeholder="Enter password" />
        </View> */}

        {/* TODO: add form & values management */}
        {/* TODO: add redirect to Forgot password page? */}
        <View style={{ gap: 16 }}>
          <BaseInput placeholder="name@host.com" />
          <View style={{ gap: 8 }}>
            <PasswordInput placeholder="Enter password" />
            <View style={{ paddingVertical: 4, alignItems: 'center' }}>
              <Text variant="paragraphS" color="primary">
                Forgot your password?
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'stretch',
            gap: 24,
          }}
        >
          <View style={{ gap: 8 }}>
            <Button
              variant="primary"
              size="large"
              onPress={() => {
                console.log('navigate to Welcome Final(?) screen');
                setIsLoggedIn(true);
              }}
              style={styles.button}
            >
              <Text variant="controlL" color="white">
                Sign In
              </Text>
            </Button>
            <View style={{ paddingVertical: 4, alignItems: 'center' }}>
              {/* TODO: add redirect to Onboarding/Create an Account page */}
              <Text variant="paragraphS" color="primary">
                New user? Create an account
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 8,
              flexDirection: 'row',
              gap: 24,
              alignItems: 'center',
            }}
          >
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
