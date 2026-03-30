// ------ Basic Imports ------
import  React, {useState, useRef, useEffect} from 'react';
import { BlurView } from 'expo-blur';
import { Pressable, Text, useWindowDimensions, Animated } from 'react-native';
// ------ Local Imports ------
// ------ Global Constants ------

export default function ProjectButton({style, text, onPress, items, stars, user, setStars, setItems}) {
  const { height, width, fontScale } = useWindowDimensions();
  const [isHovered, setIsHovered] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;
  const projects = {
    "Build": 2,
    "Solve": 1,
    "Quest": 3,
    "Level Up": 4,
    "Birthday": 30,
    "Session": 1,
    "Add Button": 0,
};
useEffect(() => {
        console.log("Items: ", items);
        console.log("Stars: ", stars);
      }, [items, stars]);
const handlePress = () => {
  console.log(`Pressed ${text}`);

  if (user) {
    if (text !== "Add Button") {
      setItems(prevItems => {
        const existingItem = prevItems.find(item => item.name === text);

        if (existingItem) {
          return prevItems.map(item =>
            item.name === text
              ? { ...item, qty: item.qty + 1 }
              : item
          );
        }

        return [...prevItems, { name: text, qty: 1 }];
      });

      setStars(prev => prev + projects[text]);
    }
  } else {
    alert("Please select a user to start picking items!");
  }
};
  
  const handleHoverIn = () => {
    setIsHovered(true);
    Animated.timing(translateY, {
      toValue: -5,
      useNativeDriver: true,
      duration: 100,
    }).start();
  };

  const handleHoverOut = () => {
    setIsHovered(false);
    Animated.timing(translateY, {
      toValue: 0,
      useNativeDriver: true,
        duration: 300,
    }).start();
  };
  return (
    <Animated.View style={{flex: 1, height: height * 0.2, transform: [{ translateY }] }}>
        <Pressable 
        style={[styles.ProjectButtonContainer, style, { height: "100%", flex: 1, backgroundColor: isHovered ? 'rgba(99, 186, 188, 0.9)' : 'rgba(99, 186, 188, 0.66)'}]}
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}
        onPress={handlePress}
        >
            <Text style={[styles.ProjectButtonText, { fontSize: width * 0.03 }]}>{text}</Text>
        </Pressable>
    </Animated.View>
  );
}

const styles = {
    ProjectButtonContainer: {
        borderRadius: 30,
        justifyContent: 'center',
        margin: 10,
        borderColor: 'rgba(99, 186, 188, 0.9)',
        borderWidth: 2,
        shadowColor: '#000',
    },
    ProjectButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    }
}