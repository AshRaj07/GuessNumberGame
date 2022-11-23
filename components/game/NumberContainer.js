import {View,Text, StyleSheet} from 'react-native'

const NumberContainer = ({children }) => {
  return (
    <View style={styles.numcontainer}>
        <Text style={styles.txt}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    numcontainer:{
        backgroundColor:'#B83B5E',
        marginVertical:20,
        alignItems:'center',
        justifyContent:'center',
        width:"80%",
        borderRadius:10,
        elevation:5
    },
    txt:{
        fontSize:50,
        padding:25,
        color:"white"
    }
})

export default NumberContainer