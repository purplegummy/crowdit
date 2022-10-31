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
 
  console.log(currUser.avatarUrl)
  return (
    
   <View

   style={styles.container}>
     
    <View style={styles.navigation}>
        <Text style={styles.mainText}>Crowd It<Text style={styles.highlight}>.</Text></Text>
      </View>
    <View style={{
        marginBottom: 25
    }}>
         <Image 
         style={{height: 125, width: 125, borderRadius: 75, marginBottom: 20}}
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
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Email:</Text>
        <Text style={styles.infoText}>
                {currUser?.email}
            </Text>
      </View>
       
       <View style={styles.infoBox}>
        <Text style={styles.infoText}>Social Score: </Text>
       <Text style={{...styles.infoText}}>
            {currUser.socialScore}
        </Text>
       </View>
       <View style={styles.infoBox}>
        <Text style={styles.infoText}>Events Organized: </Text>
        <Text style={styles.infoText}>
                {currUser.eventsOrganized}
            </Text>
       </View>
        <View style={{...styles.infoBox, marginBottom: 100}}>
            <Text style={styles.infoText}>Events Attended: </Text>
        <Text style={styles.infoText}>
            {currUser.eventsAttended}
        </Text>
        </View>
    
        <TouchableOpacity style={{
            width:"35%",
            borderRadius:15,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:40,
            backgroundColor:"#1CBC94",
        }}>
            <Text style={{color:"white",fontWeight:"700"}}>Sign Out</Text>
        </TouchableOpacity>
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
        marginBottom: 30,
       marginTop: 50,
       marginLeft: -30,
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
        fontSize: 18,
    

      },
      infoBox: {
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
      }
  });