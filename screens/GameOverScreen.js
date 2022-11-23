import { Image, StyleSheet, Text,View} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'

const GameOverScreen = ({noOfRounds,pickedNumber,handleReset}) => {
  return (
    <View style={styles.gameovercontainer}>
        <Title>Game is Over!</Title>
        <View style={styles.imgcontainer}>
            <Image style={styles.image} source={require('../assets/success.png')} />
        </View>
        <Text style={styles.txt}>Your phone needed {noOfRounds} rounds to guess {pickedNumber}</Text>
        <View style={styles.btn}>
        <PrimaryButton onPress={handleReset}>Start new Game</PrimaryButton>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    gameovercontainer:{
        flex:1,
        marginVertical:80,
        alignItems:'center',
        // justifyContent:'center'
    },
    image:{
        width:"100%",
        height:"100%"
    },
    imgcontainer:{
        width:300,
        height:300,
        borderRadius:150,
        overflow:'hidden',
        marginVertical:50
    },
    btn : {
        marginTop:25
    },
    txt:{
        fontSize:20,
        fontWeight:'500'
    }
})
export default GameOverScreen