import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Text, Button } from 'react-native'

import Header from '@/components/header'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import MyButton from '@/components/button'
import { categoryList } from '@/config'

export default function GamePage({setPage, category, userName, avatarId, score, setScore}:
  {
    setPage: React.Dispatch<React.SetStateAction<string>>,
    userName: string,
    avatarId: number,
    category: number,
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>,
  }
) {
  const [starting, setStarting] = useState(0)
  const [unCompt, setUnCompt] = useState(30)
  const [canSubmit, setCanSubmit] = useState(true)
  const [verify, setVerify] = useState(-1)
  const [dataId, setDataId] = useState(0)
  const {questions} = categoryList[category]

  function func() {
    if (starting > 0) {
      setStarting(starting => starting - 1)
      if (starting === 1) {
        setUnCompt(30)
        if (dataId < questions.length - 1)
          setDataId(dataId => dataId + 1)
        else
          setPage('over')
        setCanSubmit(true)
        setVerify(-1)
      }
    } else {
      if (unCompt > 0) {
        setUnCompt(unCompt => unCompt - 1)
      } else {
        setStarting(5)
      }
    }
  }

  useEffect(() => {
    const intervalId = setInterval(func, 1000)
    return () => clearInterval(intervalId)
  }, [starting, unCompt])

  function submitResponse(id: number) {
    if (!canSubmit)
      return
    setVerify(id)
    setCanSubmit(false)
    if (id === questions[dataId].response) {
      setScore(score => score + 50 + unCompt)
    }
    setStarting(5)
  }

  return (
    <ThemedView style={styles.page}>
      <Header userName={userName} avatarId={avatarId} setPage={setPage} />
      <View style={styles.body} >

        <View style={styles.header}>
          <ThemedText style={{fontSize: 21, marginBottom: 22, color: 'black'}}>{questions[dataId].message}</ThemedText>
          <View style={{backgroundColor: '#52fcf2', justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderRadius: 500}}>
            <ThemedText style={{fontSize: 21, color: 'black',}}>{(starting > 0) ? starting : unCompt}</ThemedText>
          </View>
        </View>

        <View style={{width: '80%', gap: 15}}>
          { questions[dataId].questions.map((question, id) => (
            <MyButton key={id}
              style={[
                { width: '100%', backgroundColor: '#0a7ea4', paddingHorizontal: 10, paddingVertical: 25, },
                (verify === -1) ? {} :
                (questions[dataId].response === id) ? { backgroundColor: 'green' } :
                (verify === id) ? { backgroundColor: 'blue' } :
                { backgroundColor: 'red' }
              ]}
              onPress={() => submitResponse(id)}
            >{question}</MyButton>
          )) }
        </View>

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
