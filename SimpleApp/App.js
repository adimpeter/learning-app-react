import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Konkobilo</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.smallText}>This is a simple small text here...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#c9c9c9',
    fontStyle: 'italic',
    fontSize: 12,
  },
  titleText: {
    fontSize: 30,
    color: '#cf99dc',
    fontWeight: 'bold',
  }
});
