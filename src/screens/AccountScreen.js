import React, { useContext } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Button, ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { navigate } from '../navigationRef';


const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
      <SafeAreaView style={{ flexDirection: "column", flex: 1}} forceInset={{top: 'always'}} >
      <View style={styles.header}>
        <Text style={styles.headerText}>Account Settings</Text>
      </View>
      <View style={styles.button}>    
      <ListItem  chevron title="Sign Out"  onPress={signout}/>
      <ListItem chevron title="About" />      
      </View>
      </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons name="account" size={24} color="#e84a5f" />,
  tabBarOptions: {
    activeTintColor: '#e84a5f',
},
}


const styles = StyleSheet.create({
  header : {
      paddingVertical: 30,
    },
    headerText: {
      fontSize: 38,
      fontWeight: "500",
      color: 'black',
      textAlign: 'center',
    },
    button: {
      paddingVertical: "50%",
    }
})
export default AccountScreen
