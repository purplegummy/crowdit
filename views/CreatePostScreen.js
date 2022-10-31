
import React, {useEffect, useState} from 'react';
import { useFirebaseAuth } from '../services/contexts/AuthContext';
import {View, Modal,Text, TextInput, Button, TouchableOpacity} from 'react-native';
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
    const [zip, setZip] = useState(null);
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
            zipcode: zip,
            startTime: startDate,
            endTime: endDate,
            streetAddress: street,
            title,
            description,
            joinedMembers: [],
            location

        };
        const createdPost = await addDoc(collection(db, "posts"), postObj);
        console.log(createdPost);
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
            <TextInput
             placeholder="Title"
             onChangeText={(title)=>setTitle(title)}></TextInput>
            
            <TextInput
                onChangeText={(description)=>setDescription(description)}
                placeholder="description"
               style={[{height: 90}]}
               >
    
            </TextInput>
            <TextInput
                onChangeText={(startDate)=>setStartDate(startDate)}
                placeholder="Start Date & Time"
               style={[{height: 20}]}
               >
    
            </TextInput>
            <TextInput
                onChangeText={(endDate)=>setEndDate(endDate)}
                placeholder="End Date & Time"
               style={[{height: 20}]}
               >
    
            </TextInput>
            <TextInput
                onChangeText={(street)=>setStreet(street)}
                placeholder="Street Address"
               style={[{height: 20}]}
               >
    
            </TextInput>
            <TextInput
                onChangeText={(zipcode)=>setZip(zipcode)}
                placeholder="Zipcode"
               style={[{height: 20}]}
               >
    
            </TextInput>
            <TouchableOpacity
            onPress={() => setModalVisible(true)}>
                <Text>
                    Set Location
                </Text>
    
            </TouchableOpacity>
    
            <Button 
            onPress={createPost}
            title="Create Post"
            >
                
            </Button>
        </View>
        );
      }

  };