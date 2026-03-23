import React, { useRef } from "react";
import { Text, StyleSheet, Pressable, Animated } from "react-native";

export default function ProjectButton({ text, onPress, style, textStyle }) {
  const translateY = useRef(new Animated.Value(0)).current;

  const animateTo = (toValue) => {
    Animated.spring(translateY, {
      toValue,
      useNativeDriver: true,
      friction: 5,
      tension: 80,
    }).start();
  };

  return (
    <Pressable
      onHoverIn={() => animateTo(-8)}
      onHoverOut={() => animateTo(0)}
      onPressIn={() => animateTo(-8)}
      onPressOut={() => animateTo(0)}
      onPress={onPress}
    >
      <Animated.View style={[styles.button, style, { transform: [{ translateY }] }]}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bffc3",
    padding: 10,
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
    width: 200,
    height: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 40,
    top: 55,
  },
});