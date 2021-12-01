import React from 'react';
import { SafeAreaView } from 'react-native';
// import CounterScreen from './src/screens/CounterScreen';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';

const App = () => {
  // return <CounterScreen />;
  return (
    <SafeAreaView>
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};

export default App;
