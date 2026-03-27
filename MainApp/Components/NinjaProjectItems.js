import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet, View, ImageBackground } from "react-native";
import {BlurView} from "expo-blur";

import backgroundImage from "../assets/Background/liquidGlassBackground.png";
import ProjectButton from "../SubComponents/ProjectButton";
export default function NinjaProjectItems({ style, onAddToCart }) {
  return (

        <BlurView style={[styles.mainContainer, style]} intensity={60}>
            <ScrollView contentContainerStyle={styles.buttonContainer} showsVerticalScrollIndicator={false}>
                <ProjectButton text="Build" onPress={() => onAddToCart("Build")} />
                <ProjectButton text="Solve" onPress={() => onAddToCart("Solve")}/>
                <ProjectButton text="Quest" onPress={() => onAddToCart("Quest")} />
                <ProjectButton text="Adventure" textStyle={{ fontSize: 36 }} onPress={() => onAddToCart("Adventure")} />
                <ProjectButton text="Level Up" onPress={() => onAddToCart("Level Up")} />
                <ProjectButton text="Birthday" onPress={() => onAddToCart("Birthday")} />
                <ProjectButton text="Bonus" onPress={() => onAddToCart("Bonus")} />
                <ProjectButton text="Session" onPress={() => onAddToCart("Session")} />
            </ScrollView>
      </BlurView>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
         justifyContent: "center", 
         alignItems: "center", 
         width: 1200,
         height: 500,
         borderRadius: 10,
         overflow: "hidden",
         shadowColor: "#000",
         shadowOffset: { width: 0, height: 5 },
         shadowOpacity: 0.7,
         shadowRadius: 10,
    },
    buttonContainer: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
},
});