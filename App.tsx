import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 50,
          textAlign: 'center',
        }}
      >
        Hello World!
      </Text>
    </View>
  );
};

export default App;
