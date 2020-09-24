import React, { useState, useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'

const SigninScreen = () => {

  const { state, signin, clearErrorMessage } = useContext(Context)

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >  
    <NavigationEvents 
      onWillFocus={clearErrorMessage}
    />
    <AuthForm
        headerText = "TRACKON LOGIN"
        errorMessage = {state.errorMessage}
        submitButtonText = "Sign In"
        onSubmit = {signin}
    />
    <NavLink 
      text = "Don't have an account? Sign up instead"
      routeName = "Signup"
    />
    </KeyboardAvoidingView>
    )
  }
  
  SigninScreen.navigationOptions = () => {
    return {
      header: null,
    };
  };
  
  const styles = StyleSheet.create({
    container: {
      height: Dimensions.get('screen').height-100,
      justifyContent: 'center',
      marginBottom: 100
    }
  })
  
  export default SigninScreen
  