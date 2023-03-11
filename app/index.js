import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import menuOptions from '../menuOptions';
import car from '../images/car.png';
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import MenuOption from '../components/MenuOption';
const Controls = () => {
  return (
    <View style={styles.controls}>
      <Entypo name="lock" size={26} color="gray" />
      <MaterialCommunityIcons name="fan" size={26} color="gray" />
      <FontAwesome5 name="bolt" size={26} color="gray" />
      <Ionicons name="car-sport-sharp" size={26} color="gray" />
    </View>
  );
};
const Page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.mainTitle}>My Model</Text>
          <Text style={styles.subTitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={24} color="#ffa8a8" />
      </View>
      <Image source={car} resizeMode="contain" style={styles.image} />

      <FlatList
        ListHeaderComponent={<Controls />}
        pagingEnabled
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MenuOption item={item} />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343a40',
    padding: 24,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffa8a8',
  },
  subTitle: {
    fontSize: 16,
    color: '#ffa8a8',
    fontWeight: '500',
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 300,
    marginVertical: 24,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 24,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  name: {
    fontSize: 16,
    color: '#ffa8a8',
    marginLeft: 16,
  },
  icon: {
    marginLeft: 'auto',
  },
});
export default Page;
