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
         style={{height: 125, width: 125, borderRadius: 75, marginTop: -650}}
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
      
        <Text style={styles.infoText}>
            {currUser?.email}
        </Text>
        <Text style={styles.infoText}>
            {currUser.firstName}
        </Text>
        <Text style={styles.infoText}>
            {currUser?.lastName}
        </Text>
        <Text style={styles.infoText}>
            {currUser.socialScore}
        </Text>
        <Text style={styles.infoText}>
            {currUser.eventsOrganized}
        </Text>
       <Text style={styles.infoText}>
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
        marginLeft: -170
    
        
      },
      highlight: {
        color: '#1CBC94'
      },
      infoText: {
        fontSize: 20,
    

      }
  });