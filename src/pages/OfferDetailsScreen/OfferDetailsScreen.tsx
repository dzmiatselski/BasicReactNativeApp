import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { mockedOffers } from '../../mocks/offers';

type OfferDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OfferDetails'
>;

export const OfferDetailsScreen = ({ route }: OfferDetailsScreenProps) => {
  const { id } = route.params;
  const offer = mockedOffers.find(({ id: offerId }) => offerId === id);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: offer?.offerLogo,
        }}
        style={styles.background}
      >
        {/* Sticky header */}
        <SafeAreaView edges={['top']} style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Reward Detail</Text>
          </View>
        </SafeAreaView>

        {/* Scrollable content */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.contentText}>
            Here goes your details content. Scroll me!
          </Text>
          <Text style={styles.contentText}>More content...</Text>
          <Text style={styles.contentText}>Even more content...</Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1 },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingTop: 80,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  contentText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff',
  },
});
