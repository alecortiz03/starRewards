import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Animated } from "react-native";
import { BlurView } from "expo-blur";

export default function NinjaUsernameSearchBar({ style, onNinjaPick }) {

  function handleNinjaPick(ninja) {
    console.log("Ninja picked:", ninja);
    if (onNinjaPick) {
      onNinjaPick(ninja);
    }
  }
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState([]);
  const handleSearch = async (text) => {
    setSearch(text)

    if (text.length <= 2) {
      setResults([]);

      return;
    }
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/ninjas/search/?q=${encodeURIComponent(text)}`
      );

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.log("Search error:", error);
    }
  };
  return (
    <BlurView style={[styles.mainContainer, style]}>
      <TextInput style={styles.textInput} placeholder="Ninja Username" onChangeText={handleSearch} value={search} />
       {results.length > 0 && (
    <View style={styles.suggestionsContainer}>
      {results.map((item, idx) => (
        <Pressable
          key={item.id || idx}
          style={styles.suggestionItem}
          onPress={() => {
            setSearch(item.username); // or whatever property you want
            setResults([]); // clear suggestions
            handleNinjaPick(item); // pass the whole item to the handler
            }}
        >
          <Text style={{color: "#fff", fontWeight: "bold"}}>{item.username}</Text>
        </Pressable>
      ))}
    </View>
  )}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 600,
  },
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "100%",
  },
  suggestionsContainer: {
  position: "absolute",
  width: 300,
  borderRadius: 20,
  zIndex: 10, // ensure it appears above other elements
  alignItems: "flex-start",
  top: 45,
  
},
suggestionItem: {
  backgroundColor: "rgba(0, 42, 255, 0.8)",
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderWidth: 1,
  borderRadius: 20,
  zIndex: 10,
  marginBottom: 5,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.5,
  shadowRadius: 10,
  width: "100%",
  justifyContent: "flex-start",
  right: "50%",
},
});