import {Text,StyleSheet} from 'react-native'

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    title:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        borderColor:'white',
        // borderWidth:2,
        padding:10,
        backgroundColor:'#7D0633',
        borderRadius:10
    }
})

export default Title