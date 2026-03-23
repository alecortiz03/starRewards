import React from "react";

import { View, Text, StyleSheet } from "react-native";

export default function ShoppingCart({style, cart = [], totalStars = 0}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>Shopping Cart</Text>
      <Text style={styles.text}>Total Stars: {totalStars}</Text>
      {cart.map((item, index) => (
        <Text key={index} style={styles.text}>{item}</Text>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(230, 43, 43, 0.8)",
    width: 500,
    height: 600,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    bottom: 250,

  },
});