import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Poppins: require('./assets/Poppins-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Crowd It<Text style={styles.highlight}>.</Text></Text>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  mainText: {
    fontFamily: "Poppins",
    fontSize: 50,
    color: "#4A4A4A", 
  },
  highlight: {
    color: '#1CBC94'
  }
});
