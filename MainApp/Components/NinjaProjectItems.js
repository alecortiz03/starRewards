import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import {BlurView} from "expo-blur";

import ProjectButton from "../SubComponents/ProjectButton";
export default function NinjaProjectItems({ style, onAddToCart }) {
  return (
    <View style={[styles.mainContainer, style]}>
        <BlurView style = {styles.blurContainer} intensity={100} tint="light" >
            <ScrollView contentContainerStyle={styles.buttonContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(14, 255, 243, 0.55)",
        width: "60%",
        height: 475,
        left: 23,
        top: 50,
        borderRadius: 10,
        overflow: "hidden",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
    },
    blurContainer: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    buttonContainer: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
},
});