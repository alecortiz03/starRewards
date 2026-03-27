import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
export default function NinjaCard({ style, ninja }) {

    const [chosenNinja, setChosenNinja] = useState(false);

  return (
    <View style = {[styles.ninjaCardContainer, style]}>
          <Text style={styles.ninjaCard}>{ninja.firstName} {ninja.lastName}</Text>
          <Text style={styles.usernameText}>{ninja.username}</Text>
          <Text style={styles.starText}> Stars: {ninja.stars}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  ninjaCardContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.41)",
    width: "80%",
    height:"13%",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
    ninjaCard: {
    fontSize: 50,
    alignSelf: "center",
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    usernameText: {
        position: "absolute",
        top: "40%",
    fontSize: 14,
    alignSelf: "center",
      color: "#2a2828aa",
      fontSize: 14,
    },
    starText: {
        position: "absolute",
        left: "85%",
    fontSize: 14,
    alignSelf: "center",
      color: "#2a2828aa",
      fontSize: 14,
    },

  });
    