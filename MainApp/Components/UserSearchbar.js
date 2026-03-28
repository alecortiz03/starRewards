// ------ Base Imports ------
import React, {useState, useCallback} from 'react';
import { TextInput, useWindowDimensions, Modal, View, TouchableWithoutFeedback, FlatList, Text, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
// ------ Local Imports ------
// ------ Global Constants ------




export default function UserSearchbar({style, onUserSelect}) {
    const { height, width } = useWindowDimensions();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isHovered, setIsHovered] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const searchUser = useCallback(async (text) => {
        setSearchQuery(text);
        if (!text.trim()) {
            setSearchResults([]);
            return;
        }

        const response = await fetch(`http://127.0.0.1:8000/api/ninjas/search/?q=${encodeURIComponent(text)}`);
        const data = await response.json();
        setSearchResults(data);
    }, []);
    function selectUser(user){
        setSearchResults([]);
        setSearchQuery('');
        if (onUserSelect) {
            onUserSelect(user);
        }
    }
  return (
    <View style={[styles.MainView, style, { height: height * 0.08, width: width * 0.3, top: height * 0.05 }]}>
        <BlurView intensity={60} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', borderRadius: 30 }}>
            <TextInput 
            placeholder={isFocused ? '' : 'Search For Ninja...'} 
            style={[styles.TextInput, { fontSize: width * 0.015 }]}
            onChangeText={searchUser}
            value={searchQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            />
        </BlurView>
        {searchResults.length > 0 && (
            <BlurView intensity={60} tint='dark' style={{ position: 'absolute', top: height * 0.09, width: '100%', borderRadius: 20, padding: 10, maxHeight: 200, zIndex: 999,}}>
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Pressable 
                        onPress={() => selectUser(item)}
                        onHoverIn={() => setIsHovered(item.id)}
                        onHoverOut={() => setIsHovered(null)}
                        style={{ backgroundColor: isHovered === item.id ? 'rgba(99, 186, 188, 0.3)' : 'transparent', borderRadius: 10}}
                        >
                            <Text style={{ color: '#fff', paddingVertical: 8, paddingHorizontal: 10 }}>
                                {item.firstName} {item.lastName} — @{item.username}
                            </Text>
                        </Pressable>
                    )}
                />
            </BlurView>
        )}
    </View>
    
  );
}

// ------ Styles ------
const styles = {
    MainView:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(15, 14, 14, 0.3)',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        borderWidth: 2,
        zIndex: 999,
    },
    TextInput: {
        textAlign: 'center',
        width: '100%',
        height: '100%',
        outline: 'none',
        
    }

}