import React from 'react';
import { Text, StyleSheet, Pressable, ViewStyle, StyleProp, GestureResponderEvent } from 'react-native';

export default function MyButton({style, onPress, children: value} : {
  children: string, onPress?: ((event: GestureResponderEvent) => void), style?: StyleProp<ViewStyle>
}) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.value}>{value}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52fcf2',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  value: {
    fontWeight: 'bold',
    color: '#000',
  }
});
