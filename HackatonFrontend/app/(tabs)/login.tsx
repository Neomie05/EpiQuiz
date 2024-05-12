import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, Platform, TextInput, Button } from 'react-native';
import useDataContext from '@/config'

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MyInput } from '@/components/input';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function LoginPage() {
  const context = useDataContext()
  const [userId, setUserId] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  function handleUserId(value: string) {
    setUserId(value)
  }

  return (
    <ThemedView style={styles.page}>
      <Ionicons name='person-outline' size={180} color={'red'} />
      <MyInput icon='person-outline'
        placeholder='Pseudo'
        handleInput={handleUserId}
      >{userId}</MyInput>
      <MyInput icon='lock-closed-outline'
        placeholder='Mot de passe'
        handleInput={handleUserId}
      >{userId}</MyInput>
      <Text>{errorMsg}</Text>
      <View style={styles.buttons}>
        <Button onPress={() => {
          setErrorMsg('ok')
          context.setPage('')
        }} title="S'inscrire'" />
        <Button onPress={() => {
          context.setPage('home')
        }} title="Se connecter" />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    gap: 15,
  },
});
