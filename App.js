import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { Welcome, SignUp, LogIn} from './screens/index.js';

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
      <LogIn/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})


