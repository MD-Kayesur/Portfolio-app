import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Alert 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Video } from 'expo-av';

export default function VideoPickerScreen() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const pickVideo = async () => {
    // Request permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Please allow access to your media library');
      return;
    }

    // Pick video
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
      videoMaxDuration: 60,
    });

    if (!result.canceled) {
      setSelectedVideo(result.assets[0].uri);
    }
  };

  const recordVideo = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Please allow camera access');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
      videoMaxDuration: 60,
    });

    if (!result.canceled) {
      setSelectedVideo(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Video</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.pickButton} onPress={pickVideo}>
          <Ionicons name="folder-open" size={40} color="#007AFF" />
          <Text style={styles.buttonText}>Pick from Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.recordButton} onPress={recordVideo}>
          <Ionicons name="videocam" size={40} color="#FF3B30" />
          <Text style={styles.buttonText}>Record Video</Text>
        </TouchableOpacity>
      </View>

      {/* Video Preview */}
      {selectedVideo && (
        <View style={styles.previewContainer}>
          <Text style={styles.previewTitle}>Selected Video:</Text>
          <Video
            source={{ uri: selectedVideo }}
            style={styles.videoPreview}
            useNativeControls
            resizeMode="contain"
            isLooping
          />
          <View style={styles.previewInfo}>
            <Text style={styles.infoText}>Video Selected ✓</Text>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => setSelectedVideo(null)}
            >
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Instructions */}
      <View style={styles.instructions}>
        <Text style={styles.instructionText}>
          Select a video from your gallery or record a new one
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 30,
  },
  pickButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  recordButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  previewContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  videoPreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  previewInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
  },
  clearButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  clearButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  instructions: {
    alignItems: 'center',
    padding: 30,
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});