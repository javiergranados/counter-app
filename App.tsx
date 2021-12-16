import React from 'react';
import { SafeAreaView } from 'react-native';
// import CounterScreen from './src/screens/CounterScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import DimensionsScreen from './src/screens/DimensionsScreen';
// import PositionsScreen from './src/screens/PositionsScreen';
// import FlexScreen from './src/screens/FlexScreen';
import TaskScreen from './src/screens/TaskScreens/05';

const App = () => {
  // return <CounterScreen />;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28435b' }}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionsScreen /> */}
      {/* <FlexScreen /> */}
      <TaskScreen />
    </SafeAreaView>
  );
};

export default App;
