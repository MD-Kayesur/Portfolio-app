// app/LoadingScreen.tsx
import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
export default function LoadingScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Scale up
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();

    // Continuous rotation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      {/* Animated App Icon */}
      <Animated.View
        style={[
          styles.iconContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        {/* <Image
          source={{ uri: 'https://i.ibb.co.com/1JmqkgsR/photo-2026-01-17-14-45-42.jpg' }}
          style={styles.icon}
        /> */}
        {/* Rotating Border */}
        <Animated.View
          style={[styles.rotatingBorder, { transform: [{ rotate }] }]}
        />
      </Animated.View>

      {/* App Name with Typewriter Effect */}
      <Animated.Text style={[styles.appName, { opacity: fadeAnim }]}>
        MD_Kayesur
      </Animated.Text>

      {/* Loading Text with Bounce */}
      <Animated.View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading</Text>
        <Animated.Text style={[styles.dot, { opacity: fadeAnim }]}>
          .
        </Animated.Text>
        <Animated.Text style={[styles.dot, styles.dot2]}>.</Animated.Text>
        <Animated.Text style={[styles.dot, styles.dot3]}>.</Animated.Text>
      </Animated.View>

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6F4FE",
    padding: 20,
  },
  iconContainer: {
    position: "relative",
    marginBottom: 30,
  },
  icon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#007AFF",
    zIndex: 1,
  },
  rotatingBorder: {
    position: "absolute",
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderWidth: 3,
    borderColor: "#007AFF",
    borderTopColor: "transparent",
    borderRadius: 70,
  },
  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 20,
    textShadowColor: "rgba(0, 122, 255, 0.2)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  loadingText: {
    fontSize: 18,
    color: "#333",
  },
  dot: {
    fontSize: 32,
    color: "#007AFF",
    marginLeft: 2,
  },
  dot2: {
    opacity: 0.6,
  },
  dot3: {
    opacity: 0.3,
  },
  progressContainer: {
    width: "70%",
    height: 6,
    backgroundColor: "rgba(0, 122, 255, 0.2)",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 3,
  },
});
