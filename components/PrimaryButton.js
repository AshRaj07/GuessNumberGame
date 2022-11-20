import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.outer}>
      <Pressable style={({pressed})=>pressed?[styles.inner,styles.pressed]:styles.inner} android_ripple={{ color: "black" }}>
        <Text style={styles.txt}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    marginVertical: 5,
    overflow: "hidden",
    borderRadius: 15,
    marginHorizontal:5
  },
  inner: {
    height: 35,
    width:140,
    backgroundColor: "#B83B5E",
    borderRadius: 15,
    justifyContent: "center",
  },
  txt: {
    textAlign: "center",
    color: "white",
    fontSize:20,
    fontWeight:'500'
  },
  pressed:{
    opacity:0.3,
    backgroundColor:"#7D0633",
  }
});

export default PrimaryButton;
