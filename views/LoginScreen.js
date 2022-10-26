import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useLogin } from '../hooks/useLogin';
export const LoginScreen = () => {
  const {login, loading, error} = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmitListener = () => {
    login(email, password);

  }
  return (
    <View>
        <Text>Crowd It.</Text>
        <View>
          <TextInput    
            placeholder="Email..."
          
            onChangeText={(email) => setEmail(email)}></TextInput>
         
        </View>
      <View>
        <TextInput
    
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
       />
      </View>
      <TouchableOpacity
      
      onPress={onSubmitListener}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
