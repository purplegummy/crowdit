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

const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <AuthProvider>
       <NavigationContainer
            independent={true}
       >
       <Tab.Navigator
       screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#1CBC94',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
             <Image source={require('./views/assets/home.svg')} />
            ),
          }}
        />
        <Tab.Screen
          name="TrendingStack"
          component={AllPostsScreen}
          options={{
            tabBarLabel: 'Trending',
            tabBarIcon: ({ color, size }) => (
             <Image source={require('./views/assets/trending.svg')} />
            ),
          }}
        />
         <Tab.Screen
          name="ProfileStack"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
             <Image source={require('./views/assets/profile.svg')} />
            ),
          }}
        />
         
        <Tab.Screen name="CreatePost" component={CreatePostScreen}
            options={{
                tabBarButton: () => null,
                tabBarButtonComponent: () => null,
                tabBarLabel: () => null,
            }}
        />
        
      </Tab.Navigator>
       
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
