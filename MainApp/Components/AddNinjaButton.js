import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Pressable } from 'react-native';

export default function AddNinjaButton({ onPress, style }) {
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
    onPress={onPress}
    onHoverIn={() => animateTo(-8)}
    onHoverOut={() => animateTo(0)}
    onPressIn={() => animateTo(-8)}
    onPressOut={() => animateTo(0)}
    style={style} // match your button size
  >
            <Animated.View style={[styles.animatedButton, { transform: [{ translateY }] }]}>

      <Text style={styles.buttonText}>Add Ninja</Text>
            </Animated.View>

  </Pressable>

  );
}

const styles = StyleSheet.create({
    animatedButton: {
  width: 150,
  height: 65,
  backgroundColor: '#007AFF',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 40,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.5,
  shadowRadius: 10,
  margin: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});