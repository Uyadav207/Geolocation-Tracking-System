import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'

const SigninScreen = () => {

  const { state, signin, clearErrorMessage } = useContext(Context)

  return (
    <View style={styles.container}>   
    <NavigationEvents 
      onWillFocus={clearErrorMessage}
    />
    <AuthForm
        headerText = "Sign In to Your FitKit Account"
        errorMessage = {state.errorMessage}
        submitButtonText = "Sign In"
        onSubmit = {signin}
    />
    <NavLink 
      text = "Don't have an account? Sign up instead"
      routeName = "Signup"
    />
    </View>
  
    )
  }
  
  SigninScreen.navigationOptions = () => {
    return {
      header: null,
    };
  };
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      marginBottom: 100
    }
  })
  
  export default SigninScreen
  