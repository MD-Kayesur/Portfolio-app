import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

export default function SimpleVideoPlayer() {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = React.useState<AVPlaybackStatus>({} as AVPlaybackStatus);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      <View style={styles.controls}>
        <TouchableOpacity
          onPress={() =>
            status.isPlaying ? 
            videoRef.current?.pauseAsync() : 
            videoRef.current?.playAsync()
          }
        >
          <Ionicons 
            name={status.isPlaying ? "pause-circle" : "play-circle"} 
            size={60} 
            color="#007AFF" 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
});