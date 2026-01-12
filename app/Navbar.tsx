import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type NavbarProps = {
  onLeftPress?: () => void;
  onRightPress?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  onLeftPress,
  onRightPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Left Icon */}
      <Pressable onPress={onLeftPress}>
        <Ionicons name="menu" size={24} color="#fff" />
      </Pressable>

      {/* Search */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#888" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      {/* Right Icon */}
      <Pressable onPress={onRightPress}>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1e293b',
    width: '100%',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 6,
    marginLeft: 6,
    color: '#000',
  },
});

export default Navbar;
