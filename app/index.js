import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
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
});
export default Page;
