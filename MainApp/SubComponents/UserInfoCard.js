// ------ Base Imports ------
import React, {useState, useRef} from 'react';
import { BlurView } from 'expo-blur';
import { View, Text, useWindowDimensions, Pressable, Animated, Modal, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
// ------ Local Imports ------
import { updateFirstName, updateLastName, updateUsername } from '../Services/API';

export default function UserInfoCard({style, user, isVissible, setInfoVisible}) {
    const { height, width } = useWindowDimensions();
    const [editFirstName, setEditFirstName] = useState(false);
    const [editLastName, setEditLastName] = useState(false);
    const [editUserName, setEditUserName] = useState(false);
    const [editNinjaTag, setEditNinjaTag] = useState(false);
    const [firstName, setFirstName] = useState(user ? user.firstName : '');
    const [lastName, setLastName] = useState(user ? user.lastName : '');
    const [username, setUsername] = useState(user ? user.username : '');
    const [ninjaTag, setNinjaTag] = useState(user ? user.ninjaTag : '');
return (
<Modal style={style} visible={isVissible} transparent animationType="fade" onRequestClose={() => setInfoVisible(false)}>
                <BlurView tint="dark" intensity={60} style={styles.InfoModalContainer}>
                    <View>
                        <TextInput style = {[styles.firstNameInput, {backgroundColor: editFirstName ? 'white' : 'rgba(255, 255, 255, 0.5)'}]} 
                        placeholder={user.firstName} 
                        value={firstName}
                        onChangeText={setFirstName}
                        editable={editFirstName}/>
                        <Pressable 
                        onPress={async () => {
                            if (editFirstName) {
                                try {
                                    await updateFirstName(user.id, firstName);
                                } catch (error) {
                                    console.error('Error updating first name:', error);
                                }
                            }
                            setEditFirstName(!editFirstName);
                        }} style={[styles.firstNameEditButton, {backgroundColor: editFirstName ? 'rgba(243, 101, 85, 0.75)' : 'rgba(85, 243, 124, 0.75)', width: width * 0.025, left: width * 0.103, bottom: height * 0.035}]}>
                            <Text style = {styles.firstNameEditButtonText}>{editFirstName ? 'SAVE' : 'EDIT'}</Text>
                        </Pressable>
                    </View>
                    <View>
                        <TextInput style = {[styles.lastNameInput, {backgroundColor: editLastName ? 'white' : 'rgba(255, 255, 255, 0.5)'}]} 
                        placeholder={user.lastName} 
                        value={lastName}
                        onChangeText={setLastName}
                        editable={editLastName}/>
                        <Pressable onPress={async () => {
                            if (editLastName) {
                                try {
                                    await updateLastName(user.id, lastName);
                                } catch (error) {
                                    console.error('Error updating last name:', error);
                                }
                            }
                            setEditLastName(!editLastName);
                        }} style={[styles.lastNameEditButton, {backgroundColor: editLastName ? 'rgba(243, 101, 85, 0.75)' : 'rgba(85, 243, 124, 0.75)', width: width * 0.025, left: width * 0.103, bottom: height * 0.035}]}>
                            <Text style = {styles.lastNameEditButtonText}>{editLastName ? 'SAVE' : 'EDIT'}</Text>
                        </Pressable>
                    </View>
                    <View>
                        <TextInput style = {[styles.userNameInput, {backgroundColor: editUserName ? 'white' : 'rgba(255, 255, 255, 0.5)'}]} 
                        placeholder={user.username} 
                        value={username}
                        onChangeText={setUsername}
                        editable={editUserName}/>
                        <Pressable 
                        onPress={async () => {
                            if (editUserName) {
                                try {
                                    await updateUsername(user.id, username);
                                } catch (error) {
                                    console.error('Error updating username:', error);
                                }
                            }
                            setEditUserName(!editUserName);

                        }} 
                        style={[styles.userNameEditButton, {backgroundColor: editUserName ? 'rgba(243, 101, 85, 0.75)' : 'rgba(85, 243, 124, 0.75)', width: width * 0.025, left: width * 0.103, bottom: height * 0.035}]}
                        >
                            <Text style = {styles.userNameEditButtonText}>{editUserName ? 'SAVE' : 'EDIT'}</Text>
                        </Pressable>
                    </View>
                    <View>
                        <TextInput style = {[styles.ninjaTagInput, {backgroundColor: editNinjaTag ? 'white' : 'rgba(255, 255, 255, 0.5)'}]} 
                        placeholder={user.ninjaTag} 
                        value={ninjaTag}
                        onChangeText={setNinjaTag}
                        editable={editNinjaTag}/>
                        <Pressable onPress={async () => {
                            if (editNinjaTag) {
                                try {
                                    await updateNinjaTag(user.id, ninjaTag);
                                } catch (error) {
                                    console.error('Error updating ninja tag:', error);
                                }
                            }
                            setEditNinjaTag(!editNinjaTag);
                        }} style={[styles.ninjaTagEditButton, {backgroundColor: editNinjaTag ? 'rgba(243, 101, 85, 0.75)' : 'rgba(85, 243, 124, 0.75)', width: width * 0.025, left: width * 0.103, bottom: height * 0.035}]}>
                            <Text style = {styles.ninjaTagEditButtonText}>{editNinjaTag ? 'SAVE' : 'EDIT'}</Text>
                        </Pressable>
                    </View>
                    <Pressable onPress={() => setInfoVisible(false)} style={styles.infoCloseButton}>
                        <Text>Close</Text>
                    </Pressable>
                </BlurView>
            </Modal>
)};

const styles = {
      InfoModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
    },
   
     infoCloseButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 10,
    },
    firstNameInput: {
        width: 200,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    firstNameEditButton: {
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    firstNameEditButtonText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    lastNameInput: {
        width: 200,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    lastNameEditButton: {
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    lastNameEditButtonText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    userNameInput: {
        width: 200,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    userNameEditButton: {
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    userNameEditButtonText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    ninjaTagInput: {
        width: 200,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    ninjaTagEditButton: {
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    ninjaTagEditButtonText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    starText: {
        marginTop: 20,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },

};
