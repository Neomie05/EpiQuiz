import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, Platform, TextInput, Pressable } from 'react-native'
import { avatars } from '@/config'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import Ionicons from '@expo/vector-icons/Ionicons'
import MyInput from '@/components/input'
import MyButton from '@/components/button'

export default function LoginPage({setPage, userName, setUserName, avatarId, setAvatarId}:
  {
    setPage: React.Dispatch<React.SetStateAction<string>>,
    userName: string,
    setUserName: React.Dispatch<React.SetStateAction<string>>,
    avatarId: number,
    setAvatarId: React.Dispatch<React.SetStateAction<number>>,
  }
) {
  const [errorMsg, setErrorMsg] = useState('')

  function handleUserName(value: string) {
    setUserName(value)
  }

  function login() {
    setPage('home')
  }

  return (
    <ThemedView style={styles.page}>
      <Image
        source={avatars[avatarId]}
        style={{width: 150, height: 150}}
      />

      <View style={styles.avatars}>
        { avatars.map((avatar, id) => (
          <Pressable key={id} onPress={() => setAvatarId(id)}>
            <Image source={avatar}
              style={[styles.avatar, (avatarId === id) ? styles.avatarSelected : {}]}
            />
          </Pressable>
        )) }
      </View>

      <MyInput icon='person-outline'
        placeholder='Pseudo'
        handleInput={handleUserName}
      >{userName}</MyInput>

      { errorMsg && <Text>{errorMsg}</Text> }

      <MyButton onPress={login}>Se connecter</MyButton>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    paddingTop: 150,
    // justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    flex: 1,
  },

  avatars: {
    flexDirection: 'row',
    gap: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatarSelected: {
    borderWidth: 5,
    borderColor: '#52fcf2',
  },

  buttons: {
    flexDirection: 'row',
    gap: 15,
  },
});
