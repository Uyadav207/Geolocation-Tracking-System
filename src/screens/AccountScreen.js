import React, { useContext } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WavyHeader from '../components/WavyHeader'


const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
      <SafeAreaView forceInset={{top: 'always'}} >
        <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={160}
        customTop={130}
        customBgColor="#5000ca"
        customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Account Settings</Text>
      </View>
      <View style={styles.button}>    
      <Spacer>
      <Button title="sign Out" onPress={signout} />
      </Spacer>
      </View>
      </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons name="account" size={24} color="black" />,
}

const styles = StyleSheet.create({
  header : {
      borderBottomWidth: 0.3,
      borderColor: "gray",
      marginHorizontal: 5,
      padding: 5
    },
    svgCurve: {
      position: 'absolute',
      width: Dimensions.get('window').width
    },
    headerText: {
      fontSize: 38,
      fontWeight: "500",
      color: '#ffffff',
      textAlign: 'center',
      marginTop: 35
    },
    button: {
      paddingVertical: "50%",
    }
})
export default AccountScreen
