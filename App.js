import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen'
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font"


export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [numberOfRounds, setNumberOfRounds] = useState(0)

  const [fontsLoaded]= useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const startNewGameHandler = () => {
    setUserNumber(null)
    setNumberOfRounds(0)
  }

  const pickedNumberHandler = (pickedNumber) => {
    console.log("reached here")
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setNumberOfRounds(numberOfRounds)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={numberOfRounds} onStartNewGame={startNewGameHandler} />
  }

  

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
