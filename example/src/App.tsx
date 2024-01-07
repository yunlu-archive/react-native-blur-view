import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BlurView from '@dppo/react-native-blur-view';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[{ backgroundColor: 'red' }, styles.box]} />
        <View style={[{ backgroundColor: 'blue' }, styles.box]} />
        <View style={[{ backgroundColor: 'green' }, styles.box]} />
        <View style={[{ backgroundColor: 'yellow' }, styles.box]} />
      </ScrollView>
      <BlurView style={styles.blur} type="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: '100%',
    height: 200,
  },
  blur: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 100,
    width: 200,
    height: 200,
    borderRadius: 50,
    overflow: 'hidden',
  },
});
