// ------- Base Imports -------
import React, {useState, useRef} from 'react';
import { ImageBackground, ScrollView, useWindowDimensions, View } from 'react-native';
// ------- Local Imports -------
import Background from '../assets/Background/liquidGlassBackground.png';
// ------- Component -------
import UserSearchbar from '../Components/UserSearchbar';
import ItemDashboard from '../Components/ItemDashboard';
import UserCard from '../Components/UserCard';
export default function Dashboard() {
  const [itemsPicked, setItemsPicked] = useState([]);
  const [stars, setStars] = useState(0);
  const { height, width } = useWindowDimensions();
  const [selectedUser, setSelectedUser] = useState(null);
  
  return (
    <ImageBackground source={Background} style={styles.mainContainer}>
        <UserSearchbar onUserSelect={setSelectedUser}/>
        <UserCard style = {{top: height * 0.025, left: width * 0.3}} user = {selectedUser} onDeleteUser={() => { setSelectedUser(null); setItemsPicked([]); setStars(0); }} items={itemsPicked} stars={stars} setStars={setStars} setItems={setItemsPicked} />
        <ScrollView style= {[styles.ItemDashboardContainer, { top: height * 0.1 }]} showsVerticalScrollIndicator={false} >
            <ItemDashboard style = {{ marginBottom: height * 0.02 }} items = {itemsPicked} stars = {stars} user = {selectedUser} setStars={setStars} setItems={setItemsPicked} />
        </ScrollView>
    </ImageBackground>
  );
}

const styles = {
  mainContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ItemDashboardContainer: {
    flex:2,
  },

}