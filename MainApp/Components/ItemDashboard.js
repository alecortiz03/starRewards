// ------ Base Imports ------
import React from 'react';
import { BlurView } from 'expo-blur';
import { FlatList, Text, useWindowDimensions } from 'react-native';
// ------ Local Imports ------
// ------ Sub Components ------
import ProjectButton from '../SubComponents/ProjectButton';
// ------ Global Constants ------

export default function ItemDashboard({style, items, stars, user, setStars, setItems}) {
  const { height, width } = useWindowDimensions();
  const handlePress = (item) => {
    console.log(`Pressed ${item}`);
  };
  const projects = {
    "Build": 2,
    "Solve": 1,
    "Quest": 3,
    "Level Up": 4,
    "Birthday": 30,
    "Session": 1,
    "Add Button": 0,
};
  return (
    <BlurView intensity={60} style={[styles.BlurContainer, { height: height * 0.75, width: width * 0.8}, style]}>
        <FlatList
            data={Object.keys(projects)}
            renderItem={({ item }) => <ProjectButton text={item} items={items} stars={stars} user={user} setStars={setStars} setItems={setItems} />}
            keyExtractor={(item) => item}
            numColumns={3}
            columnWrapperStyle={{ gap: width * 0.003 }}
            contentContainerStyle={{ gap: height * 0.005, padding: 6}}
            style={{ width: '100%', height: '100%' }}
            showsHorizontalScrollIndicator={false}
        />

    </BlurView>
  );
}

// ------ Styles ------
const styles = {
    BlurContainer:{
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        overflow: 'hidden',
        borderColor: 'rgba(99, 186, 188, 0.9)',
        borderWidth: 2,
    },
}
