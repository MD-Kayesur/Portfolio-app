import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppHeader() {
  return (
    <View style={styles.bottomBar}>
      
      {/* Left Arrow */}
      <TouchableOpacity onPress={() => console.log('Back pressed')}>
        <Ionicons name="arrow-back-outline" size={28} color="black" />
      </TouchableOpacity>

      {/* Home Button */}
      <TouchableOpacity onPress={() => console.log('Home pressed')}>
        <Ionicons name="home-outline" size={32} color="black" />
      </TouchableOpacity>

      {/* Right Arrow */}
      <TouchableOpacity onPress={() => console.log('Forward pressed')}>
        <Ionicons name="arrow-forward-outline" size={28} color="black" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',   // sticks to bottom
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    height: 60,
    backgroundColor: '#f5f5f5',

    borderTopWidth: 1,
    borderTopColor: '#ddd',

    elevation: 10,          // Android shadow
    shadowColor: '#000',    // iOS shadow
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
  },
});
