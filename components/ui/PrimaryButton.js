import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outer}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.inner, styles.pressed] : styles.inner }
        android_ripple={{ color: "black" }}
        onPress={onPress}
      >
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
    marginHorizontal: 5,
  },
  inner: {
    height: 50,
    width: 160,
    backgroundColor: "#B83B5E",
    borderRadius: 15,
    justifyContent: "center",
  },
  txt: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  pressed: {
    opacity: 0.3,
    backgroundColor: "#7D0633",
  },
});

export default PrimaryButton;
