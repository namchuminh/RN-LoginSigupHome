import { StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import Navigator from './navigation/Navigator.js'
import { AuthProvider } from './context/AuthContext.js';
export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar
        animated={true}
        backgroundColor='white'
        barStyle={'dark-content'}
        showHideTransition={'fade'}
        hidden={false} 
        />
        <AuthProvider>
          <Navigator/>
        </AuthProvider>
          
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})


