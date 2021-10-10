import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Component from './style'
export default function App() {
  return (
    <Component.Container>
      <Component.Text>Open up App.tsx to start working on your app!</Component.Text>
      <StatusBar style="auto" />
    </Component.Container>
  );
}
