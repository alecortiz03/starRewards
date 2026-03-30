import React, {useState, useRef} from 'react';
import { BlurView } from 'expo-blur';
import { View, Text, useWindowDimensions, Pressable, Animated, Modal, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function UserInfoCard({style, user, isVissible, setInfoVisible}) {
    const { height, width } = useWindowDimensions();
    const [editFirstName, setEditFirstName] = useState(false);
    const [editLastName, setEditLastName] = useState(false);
    const [editUserName, setEditUserName] = useState(false);
    const [editNinjaTag, setEditNinjaTag] = useState(false);

return (
<Modal style={style} visible={isVissible} transparent animationType="fade" onRequestClose={() => setInfoVisible(false)}>
                <BlurView tint="dark" intensity={60} style={styles.InfoModalContainer}>
                    <View>
                        <TextInput style = {[styles.firstNameInput, {backgroundColor: editFirstName ? 'white' : 'rgba(255, 255, 255, 0.5)'}]} placeholder={user.firstName} editable={editFirstName}></TextInput>
                        <Pressable onPress={() => setEditFirstName(!editFirstName)} style={[styles.firstNameEditButton, {backgroundColor: editFirstName ? 'rgba(243, 101, 85, 0.75)' : 'rgba(85, 243, 124, 0.75)', width: width * 0.025, left: width * 0.103, bottom: height * 0.035}]}>
                            <Text style = {styles.firstNameEditButtonText}>{editFirstName ? 'SAVE' : 'EDIT'}</Text>
                        </Pressable>
                    </View>
                    <View>
                        <TextInput style = {[styles.lastNameInput, {backgroundColor: editLastName ? 'white' : 'rgba(255, 255, 255, 0.5)'}]} placeholder={user.lastName} editable={editLastName}></TextInput>
                        <Pressable onPress={() => setEditLastName(!editLastName)} style={[styles.lastNameEditButton, {backgroundColor: editLastName ? 'rgba(243, 101, 85, 0.75)' : 'rgba(85, 243, 124, 0.75)', width: width * 0.025, left: width * 0.103, bottom: height * 0.035}]}>
                            <Text style = {styles.lastNameEditButtonText}>{editLastName ? 'SAVE' : 'EDIT'}</Text>
                        </Pressable>
                    </View>
                    <View>
                        <TextInput style = {[styles.userNameInput, {backgroundColor: editUserName ? 'white' : 'rgba(255, 255, 255, 0.5)'}]} placeholder={user.username} editable={editUserName}></TextInput>
                        <Pressable onPress={() => setEditUserName(!editUserName)} style={[styles.userNameEditButton, {backgroundColor: editUserName ? 'rgba(243, 101, 85, 0.75)' : 'rgba(85, 243, 124, 0.75)', width: width * 0.025, left: width * 0.103, bottom: height * 0.035}]}>
                            <Text style = {styles.userNameEditButtonText}>{editUserName ? 'SAVE' : 'EDIT'}</Text>
                        </Pressable>
                    </View>
                    <View>
                        <TextInput style = {[styles.ninjaTagInput, {backgroundColor: editNinjaTag ? 'white' : 'rgba(255, 255, 255, 0.5)'}]} placeholder={user.ninjaTag} editable={editNinjaTag}></TextInput>
                        <Pressable onPress={() => setEditNinjaTag(!editNinjaTag)} style={[styles.ninjaTagEditButton, {backgroundColor: editNinjaTag ? 'rgba(243, 101, 85, 0.75)' : 'rgba(85, 243, 124, 0.75)', width: width * 0.025, left: width * 0.103, bottom: height * 0.035}]}>
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
};
