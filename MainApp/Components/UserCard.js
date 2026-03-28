// ------ Base Imports ------
import React, {useState, useRef} from 'react';
import { BlurView } from 'expo-blur';
import { View, Text, useWindowDimensions, Pressable, Animated } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
// ------ Local Imports ------
// ------ Global Constants ------

export default function UserCard({style, user, onDeleteUser}) {
    const { height, width } = useWindowDimensions();
    const trashScale = useRef(new Animated.Value(1)).current;
    const infoScale = useRef(new Animated.Value(1)).current;
    const shoppingCartScale = useRef(new Animated.Value(1)).current;
    const handleTrashHoverIn = () => {
    Animated.spring(trashScale, {
                toValue: 0.95,
                useNativeDriver: true,
            }).start();
        };

        const handleTrashHoverOut = () => {
            Animated.spring(trashScale, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        };

        const handleInfoHoverIn = () => {
            Animated.spring(infoScale, {
                toValue: 0.98,
                useNativeDriver: true,
            }).start();
        };

        const handleInfoHoverOut = () => {
            Animated.spring(infoScale, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        };
        const handleShoppingCartHoverIn = () => {
            Animated.spring(shoppingCartScale, {
                toValue: 0.98,
                useNativeDriver: true,
            }).start();
        };

        const handleShoppingCartHoverOut = () => {
            Animated.spring(shoppingCartScale, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        };
    
  return (
    <BlurView intensity={60} style={[styles.BlurContainer, style, { height: height * 0.1, width: width * 0.2 }]}>
        <Text style={[styles.Name, { fontSize: width * 0.015 }]}>{user ? `${user.firstName} ${user.lastName}` : 'No User Selected'}</Text>
        {user && (
            <>
            <Animated.View style={[{ transform: [{ scale: trashScale }] }, {zIndex: 10, bottom: height * 0.035, left: width * 0.075}]}>
            <Pressable 
            style={[styles.trashIcon]}
            onHoverIn={handleTrashHoverIn}
            onHoverOut={handleTrashHoverOut}
            onPress={onDeleteUser}
            >
                <Ionicons name="trash-outline" size={width * 0.017} color="rgba(16, 16, 16, 0.63)" />
            </Pressable>
                
            </Animated.View>
            <Animated.View style={[{ transform: [{ scale: infoScale }] }, {zIndex: 10, bottom: height * 0.035, left: width * 0.075}]}>
                <Pressable style={[styles.starsIcon, {right: width * 0.15}]}
                onHoverIn={handleInfoHoverIn}
                onHoverOut={handleInfoHoverOut}
                >
                    <Ionicons name="information-circle" size={width * 0.017} color="rgba(0, 0, 0, 0.8)" />
                </Pressable>
            </Animated.View>
            <Animated.View style={[{ transform: [{ scale: shoppingCartScale }] }, {zIndex: 10, bottom: height * 0.035, left: width * 0.075}]}>
                <Pressable style={[styles.shoppingCartIcon, {right: width * 0.16, bottom: height * 0.000000000001, zIndex: 10}]}
                onHoverIn={handleShoppingCartHoverIn}
                onHoverOut={handleShoppingCartHoverOut}
                >
                    <Ionicons name="cart" size={width * 0.017} color="rgba(0, 0, 0, 0.8)" style={{padding: width * 0.005}}/>
                </Pressable>
            </Animated.View>
            </>
        )}
    </BlurView>
  );
}

const styles = {
    BlurContainer:{
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },
    Name: {
        color: '#000000',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    trashIcon: {
        position: 'absolute',
    },
    starsIcon: {
        position: 'absolute',
    },
    shoppingCartIcon: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 60,
    }
}