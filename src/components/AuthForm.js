import React, { useState } from  'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements'; 
import Spacer from './Spacer'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
 return (
     <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>     
     <StatusBar style="auto" />
    <Spacer>
    <Text style={styles.headerText} h3>{headerText}</Text>
    </Spacer>
    <Spacer>
    <Input 
      leftIcon={
        <Icon
          name='envelope'
          size={18}
          color='gray'
        />
      }
      placeholder="email@address.com"
      label="Email" 
      value={email} 
      onChangeText={setEmail} 
      autoCapitalize="none"
      autoCorrect={false}
    />
    </Spacer>
    <Spacer>
    <Input 
     leftIcon={
      <Icon 
        name='lock'
        size={20}
        color='gray'
      />
    }
      placeholder="Password"
      label="Password" 
      value={password} 
      onChangeText={setPassword} 
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
    />
    <Spacer/>
    </Spacer>
  {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
    <Spacer>
    <Button buttonStyle={{ backgroundColor: '#e84a5f'}} title={submitButtonText} onPress={()=> onSubmit({ email, password })} />
    </Spacer>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color:"red",
        marginLeft: 15,
        marginTop: 15
      },
      headerText: {
        textAlign:"center",
        marginBottom: 20,
        fontWeight: "bold"
      },
})

export default AuthForm;