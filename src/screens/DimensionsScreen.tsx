import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

const DimensionsScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{ ...styles.purple, width: width * 0.2 }} />
        <View style={styles.orange} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 500,
    backgroundColor: 'red',
  },
  purple: {
    backgroundColor: '#5856D6',
    // width: '50%',
    height: 200,
  },
  orange: {
    backgroundColor: '#F0A23B',
    width: '50%',
    height: '20%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default DimensionsScreen;
