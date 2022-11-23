import GameStartScreen from "./screens/GameStartScreen";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [pickedNumber, setpickedNumber] = useState(null);
  const [isGameOver, setisGameOver] = useState(true)
  const [noOfRounds, setnoOfRounds] = useState(0)
  const handleReset = () => {
    setpickedNumber(null)
    setisGameOver(true)
    setnoOfRounds(0)
  } 
  const handlePickedNumber = (num) => {
    setpickedNumber(num)
    setisGameOver(false)
  };
  let screen = <GameStartScreen pickNumber={handlePickedNumber} />;
  if (pickedNumber) {
    screen = <GameScreen targetNumber={pickedNumber} setisGameOver={setisGameOver} setnoOfRounds={setnoOfRounds}/>;
  }
  if(isGameOver && pickedNumber){
    screen = <GameOverScreen noOfRounds={noOfRounds} pickedNumber={pickedNumber} handleReset={handleReset}/>
  }
  return (
    <>
      <LinearGradient colors={["black", "#B83B5E"]} style={styles.rootscreen}>
        <ImageBackground
          style={styles.rootscreen}
          source={require("./assets/background.png")}
          imageStyle={styles.img}
        >
          <SafeAreaView style={styles.rootscreen}>
          {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootscreen: {
    flex: 1,
    // alignItems:'center',
    // justifyContent:'center'
  },
  img: {
    opacity: 0.2,
    resizeMode: "cover",
  },
});
