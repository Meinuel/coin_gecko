import { StatusBar } from 'expo-status-bar';
import {React , useState ,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [status ,  setStatus] = useState('')
  useEffect( () => {
    fetch('https://api.coingecko.com/api/v3/ping').then(value => value.json().then(json => console.log('hola' , json['gecko_says'])))
  })

  return (
    <View style={styles.container}>
      {status ? status : <Text>Nothing to show</Text>}
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
