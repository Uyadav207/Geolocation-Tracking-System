import React, { useContext, useCallback } from 'react';
import {  StyleSheet, KeyboardAvoidingView} from 'react-native';
import {  withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm';
import { MaterialIcons } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {

const { state: { recording }, addLocation } = useContext(LocationContext)
const callback = useCallback(
  location => {
    addLocation(location, recording);
  },
  [recording],
)
const [ err ] = useLocation(isFocused || recording, callback)

console.log(recording);

  return (
       <KeyboardAvoidingView
              behavior={'position'}>
      <Map />
      { err ? <Text>Please Enable Location Services</Text> : null }
    <TrackForm />
    </KeyboardAvoidingView>
    )
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <MaterialIcons name="directions-bike" size={24} color="#e84a5f" />,
  tabBarOptions: {
    activeTintColor: '#e84a5f',
},
}

const styles = StyleSheet.create(
  {
    header: {
      borderBottomWidth: 0.3,
      borderColor: "gray",
      marginHorizontal: 5,
      padding: 5
    },
    heading: {
      fontWeight: "400",
      textAlign: "center",
      paddingLeft: 5,
    }
  }
)

export default withNavigationFocus(TrackCreateScreen);
