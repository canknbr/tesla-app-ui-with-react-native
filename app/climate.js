import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import climateImage from '../images/climate.png';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
const Climate = () => {
  const [temp, setTemp] = useState(58);
  const [onOff, setOnOff] = useState(false);
  const router = useRouter();
  const handlePress = () => {
    router.back();
  };
  const plusTemp = () => {
    if (temp >= 90) {
      Alert.alert(
        'Warning',
        'Temperature is too high',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: true }
      );
    } else {
      setTemp(prev => prev + 1);
    }
  };
  const minusTemp = () => {
    if (temp <= 60) {
      Alert.alert(
        'Warning',
        'Temperature is too low',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: true }
      );
    } else {
      setTemp(prev => prev - 1);
    }
  };
  const handleOnOff = () => {
    setOnOff(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Image source={climateImage} style={styles.image} resizeMode="cover" />

      <Pressable onPress={handlePress} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="#ffa8a8" />
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.label}>Interior 74°F - Exterior 66°F</Text>

        <View style={styles.controlsRow}>
          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons
              name="power"
              onPress={handleOnOff}
              size={42}
              color={onOff ? 'white' : '#ffa8a8'}
            />
            <Text
              style={[
                styles.iconButtonText,
                onOff ? { color: 'white' } : { color: '#ffa8a8' },
              ]}
            >
              {onOff ? 'On' : 'Off'}
            </Text>
          </View>

          <View style={styles.temperatureContainer}>
            <Entypo
              name="chevron-left"
              onPress={minusTemp}
              size={30}
              color="gray"
            />
            <Text style={[styles.temperatureText]}>{temp}°</Text>
            <Entypo
              onPress={plusTemp}
              name="chevron-right"
              size={30}
              color="gray"
            />
          </View>

          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons name="car-door" size={42} color=
            {onOff ? 'white' : '#ffa8a8'}
             />
            <Text style={styles.iconButtonText}>Vent</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161818',
  },
  back: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: '#2f3030',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '65%',
  },
  footer: {
    alignItems: 'center',
    padding: 12,
    marginBottom: 20,
    marginTop: 'auto',
  },
  label: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
  },
  controlsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },
  iconButtonContainer: {
    alignItems: 'center',
  },
  iconButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default Climate;
