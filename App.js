import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { AuthProvider } from "./services/contexts/AuthContext";
import { LoginScreen } from './views/LoginScreen';
import {HomeScreen} from './views/HomeScreen';
import { AccountScreen } from './views/AccountScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CreatePostScreen } from './views/CreatePostScreen';
import {MyPostsScreen } from './views/MyPostsScreen';
import { AllPostsScreen } from './views/AllPostsScreen';
import Tabs from './Tabs';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
       <NavigationContainer
       independent={true}
       >
       <Stack.Navigator
        
        screenOptions={{
          headerShown: false,
          gestureEnabled: false
        }}
        initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Home"
            component={Tabs}
      
          />
         <Stack.Screen name="CreatePost" component={CreatePostScreen}/>
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
