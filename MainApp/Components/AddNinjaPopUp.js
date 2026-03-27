import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image, Animated, Pressable, TextInput} from 'react-native';
import xIcon from '../assets/Icons/xIcon.png';

export default function AddNinjaPopUp({ visible, onClose, style }) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [ninjaTag, setNinjaTag] = useState('');
    const [stars, setStars] = useState('0');
    const translateY = useRef(new Animated.Value(0)).current;

    const handleSubmit = async () => {
    try {
        console.log('Submitting ninja:', { firstName, lastName, username, ninjaTag, stars });
      const response = await fetch('http://127.0.0.1:8000/api/ninjas/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          ninjaTag,
          stars: Number(stars),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log('Server error:', data);
        alert('Error', 'Could not create ninja');
        return;
      }

      console.log('Success:', data);
      alert('Success', 'Ninja created');

      setFirstName('');
      setLastName('');
      setUsername('');
      setNinjaTag('');
      setStars('0');
    } catch (error) {
      console.log('Network error:', error);
      alert('Error', 'Could not connect to server');
    }
  };

     const animateTo = (toValue) => {
        Animated.spring(translateY, {
          toValue,
          useNativeDriver: true,
          friction: 5,
          tension: 80,
        }).start();
      };
  return (
    <Modal visible={visible} transparent animationType="fade" style={[styles.main]}>
        <Animated.View style={{ transform: [{ translateY }], zIndex: 1 }}>
        <Pressable onPress={onClose} style={styles.xIcon} onHoverIn={() => animateTo(-8)} onHoverOut={() => animateTo(0)} onPressIn={() => animateTo(-8)} onPressOut={() => animateTo(0)}>
          <Text style={styles.xText}>X</Text>
        </Pressable>
         </Animated.View>
      <View style={[styles.container, style]}>
        <Text style = {styles.PopUpTitle}>Add Ninja</Text>
        <TextInput style={styles.firstNameInput} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
        <TextInput style={styles.firstNameInput} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
        <TextInput style={styles.firstNameInput} placeholder="Ninja Username" value={username} onChangeText={setUsername} />
        <TextInput style={styles.firstNameInput} placeholder="Ninja Tag" value={ninjaTag} onChangeText={setNinjaTag} />
        <TextInput style={styles.firstNameInput} placeholder="Number of Stars" keyboardType="numeric" inputMode='numeric' value={stars} onChangeText={setStars} />
        <TouchableOpacity style={styles.submitMain} onPress={handleSubmit}>
            <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    main:{
        justifyContent: 'center',
        alignItems: 'center',
    },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    width: "100%",
    height: "100%",
    borderRadius: 30,
      },
  xIcon: {
    position: 'absolute',
    left: "68%",
    marginTop: "1%",
    zIndex: 1,
    backgroundColor: 'rgba(255, 25, 25, 0.7)',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
  },
  xText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
    PopUpTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    },
    firstNameInput: {
    backgroundColor: '#ccb9b9',
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "30%",
    alignSelf: 'center',
    marginTop: 20,
    color: '#00000034',
  },
  submitMain: {
    position: 'absolute',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: "30%",
    top: 400,
    alignSelf: 'center',
  },
});