import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , useState ,useEffect} from 'react-native';

export default function App() {
  const [status ,  setStatus] = useState('none')
  useEffect( () => {
    fetch('https://api.coingecko.com/api/v3/ping').then(value => value.json().then(console.log(json)))
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
