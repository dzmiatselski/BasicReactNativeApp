import * as React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Card, Text, Icon } from 'react-native-paper';
import { Offer } from '../../types/offers';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface OfferCardProps {
  offer: Offer;
  containerStyle?: StyleProp<ViewStyle>;
}

export const OfferCard = ({ offer, containerStyle }: OfferCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Card
      style={[containerStyle]}
      onPress={() => navigation.navigate('OfferDetails', { id: offer.id })}
    >
      <Card.Cover style={styles.cardCover} source={{ uri: offer.offerLogo }} />
      <Card.Content style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <Text variant="bodyMedium">{offer.businessName}</Text>
          <Text variant="titleLarge">{offer.offerName}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text variant="bodyMedium">Reward</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text variant="titleLarge">{`${offer.reward.value} ${offer.reward.point}`}</Text>
            <Icon source={{ uri: offer.reward.pointLogo }} size={16} />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardCover: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
  cardContent: {
    paddingTop: 12,
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
});
