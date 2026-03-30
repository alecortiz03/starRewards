// ------ Base Imports ------
import React, {useState, useRef} from 'react';
import { BlurView } from 'expo-blur';
import { View, Text, useWindowDimensions, Pressable, Animated, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
// ------ Local Imports ------
import UserInfoCard from '../SubComponents/UserInfoCard';
import ShoppingCart from '../SubComponents/ShoppingCart';
// ------ Global Constants ------

export default function UserCard({style, user, onDeleteUser, items, stars, setStars, setItems, setSelectedUser}) {
    const { height, width } = useWindowDimensions();
    const trashScale = useRef(new Animated.Value(1)).current;
    const infoScale = useRef(new Animated.Value(1)).current;
    const shoppingCartScale = useRef(new Animated.Value(1)).current;
    const [infoVisible, setInfoVisible] = useState(false);
    const [shoppingCartVisible, setShoppingCartVisible] = useState(false);
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
        <Text style={styles.starText}>{user ? `STARS: ${user.stars}` : ''}</Text>
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
                onPress={() => setInfoVisible(true)}
                >
                    <Ionicons name="information-circle" size={width * 0.017} color="rgba(0, 0, 0, 0.8)" />
                </Pressable>
            </Animated.View>
            <UserInfoCard isVissible={infoVisible} setInfoVisible={setInfoVisible} style={{width: width, height: height}} user={user}/>
            <Animated.View style={[{ transform: [{ scale: shoppingCartScale }] }, {zIndex: 10, bottom: height * 0.035, left: width * 0.075}]}>
                <Pressable style={[styles.shoppingCartIcon, {right: width * 0.16, bottom: height * 0.000000000001, zIndex: 10}]}
                onHoverIn={handleShoppingCartHoverIn}
                onHoverOut={handleShoppingCartHoverOut}
                onPress={() => {setShoppingCartVisible(true)}}
                >
                    <Ionicons name="cart" size={width * 0.017} color="rgba(0, 0, 0, 0.8)" style={{padding: width * 0.005}}/>
                    {items.length > 0 && (
                        <Text style = {[styles.itemsText, {fontSize: width * 0.02, right: width * 0.02, bottom: height * 0.025}]}>{items.length}</Text>
                    )}
                </Pressable>
            </Animated.View>
            <ShoppingCart isVissible={shoppingCartVisible} onClose={() => setShoppingCartVisible(false)} style={{width: width, height: height}} items={items} user={user} stars={stars} setItems={setItems} setStars={setStars} setSelectedUser={setSelectedUser} />
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
    },
    starText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    itemsText: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
}