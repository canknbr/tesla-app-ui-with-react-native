import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import menuOptions from '../menuOptions';
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { Link } from 'expo-router';
const MenuOption = ({ item }) => {
  return (
    <Link href={item.name === 'Climate' && '/climate'} asChild>
      <Pressable style={styles.optionRow}>
        <MaterialCommunityIcons name={item.iconName} size={24} color="gray" />
        <Text style={styles.name}>{item.name}</Text>
        <MaterialIcons
          style={styles.icon}
          name="keyboard-arrow-right"
          size={24}
          color="gray"
        />
      </Pressable>
    </Link>
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
export default MenuOption;
