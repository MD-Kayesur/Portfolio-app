
import { 
  Pressable, 
  Text, 
  View, 
  StatusBar 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { useState } from "react";
import SafeScreen from "@/components/SafeScreen";
import tw from 'twrnc';

export default function LandingPage() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  const handleGetStarted = () => {
    if (isSignedIn) {
      // If signed in, you can redirect to a home/dashboard screen
      // router.push("/home");
      return;
    } else {
      router.push("/(auth)/sign-in");
    }
  };

  return (
    <SafeScreen>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`flex-1 items-center justify-center px-6`}>
          
          <View style={tw`mb-8`}>
            <View style={tw`w-24 h-24 rounded-full bg-red-100 items-center justify-center mx-auto mb-4`}>
              <Ionicons name="fitness" size={48} color="#dc2626" />
            </View>
          </View>

          <Text style={tw`text-3xl font-bold text-gray-900 text-center mb-2`}>
            Welcome to Portfolio App
          </Text>
          
          <Text style={tw`text-2xl font-bold text-red-600 text-center mb-6`}>
            MD_Kayesur
          </Text>

          <Text style={tw`text-base text-gray-600 text-center leading-relaxed mb-10 max-w-md`}>
            Start your journey with us. Your portfolio app with authentication, Redux state management, and beautiful UI.
          </Text>

          <Pressable 
            onPress={handleGetStarted}
            style={({ pressed }) => [
              tw`bg-red-600 px-10 py-4 rounded-full shadow-lg`,
              pressed && tw`bg-red-700 opacity-90`
            ]}
          >
            <Text style={tw`text-white font-bold text-lg`}>
              {isSignedIn ? 'You are signed in!' : 'GET STARTED'}
            </Text>
          </Pressable>

          <View style={tw`mt-12 p-4 bg-gray-50 rounded-xl max-w-md`}>
            <Text style={tw`text-gray-600 text-sm text-center`}>
              💡 Sign in to access all features
            </Text>
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}
