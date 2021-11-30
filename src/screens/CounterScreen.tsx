import React, { useState } from 'react';
import FloatingActionButton from '../components/FloatingActionButton';
import { StyleSheet, View, Text } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  const handleOnPressMore = () => setCounter(counter + 1);

  const handleOnPressLess = () => setCounter(counter - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <FloatingActionButton title="+1" handleOnPress={handleOnPressMore} />
      <FloatingActionButton title="-1" position="left" handleOnPress={handleOnPressLess} />
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
});

export default CounterScreen;
