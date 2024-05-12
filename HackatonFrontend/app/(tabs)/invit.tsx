import React from 'react';
import { StyleSheet, Clipboard, View, Image, Text } from 'react-native'
import { categoryList } from '@/config';

import Header from '@/components/header'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import MyButton from '@/components/button'

export default function InvitationPage({setPage, category, userName, avatarId}:
  {
    setPage: React.Dispatch<React.SetStateAction<string>>,
    userName: string,
    avatarId: number,
    category: number,
  }
) {
  const url = 'http://localhost:8081/invit?id=15'
  const categoryInfos = categoryList[category]

  async function copyToClipboard() {
    await Clipboard.setString(url);
  };

  return (
    <ThemedView style={styles.page}>
    <Header userName={userName} avatarId={avatarId} setPage={setPage} />
      <View style={styles.body} >
        <Image source={categoryInfos.image}
          style={{width: '100%', height: 200}}
        />
        <ThemedText>{url}</ThemedText>
        <MyButton onPress={copyToClipboard}>Copier le lien</MyButton>
        <MyButton onPress={() => setPage('game')} style={styles.startBtn}>Commencer</MyButton>

      </View>
    </ThemedView>
  );
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
  startBtn: {
    width: 150,
    height: 45,
  },
});
