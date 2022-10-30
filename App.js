import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from "./services/contexts/AuthContext";
import { LoginScreen } from './views/LoginScreen';
import {HomeScreen} from './views/HomeScreen';
import { AccountScreen } from './views/AccountScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreatePostScreen } from './views/CreatePostScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
       <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
      
          />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="CreatePost" component={CreatePostScreen}></Stack.Screen>
        
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
