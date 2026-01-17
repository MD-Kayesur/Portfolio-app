import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Text, FlatList, Pressable, Animated } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import Navbar from './Navbar';
import AppHeader from './AppHeader';

// Your app icon from the URL you provided
const APP_ICON_URL = 'https://i.ibb.co.com/1JmqkgsR/photo-2026-01-17-14-45-42.jpg';

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
  // Animation values for app icon and name
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    // Start animations when component mounts
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>

          {/* Top Navbar */}
          <Navbar />

          {/* Animated App Header with Icon and Name */}
          <Animated.View 
            style={[
              styles.animatedHeader,
              {
                opacity: fadeAnim,
                transform: [
                  { translateY: slideAnim },
                  { scale: scaleAnim }
                ],
              },
            ]}
          >
            <Image
              source={{ uri: APP_ICON_URL }}
              style={styles.appIcon}
            />
            <Text style={styles.appName}>MD_Kayesur</Text>
          </Animated.View>

          {/* App Icons Grid */}
          <FlatList
            data={apps}
            numColumns={4}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.grid}
            renderItem={({ item }) => (
              <View style={styles.appItem}>
                <Pressable 
                  onPress={() => alert(`${item.name} pressed`)}
                  style={({ pressed }) => [
                    styles.appButton,
                    pressed && styles.appButtonPressed
                  ]}
                >
                  <Image 
                    source={{ uri: item.icon }} 
                    style={styles.dummyAppIcon} 
                  />
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
    flex: 1,
    backgroundColor: '#e0eafc',
  },
  animatedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgba(230, 244, 254, 0.9)',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  appIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 15,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    textShadowColor: 'rgba(0, 122, 255, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },
  grid: {
    paddingTop: 10,
    paddingBottom: 70,
    paddingHorizontal: 10,
  },
  appItem: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    maxWidth: '25%',
  },
  appButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  appButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  dummyAppIcon: {
    width: 60,
    height: 60,
    marginBottom: 8,
    borderRadius: 15,
  },
  appText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
    fontWeight: '500',
  },
});


 