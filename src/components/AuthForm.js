import React, { useState } from  'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements'; 
import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
 return (
     <>     
    <Spacer>
    <Text style={styles.headerText} h3>{headerText}</Text>
    </Spacer>
    <Input 
      label="Email" 
      value={email} 
      onChangeText={setEmail} 
      autoCapitalize="none"
      autoCorrect={false}
    />
    <Spacer/>
    <Input 
      label="password" 
      value={password} 
      onChangeText={setPassword} 
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
    />
    <Spacer/>
  {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
    <Spacer>
    <Button title={submitButtonText} onPress={()=> onSubmit({ email, password })} />
    </Spacer>
    </>
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
      }
})

export default AuthForm;