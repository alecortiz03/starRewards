import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';


import NinjaUsernameSearchBar from '../Components/NinjaUsernameSearchBar';
import NinjaProjectItems from '../Components/NinjaProjectItems';
import ShoppingCart from '../Components/ShoppingCart';
export default function Dashboard() {

  const [cart, setCart] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const itemValue = {
    Build: 2,
    Solve: 1,
    Quest: 3,
    Adventure: 0,
    "Level Up": 5,
    Birthday: 30,
    Bonus: 1,
    Session: 1,
  };
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    setTotalStars(totalStars + itemValue[item]);
  }
  return (
    <View>
      <NinjaUsernameSearchBar style={styles.Searchbar} />
      <NinjaProjectItems style={styles.ProjectItems} onAddToCart={handleAddToCart}/>
      <ShoppingCart style={{ alignSelf: 'flex-end', bottom: 425, right: 25 }} cart={cart} totalStars={totalStars} />
    </View>
  );
}

const styles = StyleSheet.create({
  Searchbar: {
      top: 20,
      right: 500,
  },
  ProjectItems: {
      
  },
});