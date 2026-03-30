import React from 'react';
import { BlurView } from 'expo-blur';
import { View, Text, useWindowDimensions, Pressable, Modal } from 'react-native';
import CartItems from './CartItems';
export default function ShoppingCart({style, items, user, stars, setItems, setStars, setSelectedUser, isVissible, onClose}) {
    const { height, width } = useWindowDimensions();
    const name = user ? user.firstName + " " + user.lastName : '--';
  return (
    <Modal style={style} visible={isVissible} transparent animationType='fade'>
        <BlurView intensity={60} tint='dark' style={styles.BlurView}>
            <Text style={[styles.titleName, {fontSize: width * 0.05, bottom: height * 0.87}]}>{name}</Text>
            <Pressable style={[styles.cancelButton, {top: height * 0.88, right: width * 0.8}]} onPress={onClose}>
                <Text style={[styles.cancelButtonText, {marginHorizontal: width * 0.04, marginVertical: height * 0.01} ]}>CANCEL</Text>
            </Pressable>
            <CartItems style={style} items={items} setItems={setItems} stars={stars} setStars={setStars} />

        </BlurView>
    </Modal>
  );
}
const styles = {
    BlurView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButton:{
        position: 'absolute',
        backgroundColor: 'rgba(232, 105, 105, 0.75)',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 10,

    },
    cancelButtonText: {
        padding: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontWeight: 'bold',
        color: 'white',

    },
    titleName: {
        position: 'absolute',
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    }
}