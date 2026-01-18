//import liraries
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// create a component
const ReadScreen = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={28} color="black" />
      </Pressable>
      <Text>ReadScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

//make this component available to the app
export default ReadScreen;
