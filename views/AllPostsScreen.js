import React, {useEffect, useState} from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../services/Firebase';
export const AllPostsScreen = () => {
    const [allPosts, setAllPosts] = useState(null);
    
    const fetchAllPosts = async () => {

     
        const posts = [];
        const querySnapshot = await getDocs(collection(db, "posts"));
        if (!querySnapshot.empty){
        querySnapshot.forEach( (doc) => {
          // doc.data() is never undefined for query doc snapshots
          const data = doc.data();
          const id = doc.id;
          posts.push({...data, id});
          
        });
        
        setAllPosts(posts);
        return posts;
    }
    }

    useEffect(()=> {
     
        const posts = fetchAllPosts();
       
 
    }, [])

    useEffect(() => {
        console.log(allPosts);
      
    }, [allPosts])
    
 
  return (
    <View style={{
    
    }}>
        
        <ScrollView style={{
        paddingTop: 100,

         }}>
            <Text
            style={{
                fontWeight: 'bold',
                fontSize: 26,
                textAlign: 'center',
                marginBottom: 15,
                color: '#4A4A4A'

            }}

            >Discover Change.</Text>
            <Text
            style={{
                fontSize: 14,
                marginBottom: 45,
                textAlign: 'center'
            }}
            >View the latest and trending events.</Text>
            <View
            style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            {allPosts && allPosts.map((post) => {
                
                return post.title ? <View style={{
                    width: '85%',
                    height: 200,
                    backgroundColor: 'lightgray',
                    marginBottom: 50,
                    borderRadius: 10,
                  padding: 20,
                   
                  

                }} key={post.id}>
                   
                    <View>
                    <Text
                    style={{
                      
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                    >{post.title}</Text>
                    <Text></Text>
                    <Text
                    style={{
                        marginBottom: 10
                    }}
                    >{post.description}</Text>
                    <Text
                    style={{
                        marginBottom: 20
                    }}
                    >Location: {post.generalLocation}</Text>
                    <Text style={{
                        fontSize: 12,
                        textAlign: 'center'
                    }}>{post.startTime} to {post.endTime}</Text>
                    </View>
                </View> : null;
                
            })}
            
            </View>
           
        </ScrollView>
        
    </View>
  ) 
}
