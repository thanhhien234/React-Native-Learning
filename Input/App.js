import React, { useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, TextInput, Text, Switch } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      // secureTextEntry={true}   //for password
      // keyboardType='numeric'    // for number
      // autoCapitalize='words'    // for capitalizing first letter of each word
      />
      <Text>Input name: {name}</Text>


      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode(!isDarkMode)}
        trackColor={
          { false: '#767577', true: '#81b0ff' }
        }
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
