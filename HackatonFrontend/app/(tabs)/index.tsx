import React from 'react';
import { Image, Text, StyleSheet, Platform } from 'react-native';
import useDataContext from '@/config'

import Header from '@/components/header';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const context = useDataContext()
  console.log("home page")
  return (
    <ThemedView style={styles.page}>
      <Header context={context} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
