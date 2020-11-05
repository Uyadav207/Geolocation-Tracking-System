import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
      <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }} forceInset={{top: 'always'}} >
      <View style={styles.header}>
        <Text style={styles.headerText}>Account Settings</Text>
      </View>
       
       {/* <ListItem chevron title="About" />  */}

       <View style={styles.base}>
       <Button buttonStyle={{ backgroundColor: '#e84a5f',  marginHorizontal: 30 }} title="Sign Out" onPress={signout}/>   
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
      backgroundColor: 'black',
      paddingBottom : "100%"
    },
    headerText: {
      fontSize: 38,
      fontWeight: "500",
      color: '#e84a5f',
      textAlign: 'center',
    },
    base : {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    }
})
export default AccountScreen
