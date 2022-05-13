import { StatusBar } from 'expo-status-bar';
import {React , useState ,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [status ,  setStatus] = useState('')
  useEffect( () => {
    fetch('https://api.coingecko.com/api/v3/coins/categories/list').then(value => value.json().then(json => console.log(json)))
  })

  return (
    <View style={styles.container}>
      {status ? <Text>{status}</Text> : <Text>Nothing to show</Text>}
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
