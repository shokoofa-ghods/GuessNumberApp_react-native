import React,{ Component, useState } from 'react';
import {StyleSheet, View,Text} from 'react-native';
import Header from './Components/Header';
import GameScreen from './Components/GameScreen';
import StartScreen from './Components/StartScreen'

export default function App() {

  let screen
  const [userInput, setUserInput] = useState()
  const startGameHandler = (finalVal) => {
    setUserInput(finalVal)
  }
  const backButton = () =>{
    setUserInput('')
    screen = <StartScreen  startGameHandler={startGameHandler}/>
  }

  screen = userInput ? screen = 
  <GameScreen userInput={userInput} backButton={backButton} />
  : <StartScreen  startGameHandler={startGameHandler}/>

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {screen}
    </View>
  )  
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //backgroundColor: '#23f3fa',
    alignItems: 'center'
  },
});

