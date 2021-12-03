import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    padding: 60,
    marginHorizontal: 20,
    fontSize: 25,
    // width: 250,
    borderWidth: 10,
    // backgroundColor: 'red',
  },
});

export default BoxObjectModelScreen;
