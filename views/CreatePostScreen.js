
import React, {useState} from 'react';
import { useFirebaseAuth } from '../services/contexts/AuthContext';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { collection, addDoc } from "firebase/firestore"; 
import MapView from 'react-native-maps';

export const CreatePostScreen = ({navigation}) => {
    
    const [map, setMap] = useState(false);
    const {user} = useFirebaseAuth();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
   const [location, setLocation] = useState(null);
  if (!map){
    return (
    
    <View>

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
            placeholder="description"
           style={[{height: 20}]}
           >

        </TextInput>
        <TextInput
            onChangeText={(endDate)=>setEndDate(endDate)}
            placeholder="description"
           style={[{height: 20}]}
           >

        </TextInput>
        <TouchableOpacity
        onPress={() => <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />}>
            <Text>
                Set Location
            </Text>

        </TouchableOpacity>

        
    </View>
    );
  }

  };