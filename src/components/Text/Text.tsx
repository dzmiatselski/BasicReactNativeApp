import { customText } from 'react-native-paper';
import { TypographyVariant } from '../../theme/typography';
import { useAppTheme } from '../../theme';

export type TextColorVariant =
  | 'primary'
  | 'heading'
  | 'paragraph'
  | 'caption'
  | 'white';

const RNPText = customText<TypographyVariant>();

export type TextProps = React.ComponentProps<typeof RNPText> & {
  color?: TextColorVariant;
};

export function Text({ color, style, ...props }: TextProps) {
  const theme = useAppTheme();

  const colorMap: Record<TextColorVariant, string> = {
    primary: theme.colors.primary,
    heading: theme.colors.textHeading,
    paragraph: theme.colors.textParagraph,
    caption: theme.colors.textCaption,
    white: theme.colors.white,
  };

  return (
    <RNPText {...props} style={[style, color && { color: colorMap[color] }]} />
  );
}
