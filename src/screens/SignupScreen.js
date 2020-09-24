import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

const SignupScreen = ({navigation}) => {
  
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
  <View style={styles.container}>   
  <NavigationEvents 
    onWillFocus={clearErrorMessage}
  />
  <AuthForm
      headerText = "TRACKON SIGNUP"
      errorMessage = {state.errorMessage}
      submitButtonText = "Sign up"
      onSubmit = {signup}
  />
  <NavLink 
    text = "Already have an account? Sign in instead"
    routeName = "Signin"
  />
  </View>

  )
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen
