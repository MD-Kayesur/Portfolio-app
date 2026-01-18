import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Alert 
} from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Video } from 'expo-av';

export default function VideoRecordScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [recording, setRecording] = useState(false);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to use the camera
        </Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={requestPermission}
        >
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const startRecording = async () => {
    if (cameraRef.current) {
      try {
        setRecording(true);
        const video = await cameraRef.current.recordAsync({
          maxDuration: 60, // Maximum 60 seconds
          quality: '1080p',
        });
        setVideoUri(video.uri);
        Alert.alert('Success', 'Video recorded successfully!');
      } catch (error) {
        console.error('Failed to record video:', error);
        Alert.alert('Error', 'Failed to record video');
      } finally {
        setRecording(false);
      }
    }
  };

  const stopRecording = () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording();
      setRecording(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Record Video</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Camera Preview */}
      <View style={styles.cameraContainer}>
        <CameraView
          ref={cameraRef}
          style={styles.camera}
          facing="back"
          mode="video"
        />
      </View>

      {/* Record Button */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.recordButton, recording && styles.recordingButton]}
          onPress={recording ? stopRecording : startRecording}
        >
          {recording ? (
            <View style={styles.stopIcon} />
          ) : (
            <Ionicons name="videocam" size={40} color="white" />
          )}
        </TouchableOpacity>
      </View>

      {/* Preview Recorded Video */}
      {videoUri && (
        <View style={styles.previewContainer}>
          <Text style={styles.previewTitle}>Recorded Video:</Text>
          <Video
            source={{ uri: videoUri }}
            style={styles.videoPreview}
            useNativeControls
            resizeMode="contain"
            isLooping
          />
          <View style={styles.previewButtons}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => setVideoUri(null)}
            >
              <Ionicons name="trash" size={24} color="white" />
              <Text style={styles.actionButtonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.saveButton]}
              onPress={() => Alert.alert('Save', 'Video saved to gallery!')}
            >
              <Ionicons name="save" size={24} color="white" />
              <Text style={styles.actionButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Instructions */}
      <View style={styles.instructions}>
        <Ionicons name="information-circle" size={20} color="#666" />
        <Text style={styles.instructionText}>
          {recording ? 'Recording... Tap to stop' : 'Tap to start recording (max 60 seconds)'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cameraContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  recordingButton: {
    backgroundColor: '#4CAF50',
  },
  stopIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  previewContainer: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    margin: 20,
    borderRadius: 15,
  },
  previewTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoPreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  previewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF3B30',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#007AFF',
  },
  actionButtonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  instructions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  instructionText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 14,
  },
});