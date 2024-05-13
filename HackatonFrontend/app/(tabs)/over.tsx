import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Text, Button } from 'react-native'

import Header from '@/components/header'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function OverPage({setPage, category, userName, avatarId, score}:
  {
    setPage: React.Dispatch<React.SetStateAction<string>>,
    userName: string,
    avatarId: number,
    category: number,
    score: number,
  }
) {
  return (
    <ThemedView style={styles.page}>
      <Header userName={userName} avatarId={avatarId} setPage={setPage} />
      <View style={styles.body} >
        <ThemedText style={{fontSize: 25}}>Score: {score}</ThemedText>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  body: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    gap: 20,
  },
  header: {
    backgroundColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
  },
  startBtn: {
    width: 150,
    height: 45,
  },
})
