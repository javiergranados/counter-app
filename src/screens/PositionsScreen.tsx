import React from 'react';
import { View, StyleSheet } from 'react-native';

const PositionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.green} />
      <View style={styles.purple} />
      <View style={styles.orange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 400,
    // height: 400,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  purple: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    // left: 50,
    // top: 100,
    position: 'absolute',
    right: 0,
  },
  orange: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  green: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'green',
    ...StyleSheet.absoluteFillObject,
  },
});

export default PositionsScreen;
