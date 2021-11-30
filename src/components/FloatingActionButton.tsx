import React from 'react';
import { StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback, View, Text } from 'react-native';

interface FloatingActionButtonProps {
  title: string;
  position?: 'right' | 'left';
  handleOnPress: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ title, position = 'right', handleOnPress }) => {
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity onPress={handleOnPress} activeOpacity={0.7} style={[styles.fabPosition, styles[position]]}>
        <View style={styles.fabView}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.fabPosition, styles[position]]}>
      <TouchableNativeFeedback
        onPress={handleOnPress}
        background={TouchableNativeFeedback.Ripple('#069CC6', false, 30)}
      >
        <View style={styles.fabView}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fabPosition: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fabView: {
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#61dafb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  fabText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default FloatingActionButton;
