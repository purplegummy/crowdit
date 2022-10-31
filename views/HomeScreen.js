import { StatusBar } from 'expo-status-bar';
import { ScrollView, TouchableOpacity, StyleSheet, Text, SafeAreaView, View, Image, ImageBackground} from 'react-native';
import { useFonts } from 'expo-font';
import { useFirebaseAuth } from '../services/contexts/AuthContext';
export const HomeScreen = ({navigation}) => {
    const {user} = useFirebaseAuth();
  const [loaded] = useFonts({
    Poppins: require('./assets/Poppins-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
        
      <SafeAreaView style={styles.navigation}>
        
        <Text style={styles.mainText}>Crowd It<Text style={styles.highlight}>.</Text></Text>
        <View>
            <TouchableOpacity
            onPress={() => navigation.navigate('ProfileStack')}
            >
                <Image
                style={styles.tinyLogo}
                source={{uri:user.avatarUrl}}
            />
            </TouchableOpacity>
          
        </View>
      </SafeAreaView>
    
        <View style={{position:"absolute", top:150, left:30}}>
            <ImageBackground source={require('./assets/homeImgBg.png')} style={{ width: 336, height: 284, marginLeft: "auto", borderRadius:15}}>
            <View style={{ padding: 20, marginTop:10,justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign:"center",marginRight:20,fontWeight:"bold" , color:"white", fontSize: 24, }}>Make a difference, one crowd at a time.</Text>
                <TouchableOpacity
                    onPress={() =>navigation.navigate('CreatePost')}
                >
                    <Text style={{ textAlign:"center",marginRight:20, fontWeight:"bold", marginTop:20, textDecorationLine:"underline" , color:"white", fontSize: 16, }}>Start a Project</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() =>navigation.navigate('TrendingStack')}>
                <Text style={{ textAlign:"center",marginRight:20, fontWeight:"bold", marginTop:20, textDecorationLine:"underline" , color:"white", fontSize: 16, }}>Explore Projects</Text>
                </TouchableOpacity>
                <Text style={{ textAlign:"center",marginRight:20, fontWeight:"bold", marginTop:20, textDecorationLine:"underline" , color:"white", fontSize: 16, }}>Donate Now</Text>
            </View>
            </ImageBackground>
        </View>

            <ImageBackground source={require('./assets/GALLERY.jpg')} style={{position:"absolute", top:450, height:260, left:50, width:300}}>
            <View style={{ padding: 20, marginTop:10,justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign:"center",marginRight:20,fontWeight:"bold" , color:"white", fontSize: 24,marginTop:70 }}>Community Gallery</Text>
                <Text style={{ textAlign:"center",marginRight:20,fontWeight:"bold" , color:"#0E9573", fontSize: 16,marginTop:10 }}>View All</Text>
            
            </View>
            </ImageBackground>

        <View style={{backgroundColor:"#FBFBFB", width:"100%", height:100, position:"absolute", bottom:0}}>

        </View>
    
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  mainText: {
    fontFamily: "Poppins",
    fontSize: 40,
    color: "#4A4A4A",
    alignItems: 'top',
    marginLeft: 15,
    marginTop: 12,
  },
  highlight: {
    color: '#1CBC94'
  },
  navigation: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "top"
  },
  tinyLogo: {
    width: 55,
    height: 55,
    marginRight: 15,
    borderRadius: 30,
    marginTop: 5,
  }
});