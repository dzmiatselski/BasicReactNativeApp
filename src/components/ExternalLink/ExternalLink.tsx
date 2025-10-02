import React, { ReactNode } from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextProps } from '../Text';
import { useAppTheme } from '../../theme';

type ExternalLinkProps = TextProps & {
  url: string;
  children: ReactNode;
};

export function ExternalLink({
  url,
  children,
  ...textProps
}: ExternalLinkProps) {
  const { colors } = useAppTheme();

  const { style: textStyle, ...restTextProps } = textProps;

  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn("Don't know how to open URI: " + url);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text
        style={[{ color: colors.primary }, styles.link, textStyle]}
        {...restTextProps}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
  },
});
