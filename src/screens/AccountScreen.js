import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, Button, Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar'


const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1, backgroundColor: "#eee", justifyContent: 'center' }} >
      <StatusBar style="auto" />
      <Card.Title style={{ fontSize: 30 }} >Account Setting</Card.Title>
      <Card containerStyle={{ border: 0, borderRadius: 20, height: 500, shadowColor: "#eee", justifyContent: "center" }}>
        <Button
          onPress={signout}
          buttonStyle={{ backgroundColor: '#e84a5f'}}
          icon={
            <Icon
              name="lock"
              size={20}
              color="white"
              style={{ paddingRight: 10 }}
            />
          }
          title="Log out" />
      </Card>
    </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons name="account" size={24} color="#fff" />,
  tabBarOptions: {
    activeTintColor: '#e84a5f',
  },
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 30,
    backgroundColor: 'black',
    paddingBottom: "100%"
  },
  headerText: {
    fontSize: 38,
    fontWeight: "500",
    color: '#e84a5f',
    textAlign: 'center',
  },
  base: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  }
})
export default AccountScreen
