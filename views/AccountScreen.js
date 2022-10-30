import React, { useEffect } from 'react'

import {SafeAreaView, StyleSheet,Image, View, Text, TouchableOpacity} from 'react-native';
import { useFirebaseAuth } from '../services/contexts/AuthContext';

export const AccountScreen = ({navigation}) => {

  const {user} = useFirebaseAuth();
  const currUser  = user;

  
  
 
  if (!currUser) {
    return (
        <Text>
            NO USER
        </Text>
    )
  }
  // <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text>Home</Text></TouchableOpacity>
  // <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}><Text>Create Post</Text></TouchableOpacity>
  console.log(currUser.avatarUrl)
  return (
   <View

   style={styles.container}>
    <SafeAreaView style={styles.navigation}>
        <Text style={styles.mainText}>Crowd It<Text style={styles.highlight}>.</Text></Text>
        <View>
      
        </View>
      </SafeAreaView>
         <View style={{}}>
         <Image 
         style={{height: 125, width: 125, borderRadius: 75}}
         source={{uri:`${currUser.avatarUrl}`}}>

        </Image>
            <View style={styles.nameContainer}>
            <Text style={styles.nameText}>
                {currUser.firstName}
            </Text>
            <Text
             style={styles.nameText}>
            {   currUser?.lastName}
            </Text>
            </View>
         </View>
      
        <Text>
            {currUser?.email}
        </Text>
        <Text>
            {currUser.firstName}
        </Text>
        <Text>
            {currUser?.lastName}
        </Text>
        <Text>
            {currUser.socialScore}
        </Text>
        <Text>
            {currUser.eventsOrganized}
        </Text>
        <Text>
            {currUser.eventsAttended}
        </Text>
   </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingTop: 10,
      justifyContent: 'top',
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row',
     
        
    },
    nameText: {
        fontSize: 25,
        padding: 3,
        fontWeight:'bold',
    },
    navigation: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "top"
      },
      mainText: {
        fontFamily: "Poppins",
        fontSize: 40,
        color: "#4A4A4A",
        alignItems: 'top',
    
        
      },
      highlight: {
        color: '#1CBC94'
      },
  });