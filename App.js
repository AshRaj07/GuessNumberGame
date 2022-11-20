import GameStartScreen from './screens/GameStartScreen';
import {StyleSheet, ImageBackground} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor='white'/>
     <LinearGradient  colors={['black','#B83B5E']} style={styles.rootscreen}>
      <ImageBackground style={styles.rootscreen} source={require('./assets/background.png')} imageStyle={styles.img}>
      <GameStartScreen />
      </ImageBackground>
     </LinearGradient>
     </>
  );
}

const styles = StyleSheet.create({
  rootscreen:{
    flex:1
  },
  img:{
    opacity:0.2,
    resizeMode:'cover'
  }
})