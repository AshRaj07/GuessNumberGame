import {View,Text, StyleSheet} from 'react-native'

const GuessLogItem = ({roundNumber,guessNumber}) => {
  return (
    <View style={styles.guessContainer}>
        <Text style={styles.guesstxt}>#{roundNumber}</Text>
        <Text style={styles.guesstxt}>{guessNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    guessContainer:{
        flexDirection:'row',
        backgroundColor:'#7D0633',
        color:'white',
        justifyContent:'space-between',
        padding:20,
        borderRadius:25,
        marginVertical:5
    },
    guesstxt:{
        fontSize:20
    }
})

export default GuessLogItem