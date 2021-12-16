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
  },
  boxPurple: {
    flex: 1,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6',
  },
  boxOrange: {
    flex: 1,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
  },
  boxBlue: {
    flex: 2,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28c4d9',
  },
});

export default TaskScreen;
