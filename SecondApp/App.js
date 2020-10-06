/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';

import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import InGameScreen from './Screens/InGameScreen';
import GameOverScreen from './Screens/GameOverScreen';



const App: () => React$Node = () => {

  const[userNumber, setUserNumber] = useState();
  const[guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (noOfGuesses) => {
    setGuessRounds(noOfGuesses);
  };

  const restartGameHandler = () => {
    content = <StartGameScreen onStartGame = {startGameHandler}/>;
    setGuessRounds(0);
    setUserNumber(0);
  };

  let content = <StartGameScreen onStartGame = {startGameHandler} />;

  if(userNumber && guessRounds == 0){
    content = <InGameScreen userChoice = {userNumber} onGameOver = {gameOverHandler} />;
  } else if(guessRounds>0){
    content = <GameOverScreen setGameOver = {restartGameHandler} guessCount = {guessRounds} />
  }

  return (
    <SafeAreaView style = {styles.container}>
        <Header title = "Guess-Game"/>
        {content}
    </SafeAreaView>
           
  );
};

const styles = StyleSheet.create({
      container: {
        flex: 1,
      }
});

export default App;
