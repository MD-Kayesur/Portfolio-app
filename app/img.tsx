import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import React from "react";
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

const { width } = Dimensions.get("window"); // Get screen width

const ImageScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      router.back();
    } else {
      // If no screen to go back, navigate to home
      router.push("/");
    }
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={handleGoBack}>
      {/* <Pressable style={styles.backButton} onPress={() => router.back()}> */}
        <Ionicons name="arrow-back-outline" size={28} color="black" />
      </Pressable>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: "https://i.ibb.co.com/1JmqkgsR/photo-2026-01-17-14-45-42.jpg",
          }}
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>Your Profile Image</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: 50,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 10,
    borderRadius: 20,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: width * 0.8, // 80% of screen width
    height: width * 0.8, // Square image
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#007AFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 40,
  },
});

export default ImageScreen;
