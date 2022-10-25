import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground} from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
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
          <Image
            style={styles.tinyLogo}
            source={require('./assets/profile.png')}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView >
        <ImageBackground source={require('./assets/homeImgBg.png')} style={{ width: '90%', height: '70%', marginLeft: "auto", borderRadius:15}}>
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Centered text</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView>
        
      <Text>Community Gallery</Text>
      </SafeAreaView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
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
    marginTop: 5,
  }
});
