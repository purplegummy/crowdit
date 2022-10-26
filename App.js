import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from "./services/contexts/AuthContext";
import { LoginScreen } from './views/LoginScreen';

export default function App() {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <LoginScreen />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
