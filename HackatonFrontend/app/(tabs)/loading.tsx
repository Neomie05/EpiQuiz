import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

export default function LoadingPage({setPage}:
  {setPage: React.Dispatch<React.SetStateAction<string>>}
) {
  const { width, height } = Dimensions.get('window')
  const size = Math.min(width, height)

  setTimeout(() => {
    setPage('login')
  }, 3000)

  return (
    <ThemedView style={styles.pageContainer}>
      <Image
        source={require('@/assets/logos/epiquiz_logo2.png')}
        style={{ width: size * 0.5, height: size * 0.15 }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
});
