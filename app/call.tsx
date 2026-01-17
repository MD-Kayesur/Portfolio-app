// app/call.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function CallScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Call</Text>
        <View style={{ width: 28 }} /> {/* Spacer for alignment */}
      </View>

      {/* Call Content */}
      <View style={styles.content}>
        <View style={styles.callIconContainer}>
          <Ionicons name="call" size={100} color="#007AFF" />
        </View>
        
        <Text style={styles.callText}>Call Screen</Text>
        <Text style={styles.callSubText}>This is your call interface</Text>

        {/* Call Buttons */}
        <View style={styles.callButtons}>
          <TouchableOpacity style={styles.callButton} onPress={() => alert('Dialing...')}>
            <Ionicons name="call" size={40} color="white" />
            <Text style={styles.callButtonText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.callButton, styles.endCallButton]} onPress={() => router.back()}>
            <Ionicons name="call" size={40} color="white" />
            <Text style={styles.callButtonText}>End Call</Text>
          </TouchableOpacity>
        </View>

        {/* Dial Pad */}
        <View style={styles.dialPad}>
          <Text style={styles.dialNumber}>+1 234 567 8900</Text>
          <TouchableOpacity style={styles.dialButton}>
            <Text style={styles.dialButtonText}>Dial a Number</Text>
          </TouchableOpacity>
        </View>
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
    paddingVertical: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  callIconContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  callText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  callSubText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  callButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    marginBottom: 40,
  },
  callButton: {
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 50,
    width: 100,
  },
  endCallButton: {
    backgroundColor: '#F44336',
  },
  callButtonText: {
    color: 'white',
    marginTop: 5,
    fontWeight: '600',
  },
  dialPad: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dialNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  dialButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  dialButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});