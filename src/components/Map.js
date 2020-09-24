import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Marker } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {

const { state: { currentLocation, locations }  } = useContext(LocationContext)



if(!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
}


    return <MapView
    liteMode={true}
    style={styles.map}
    initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta:0.01
    }}
    region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta:0.01
    }}
    >
      <Polyline  coordinates={locations.map(loc => loc.coords)} />
      <Marker coordinate={{ latitude: currentLocation.coords.latitude, longitude: currentLocation.coords.longitude}} />
    </MapView>

}

const styles = StyleSheet.create({
    map: {
        height: 350,
        width: "auto"
        }
})

export default Map
