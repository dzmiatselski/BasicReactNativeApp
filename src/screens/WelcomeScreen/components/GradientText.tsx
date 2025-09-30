import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { TypographyVariant } from '../../../theme/typography';
import { Text } from '../../../components';
import { TextProps } from 'react-native-paper';

type GradientTextProps = TextProps<TypographyVariant> & {
  colors?: string[];
};

export function GradientText({
  children,
  colors = ['#456AEB', '#00D489'],
  style,
  ...rest
}: GradientTextProps) {
  return (
    <MaskedView
      maskElement={
        <View style={styles.maskContainer}>
          <Text {...rest} style={[style, styles.transparentText]}>
            {children}
          </Text>
        </View>
      }
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text {...rest} style={[style, styles.hiddenText]}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  maskContainer: { backgroundColor: 'transparent' },
  transparentText: { backgroundColor: 'transparent' },
  hiddenText: { opacity: 0 },
});
