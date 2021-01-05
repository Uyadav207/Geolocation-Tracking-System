import React, {useContext} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline, Marker } from 'react-native-maps';
import { FontAwesome5, Entypo, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';

const SCREEN_MAX_HEIGHT = Dimensions.get('screen').height-200;

const TrackDetailsScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  
  const track = state.find( t => t._id === _id);
  const initialCoords = track.locations[0].coords;
  const { altitude, speed, heading, accuracy, latitude, longitude } = initialCoords;


  return (
  <ScrollView style={styles.Container}>
    <StatusBar style="auto" />
  <MapView style={styles.map}
    initialRegion={{
      longitudeDelta: 0.01,
      latitudeDelta: 0.01,
      ...initialCoords
    }}
  >
  <Polyline 
    coordinates={track.locations.map(loc => loc.coords)}
  />
   <Marker coordinate={{ latitude, longitude}} />              
  </MapView>
  <Card containerStyle={{ borderRadius: 20, marginBottom: 20, shadowColor:"#eee" }}>
  <View style={styles.Container1}>
      <View style={styles.flexContainer}>
        <FontAwesome5 style={styles.icon} name="sort-amount-up" size={30} color="#000" />
      </View>
      <View style={styles.Container2} >
        <Text style={styles.Heading}>Altitude</Text>
        <Text style={styles.textPad}>{altitude} m</Text>
      </View>
  </View>
  <Card.Divider/>
  <View style={styles.Container1}>
      <View style={styles.flexContainer}>
      <Entypo style={styles.icon} name="direction" size={30} color="#000" />
      </View>
      <View style={styles.Container2} >
        <Text style={styles.Heading}>Direction</Text>
        <Text style={styles.textPad}>{heading}° N </Text>
      </View>
  </View>
  <Card.Divider/>
  <View style={styles.Container1}>
      <View style={styles.flexContainer}>
      <MaterialCommunityIcons style={styles.icon} name="longitude" size={30} color="#000" />
      </View>
      <View style={styles.Container2} >
        <Text style={styles.Heading}>Longitude</Text>
        <Text style={styles.textPad}>{longitude}</Text>
      </View>
  </View>
  <Card.Divider/>
  <View style={styles.Container1}>
      <View style={styles.flexContainer}>
      <MaterialCommunityIcons style={styles.icon} name="latitude" size={30} color="#000" />
      </View>
      <View style={styles.Container2} >
        <Text style={styles.Heading}>Latitude</Text>
  <Text style={styles.textPad}>{`${latitude}° N`}</Text>
      </View>
  </View>
  <Card.Divider/>
  <View style={styles.Container1}>
      <View style={styles.flexContainer}>
       <SimpleLineIcons style={styles.icon} name="speedometer" size={30} color="#000" />
      </View>
      <View style={styles.Container2} >
        <Text style={styles.Heading}>Speed</Text>
        <Text style={styles.textPad}>{speed} m/s</Text>
      </View>
  </View>
  <Card.Divider/>
  <View style={styles.Container1}>
      <View style={styles.flexContainer}>
      <MaterialCommunityIcons style={styles.icon} name="angle-acute" size={30} color="#000" />
      </View>
      <View style={styles.Container2} >
        <Text style={styles.Heading}>Accuracy</Text>
        <Text style={styles.textPad}>{accuracy} %</Text>
      </View>
  </View>
  </Card>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: SCREEN_MAX_HEIGHT,
  },
  Container: {
    flex: 1,
    backgroundColor:'#eee',
    paddingBottom: 30
  },
  Container1: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 20,
  },
  flexContainer:{
    borderRadius: 30,
    backgroundColor: '#f56a79',
  },
  textPad: {
    fontSize: 15,
    fontWeight: '500',
    color: 'gray'
  },
  Heading: {
    fontWeight: '900',
    marginBottom: 5,
    color: '#de4463'
  },
  Container2: {
    marginLeft: 50,
    flex: 1
  },
  icon: {
    height: 60,
    width: 60,
    padding: 15
  }
});

export default TrackDetailsScreen;

