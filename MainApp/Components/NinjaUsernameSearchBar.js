import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";


export default function NinjaUsernameSearchBar({ style }) {
  return (
    <View style={[styles.mainContainer, style]}>
      <TextInput style={styles.textInput} placeholder="Ninja Username" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "30%",
  },
});