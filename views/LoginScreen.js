import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

import { useLogin } from '../hooks/useLogin';
export const LoginScreen = ( {navigation}) => {
  const {login, loading, error} = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmitListener = () => {
    login(email, password);
    navigation.navigate('Home');

  }
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Crowd It<Text style={{color:"#1CBC94"}}>.</Text></Text>
        <View style={styles.inputView}>
          <TextInput  style={styles.TextInput}
            placeholder="Email"

            onChangeText={(email) => setEmail(email)}></TextInput>

        </View>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput} 

        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
       />
      </View>
      <TouchableOpacity
      style={styles.loginBtn}
      onPress={onSubmitListener}
      >
        <Text style={{color:"white",fontWeight:"700"}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 title: {
  fontSize: 54,
  fontWeight:"700",
  marginBottom: 100,
  color: "#4A4A4A",

 },
  inputView: {
    backgroundColor: "#F7F7F7",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    textAlign:"left"
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    textAlign:"left"
  },
  loginBtn:
 {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#1CBC94",

 }
});

