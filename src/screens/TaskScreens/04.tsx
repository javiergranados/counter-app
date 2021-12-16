import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TaskScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxPurple} />
      <Text style={styles.boxOrange} />
      <Text style={styles.boxBlue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28435b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxPurple: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  boxOrange: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
  },
  boxBlue: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28c4d9',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default TaskScreen;
