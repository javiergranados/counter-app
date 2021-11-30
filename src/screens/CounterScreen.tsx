import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  const handleOnPressMore = () => setCounter(counter + 1);

  const handleOnPressLess = () => setCounter(counter - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <TouchableOpacity style={styles.buttonMore} onPress={handleOnPressMore}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLess} onPress={handleOnPressLess}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15,
  },
  buttonMore: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  buttonLess: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  button: {
    backgroundColor: '#61dafb',
    borderRadius: 100,
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default CounterScreen;
