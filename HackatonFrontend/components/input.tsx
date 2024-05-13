import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MyInput({icon, handleInput, placeholder, width=300, children: value} : {
  children: string,
  handleInput:((text: string) => void),
  icon?: string,
  width?: number,
  placeholder?: string,
}) {
  return (
    <View style={[styles.myInput, {width: width}]}>
      { icon && <Ionicons
        style={styles.myInput_icon}
        name={icon as any}
        size={20}
      /> }
      <TextInput
        style={styles.myInput_input}
        onChangeText={handleInput}
        placeholder={placeholder}
        placeholderTextColor='black'
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  myInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#eee',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  myInput_icon: {
  },

  myInput_input: {
    flex: 1,
  },

});
