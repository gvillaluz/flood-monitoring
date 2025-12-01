import { Stack } from "expo-router";
import React from 'react';
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import '../../global.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
