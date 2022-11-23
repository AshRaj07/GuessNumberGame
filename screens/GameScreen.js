import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, FlatList, SafeAreaView } from "react-native";
import GuessLogItem from "../components/game/GuessLogItem";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const generateRandomNumber = (min, max, exclude) => {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (exclude == randomNumber) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};
let min = 1;
let max = 100;
let noOfRounds = 0;
const GameScreen = ({ targetNumber, setisGameOver, setnoOfRounds }) => {
  const [initialGuess, setinitialGuess] = useState(
    generateRandomNumber(1, 100, targetNumber)
  );
  const [currentGuess, setcurrentGuess] = useState(initialGuess);
  const [log, setlog] = useState([initialGuess])
  useEffect(() => {
    if (currentGuess == targetNumber) {
      setnoOfRounds(noOfRounds);
      setisGameOver(true);
      min = 1;
      max = 100;
      noOfRounds=0
    }
  }, [currentGuess, targetNumber, setisGameOver]);
  const handleGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < targetNumber) ||
      (direction === "greater" && currentGuess > targetNumber)
    ) {
      Alert.alert(
        "You are lying",
        "Kindly enter inc or dec within correct range",
        [{ text: "Ok no more lies", style: "destructive" }]
      );
      return;
    }
    if (direction === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }
    noOfRounds++;
    const rndnum = generateRandomNumber(min, max, currentGuess);
    setcurrentGuess(rndnum);
    setlog((prev) => [...prev,rndnum])
  };
  console.log(min + " " + max + " " + currentGuess + " " + targetNumber);
  console.log(log);
  return (
    <View style={styles.screen}>
      <Title>Oppoents's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.logic}>
        <Text style={styles.logictxt}>Higher or lower ?</Text>
        <View style={{ flexDirection: "row" }}>
          <View>
            <PrimaryButton onPress={handleGuess.bind(this, "greater")}>
              👍🏻
            </PrimaryButton>
          </View>
          <View>
            <PrimaryButton onPress={handleGuess.bind(this, "lower")}>
              👎🏻
            </PrimaryButton>
          </View>
        </View>
      </View>
      <SafeAreaView style={styles.log}>
        <Text style={styles.logtitle}>Log History</Text>
        <FlatList 
        data={log}
        renderItem={(itemData)=>{
            return (
              <GuessLogItem guessNumber={itemData.item} roundNumber={itemData.index+1} />
            )
          }}
          keyExtractor={item => item}
          />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginVertical: "15%",
    // justifyContent:'center',
    alignItems: "center",
  },
  logic: {
    backgroundColor: "#7D0633",
    width: 350,
    padding: 20,
    alignItems: "center",
    borderRadius: 25,
    elevation: 10,
  },
  logictxt: {
    fontSize: 30,
    padding: 5,
    fontWeight: "600",
  },
  log:{
    width:"100%",
    marginVertical:"5%",
    height:300,
    backgroundColor:'#B83B5E',
    padding:10,
    borderRadius:25,
    borderWidth:2,
  },
  logtitle:{
    fontSize:25,
    fontWeight:'800',
    textAlign:'center',
    marginVertical:15
  }
});

export default GameScreen;
