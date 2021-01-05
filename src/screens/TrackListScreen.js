import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
import Upper from '../components/Upper';
import Header from '../components/Header';
import { Context as TrackContext } from '../context/TrackContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { Card, Button } from 'react-native-elements';


const TrackListScreen = ({ navigation }) => {
  const { state, fetchTrack } = useContext(TrackContext);
  const { name } = state;
  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 20, backgroundColor: "#eee" }}>
      <Header />
      <ScrollView style={{ flex: 1, backgroundColor: '#eee' }} showsVerticalScrollIndicator={false} >
        <NavigationEvents onWillFocus={fetchTrack} />
        <Text style={styles.TopView}>Track your daily   <FontAwesome5 name="running" size={24} color="black" />   with Trackon.     An app that makes your day productive.</Text>
        <ScrollView style={{ backgroundColor: '#eee' }} horizontal={true} showsHorizontalScrollIndicator={false}>
          <Upper imageUri="https://i.pinimg.com/originals/f4/c1/f3/f4c1f36e40cd22b6d69a0f21e3d86f43.png" content="Cycling is really fun, Now let's trackon track you and help you in your daily routine..." />
          <Upper imageUri="https://kit8.net/images/thumbnails/580/386/detailed/4/maps@2x.png" content="Keep track of your geolocations. find yourself in any place, in the world. keeps track of your daily walks." />
          <Upper imageUri="https://www.adventurealan.com/wp-content/uploads/2015/11/conness-gps-1030x687.jpg" content="Going for hiking with friends, lost your path. Trackon can help you finding way back home." />
        </ScrollView>


        <Card.Title style={{ fontSize: 30 }}>
          My Tracks
        </Card.Title>

        {/* <Text style={{ fontWeight: "700", textAlign: "center", fontSize: 18, marginBottom: 20 }} >Your Track Records</Text> */}
        <FlatList style={{ paddingBottom: 20 }}
          data={state}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return <TouchableOpacity onPress={() =>
              navigation.navigate('TrackDetail', { _id: item._id })
            }>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
};


TrackListScreen.navigationOptions = {
  headerShown: false
}


const styles = StyleSheet.create({
  TopView: {
    padding: 20,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'left',
    color: '#e84a5f'
  }
})

export default TrackListScreen;
