import { BlurView } from 'expo-blur';
import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';

export default function CartItemCard({ item }) {
  const { height, width } = useWindowDimensions();

  return (
    <View style = {styles.mainContainer}>
        <BlurView style={[styles.BlurView, {height: height * 0.1, width: width * 0.9, marginBottom: height * 0.02}]} intensity={60}>
            <Text style = {[styles.Text, {fontSize: height * 0.06}]}>{item.name} x{item.qty}</Text>
        </BlurView>
    </View>
  );
}

const styles = {
  mainContainer: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
    BlurView: {
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        shadowOffset: { width: 0.0001, height: 0.02 },
        shadowRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(99, 186, 188, 0.9)',
        borderWidth: 2,
    },
  Text:{
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: 'center',

  },
};