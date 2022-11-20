import {View,TextInput,StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const GameStartScreen = () => {
  return (
    <View style={styles.container}>
        <TextInput
        keyboardType='numeric'
        maxLength={2} 
        style={styles.textinput} 
        cursorColor={"yellow"} 
        placeholderTextColor={"yellow"}
        />
        <View style={styles.button}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop:"20%",
      marginHorizontal:"5%",
      padding:25,
      backgroundColor:"#7D0633",
      borderRadius:10,
      elevation:10,
      shadowColor:"white",
      //Ios Style
      shadowOpacity:0.25,
      shadowRadius:6,
      shadowOffset:{width:0,height:2},
      alignItems:"center"
    },
    textinput:{
      fontSize:30,
      width:40,
      height:40,
      color:"yellow",
      borderColor:"yellow",
      borderBottomWidth:2,
      textAlign:"center",
      fontWeight:'bold',
      marginBottom:10,
    },
    button:{
      flexDirection:"row",
      justifyContent:"center"
    }
  });

export default GameStartScreen