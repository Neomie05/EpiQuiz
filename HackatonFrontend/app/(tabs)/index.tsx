import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import { categoryList } from '@/config'

import Header from '@/components/header';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MyInput from '@/components/input';
import Category from '@/components/category';

export default function HomeScreen({setPage, userName, avatarId, setCategory}:
  {
    setPage: React.Dispatch<React.SetStateAction<string>>,
    userName: string,
    avatarId: number,
    setCategory: React.Dispatch<React.SetStateAction<number>>,
  }
) {
  const [searchText, setSearchText] = useState('')

  return (
    <ThemedView style={styles.page}>
      <Header userName={userName} avatarId={avatarId} setPage={setPage} />
      <View style={styles.body} >
        <MyInput placeholder='Rechercher'handleInput={setSearchText}>{searchText}</MyInput>
        <ScrollView>
          { categoryList.map( ({image, title, description, questions}, id) => (
            <Pressable key={title}
              onPress={() => { if (questions.length > 0) {console.log('questions.length', questions.length); setCategory(id); setPage('invitation')};} }>
              <Category image={image} title={title}
                description={description} nbQuestion={questions.length}
                setPage={setPage}
              />
            </Pressable>
          )) }
        </ScrollView>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingBottom: 200,
  },
  body: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    gap: 20,
  },
});
