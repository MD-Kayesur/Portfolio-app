import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import Navbar from './Navbar';
import AppHeader from './AppHeader';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>

          {/* Top Navbar */}
          <Navbar
            onLeftPress={() => console.log('Menu')}
            onRightPress={() => console.log('Notification')}
          />

          {/* Page Content */}
          <View style={styles.content}>

            {/* Image */}
            <Image
              style={styles.image}
              source={require('../assets/images/10a4b707-2606-4d93-957e-a662fa5df632.jpg')}
            />

            {/* Text Content */}
            <Text style={styles.title}>Welcome to My App</Text>

            <Text style={styles.description}>
              This is a simple React Native page with a top navigation bar,
              a bottom navigation header, an image, and some text content
              in the center of the screen.
            </Text>

          </View>

          {/* Bottom Header */}
          <AppHeader />

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});
