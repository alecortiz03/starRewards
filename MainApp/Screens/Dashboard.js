import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, Linking, ImageBackground} from 'react-native';


import NinjaUsernameSearchBar from '../Components/NinjaUsernameSearchBar';
import NinjaProjectItems from '../Components/NinjaProjectItems';
import ShoppingCart from '../Components/ShoppingCart';
import AddNinjaButton from '../Components/AddNinjaButton';
import AddNinjaPopUp from '../Components/AddNinjaPopUp';
import funny from '../assets/Icons/funny.png';
import backgroundImage from '../assets/Background/liquidGlassBackground.png';
export default function Dashboard() {

  const [cart, setCart] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNinja, setSelectedNinja] = useState(null); // NEW

  const itemValue = {
    Build: 2,
    Solve: 1,
    Quest: 3,
    Adventure: 0,
    "Level Up": 4,
    Birthday: 30,
    Bonus: 1,
    Session: 1,
  };
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    setTotalStars(totalStars + itemValue[item]);
  }
  return (
    <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}>
      <NinjaUsernameSearchBar style={styles.Searchbar} onNinjaPick={(ninja) => { setSelectedNinja(ninja); console.log("You chose ninja:", selectedNinja); }} />
      <TouchableOpacity style={{position: "absolute", top: 20, right: 25}} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>
        <Image source={funny} style={{width: 40, height: 40}} />
      </TouchableOpacity>
      <View style={styles.AddNinjaButton} >
      <AddNinjaButton onPress={() => setModalVisible(true)} />
        </View>
      <NinjaProjectItems style={styles.ProjectItems} onAddToCart={handleAddToCart}/>
      <ShoppingCart style={{ alignSelf: 'flex-end', bottom: 425, right: 25 }} cart={cart} totalStars={totalStars} ninja={selectedNinja} />
      <AddNinjaPopUp visible={modalVisible} onClose={() => setModalVisible(false)} style={styles.AddNinjaPopUp} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Searchbar: {
      top: 20,
      zIndex: 10,
      left: "2%"
  },
  ProjectItems: {
    top: "5%",
    left: "2%",
      
  },
  AddNinjaButton:{
    position: "absolute",
    left: "33%",
    top: "0.5%",
    zIndex: 10,
  },
  AddNinjaPopUp: {
    width: "40%",
    height: "70%",
    left: "30%",
    top: "3%",
  }

});