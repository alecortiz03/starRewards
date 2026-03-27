import React, { useRef } from "react";
import { Text, StyleSheet, Pressable, Animated, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";
import backgroundImage from "../assets/Background/liquidGlassBackground.png";
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
            <Animated.View style={[style, { transform: [{ translateY }] }]}>

    <ImageBackground source={backgroundImage} style={styles.button}>
      <BlurView  style = {styles.blur}intensity={60}>
    <Pressable
      onHoverIn={() => animateTo(-8)}
      onHoverOut={() => animateTo(0)}
      onPressIn={() => animateTo(-8)}
      onPressOut={() => animateTo(0)}
      onPress={onPress}
    >
      
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      
    </Pressable>
    </BlurView>
    </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0150a57d",
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
    width: 200,
    height: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    borderRadius: 20,
    overflow: "hidden",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 40,
    top: 55,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  blur: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});