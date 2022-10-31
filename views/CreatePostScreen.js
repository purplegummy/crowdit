
import React, {useEffect, useState} from 'react';
import { useFirebaseAuth } from '../services/contexts/AuthContext';
import {StyleSheet, View, Modal,Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../services/Firebase';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export const CreatePostScreen = ({navigation}) => {
    const {user} = useFirebaseAuth();
    const [modalVisible, setModalVisible] = useState(false);
    const [map, setMap] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [street, setStreet] = useState(null);
 
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [location, setLocation] = useState({
        latitude: 38.2527,
        longitude: -85.7585,
    });
    useEffect(()=> {
        setTimeout(()=>setModalVisible(false),2000);
    }, [location])
    const createPost = async () => {
        const postObj  = {
            uid: user.uid,
      
            startTime: startDate,
            endTime: endDate,
            generalLocation: street,
            title,
            description,
            joinedMembers: [],
            location,
            createdAt: new Date(),

        };
        const createdPost = await addDoc(collection(db, "posts"), postObj);
        console.log(createdPost);
        setTitle(null);
        setDescription(null);
        setEndDate(null);
        setStartDate(null);
        setStreet(null);
        setLocation({
            latitude: 38.2527,
            longitude: -85.7585,
        })
        navigation.navigate('TrendingStack')
    }
    if (!map){
        return (
     
        <View
        style={{marginTop: 100, flex: 1, alignItems:'center'}}
        >
           
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >

                    <MapView
                    style={{width: "100%", height: "100%"}}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    >
                    <Marker 
                        style={{width: 50, height: 50}}
                        draggable
                        coordinate={{latitude:location.latitude, longitude:location.longitude}}
                        onDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
                        
                    />
                    </MapView>
            </Modal>
            
            <View
            style={{
                borderBottomColor: 'gray',
                borderBottomWidth: .3,
                width: "90%",
                marginBottom: 25
            }}
            >
                <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 26,

                    marginBottom: 15,
                    color: '#4A4A4A'

            
            }}
                >Create A Project</Text>
            </View>
            
            <View
            style={{
                width: "90%",
                margin: "auto",
                marginBottom: 20,
            }}
            >
                <Text
                style={{
                    fontWeight: 'bold',
                    marginBottom: 4,
                }}
                >Title</Text>
                <TextInput
                value={title}
                style={{
                    width: "100%",
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 2,
                    backgroundColor: 'F4F4F4',
                    borderColor: 'gray',
                    borderWidth: .5,
                    borderRadius: 4
                    
                }}
                placeholder="Event Title"
                onChangeText={(title)=>setTitle(title)}></TextInput>
            </View>
           
            <View
             style={{
                width: "90%",
                margin: "auto",
                marginBottom: 15,
            }}>
                <Text 
                 style={{
                    fontWeight: 'bold',
                    marginBottom: 4,
                }}>
                    Description
                </Text>
                <TextInput
                 value={description}
                blurOnSubmit={true}
                style={{
                
                    textAlignVertical: 'top',
                    width: "100%",
                    paddingTop: 7,
                    paddingBottom: 7,
                    paddingLeft: 2,
                    backgroundColor: 'F4F4F4',
                    borderColor: 'gray',
                    borderWidth: .5,
                    borderRadius: 4,
                    height: 200,
                    
                }}
                    multiline = {true}
                    onChangeText={(description)=>setDescription(description)}
                    placeholder="Event Description"
                
                >
        
                </TextInput>
            </View>
           <View
           style={{
            width: "90%",
                margin: "auto",
                marginBottom: 10
           }}>
            <Text 
                 style={{
                    fontWeight: 'bold',
                    marginBottom: 4,
                }}>
                    Start Time
                </Text>
            <TextInput
             value={startDate}
                    onChangeText={(startDate)=>setStartDate(startDate)}
                    placeholder="Start Date And Time"
                style={styles.TimeInput}
                >
        
                </TextInput>
           </View>
           <View
           style={{
            width: "90%",
                margin: "auto",
                marginBottom: 10
           }}>
            <Text 
                 style={{
                    fontWeight: 'bold',
                    marginBottom: 4,
                }}>
                    End Time
                </Text>
            <TextInput
             value={endDate}
                    onChangeText={(endDate)=>setEndDate(endDate)}
                    placeholder="End Date And Time"
                style={styles.TimeInput}
                >
        
                </TextInput>
           </View>
            <View style={{
            width: "90%",
                margin: "auto",
                marginBottom: 20
           }}>
                <Text style={{
                    fontWeight: 'bold',
                    marginBottom: 4,
                }}>Location</Text>
            <TextInput
                 value={street}
                onChangeText={(street)=>setStreet(street)}
                placeholder="General Location of Event"
                style={styles.TimeInput}
               >
    
            </TextInput>
          

            </View>
           
            <TouchableOpacity
            onPress={() => setModalVisible(true)}>
                <Text>
                    Set Map Location
                </Text>
    
            </TouchableOpacity>
    
            <TouchableOpacity
          
            style={{
                width:"35%",
                borderRadius:15,
                height:50,
                alignItems:"center",
                justifyContent:"center",
                marginTop:40,
                backgroundColor:"#1CBC94",
            }}
            onPress={createPost}
       
            >
                <Text style={{color:"white",fontWeight:"700"}}>Publish</Text>
            </TouchableOpacity>
        </View>
   
        );
      }

  };

  const styles = StyleSheet.create({
    TimeInput: {
        width: "100%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 2,
        backgroundColor: 'F4F4F4',
        borderColor: 'gray',
        borderWidth: .5,
        borderRadius: 4
    },
});