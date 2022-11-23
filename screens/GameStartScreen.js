import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const GameStartScreen = ({pickNumber}) => {
  const [enteredNumber, setenteredNumber] = useState('')
  const handleInputHandle = (props) =>{
      setenteredNumber(props.nativeEvent.text)
  }
  const handleResetHandle = () =>{
    setenteredNumber('')
  }
  const handleConfirmHandle = () =>{
    const num = parseInt(enteredNumber)
    if(isNaN(num)||num<=0||num>99){
      Alert.alert('Invalid Number','Your number should be between 0 and 99',[{text:'Okay',style:'destructive',onPress:handleResetHandle}])
      return;
    }
    pickNumber(num);
  }
  return (
    <>
    <View style={styles.title}>
    <Title>Guess My Number</Title>
    </View>
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        maxLength={2}
        style={styles.textinput}
        cursorColor={"yellow"}
        placeholderTextColor={"yellow"}
        value={enteredNumber}
        onChange={handleInputHandle}
      />
      <View style={styles.button}>
        <PrimaryButton onPress={handleResetHandle} >Reset</PrimaryButton>
        <PrimaryButton onPress={handleConfirmHandle}>Confirm</PrimaryButton>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  title:{
    marginTop:"60%",
    marginBottom:"10%",
    width:250,
    marginHorizontal:"19%"
  },
  container: {
    backgroundColor: "#fff",
    // marginTop: "20%",
    marginHorizontal: "5%",
    padding: 25,
    backgroundColor: "#7D0633",
    borderRadius: 10,
    elevation: 10,
    shadowColor: "white",
    //Ios Style
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },
  textinput: {
    fontSize: 30,
    width: 40,
    height: 40,
    color: "yellow",
    borderColor: "yellow",
    borderBottomWidth: 2,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    marginTop:20
  },
});

export default GameStartScreen;
