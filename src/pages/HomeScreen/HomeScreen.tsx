import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { mockedOffers } from '../../mocks/offers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OfferCard } from '../../components';
import { Avatar } from 'react-native-paper';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HEADER_HEIGHT = 64;

export function HomeScreen({}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockedOffers}
        renderItem={props => (
          <OfferCard offer={props.item} containerStyle={{ flex: 1 / 2 }} />
        )}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: '#fff',
                filter: 'blur(28px)',
              }}
            />
            <Avatar.Image
              size={40}
              source={{
                uri: 'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
              }}
              style={styles.avatar}
            />
            {/* TODO: add search icon */}
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    // position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 16,
    // paddingHorizontal: 16,
    height: HEADER_HEIGHT,
    width: '100%',
    // backgroundColor: '#fff',
  },
  avatar: { borderRadius: 10 },
  searchIcon: {
    width: 25,
    height: 25,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  list: {
    paddingHorizontal: 16,
    gap: 6,
  },
  row: { justifyContent: 'space-between', gap: 5, maxWidth: '100%' },
});
