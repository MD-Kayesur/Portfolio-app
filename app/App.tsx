import React from 'react';
import { View, Image, StyleSheet, Text, FlatList, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import Navbar from './Navbar';
import AppHeader from './AppHeader';

// Dummy app icons
const apps = [
  { id: '1', name: 'Chat', icon: 'https://img.icons8.com/color/96/chat.png' },
  { id: '2', name: 'Camera', icon: 'https://img.icons8.com/color/96/camera.png' },
  { id: '3', name: 'Music', icon: 'https://img.icons8.com/color/96/music.png' },
  { id: '4', name: 'Maps', icon: 'https://img.icons8.com/color/96/map.png' },
  { id: '5', name: 'Phone', icon: 'https://img.icons8.com/color/96/phone.png' },
  { id: '6', name: 'Mail', icon: 'https://img.icons8.com/color/96/email.png' },
  { id: '7', name: 'Browser', icon: 'https://img.icons8.com/color/96/internet.png' },
  { id: '8', name: 'Settings', icon: 'https://img.icons8.com/color/96/settings.png' },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>

          {/* Top Navbar */}
          <Navbar />

          {/* App Icons Grid */}
          <FlatList
            data={apps}
            numColumns={4}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.grid}
            renderItem={({ item }) => (
                <View style={styles.appItem}>
                  <Pressable onPress={() => alert(`${item.name} pressed`)}>
                <Image source={{ uri: item.icon }} style={styles.appIcon} />
                <Text style={styles.appText}>{item.name}</Text>
              </Pressable>
              </View>
            )}
          />

          {/* Bottom Navigation */}
          <AppHeader />

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundImage: 'linear-gradient(to bottom, #e0eafc, #cfdef3)',
    flex: 1,
    backgroundColor: '#fff',
  },
  grid: {
    paddingTop: 400,
    paddingBottom: 8, // space for bottom bar
  },
  appItem: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 15,
  },
  appIcon: {
    width: 60,
    height: 60,
    marginBottom: 6,
  },
  appText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
