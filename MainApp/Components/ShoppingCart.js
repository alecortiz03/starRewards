import React, {useState} from "react";

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import {BlurView} from "expo-blur";
import NinjaCard from "../SubComponents/NinjaCard";
export default function ShoppingCart({style, cart = [], totalStars = 0, ninja}) {

  async function updateStars() {
  if (!ninja || !ninja.id) {
    alert("Cannot Update Stars: No ninja selected or missing ID");
    return;
  }
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/ninjas/${ninja.id}/stars/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stars: totalStars }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      alert("Error: " + (errorData.error || response.statusText));
      return;
    }
    const data = await response.json();
    alert(`${data.username} now has ${data.stars} stars!`);
  } catch (error) {
    alert("Network error: " + error.message);
  }
}


  const starCounts = cart.reduce((acc, item) =>{
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {}); 
  return (
    <BlurView style={[styles.container, style]}>
      <View style = {styles.shoppingTitleContainer}>
      <Text style={styles.shoppingTitle}>Shopping Cart</Text>
      
      </View>
      {ninja &&
      <NinjaCard ninja={ninja} style={styles.ninjaCardStyle}/>
      }
      <ScrollView style={styles.cartContents} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      {Object.entries(starCounts).map(([item, count]) => {
  const countLength = count.toString().length;
  let fontSize = 16;
  let marginTop = 1;
  if (countLength === 2) {
    fontSize = 10;
    marginTop = 5;
  } else if (countLength >= 3) {
    fontSize = 8;
    marginTop = 5;
  }
  return (
    <View key={item} style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item}</Text>
      {count > 1 && (
        <View style={styles.itemTextBackground}>
          <Text style={[styles.itemText, { fontSize, marginTop } ]}>x{count}</Text>
        </View>
      )}
    </View>
  );
})}
      </ScrollView>
      <BlurView style={{position: "absolute", bottom: 15, left: 20, backgroundColor: "rgba(255, 255, 255, 0.41)", padding: 10, borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.5, shadowRadius: 10}}>
      <Text style={styles.text}>Total Stars: {totalStars}</Text>
      </BlurView>
      <View style = {styles.submitButtonContainer}>
        <TouchableOpacity style={{justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}} onPress={updateStars}>
          <Text style={{fontSize: 24, fontWeight: "bold", color: "#fff", textShadowColor: "rgba(0, 0, 0, 0.75)", textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </BlurView>
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
    ninjaCard: {
      color: "#fff",
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 4,
    },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,

  },
  submitButtonContainer: {
    position: "absolute",
    bottom: 15,
    right: 20,
    padding: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    width: 200,
    height: 70,
  },
  shoppingTitleContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.41)",
    padding: 10,
    borderRadius: 10,
     width: "80%",
     shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    bottom: "89%",
  },
  shoppingTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 20,
    width: 450,
    height: 70,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  itemText: {
    fontSize: 12,
    color: "#555",
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 3,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  itemTextBackground: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 25,
    height: 25,
    left: 425,
    bottom: 50,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,

  },
  cartContents: {
  maxHeight: 400, // adjust as needed
  width: "100%",
  bottom: 50,
},
scrollContent: {
  alignItems: "center",
  marginTop: 25,
},
itemTitle: {
  fontSize: 36,
  fontWeight: "bold",
  color: "#fff",
  marginBottom: 5,
  textShadowColor: "rgba(0, 0, 0, 0.75)",
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 4,
},
ninjaCardStyle: {
  marginTop: 60,
  marginBottom: 30,
},
});