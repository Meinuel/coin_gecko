import { StatusBar } from 'expo-status-bar';
import {React , useState ,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [coins ,  setCoins] = useState([])
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/list').then(value => value.json().then(json => {
      setCoins(json.slice(0,5))}))
  })

  return (
    <View style={styles.container}>
      {coins ? coins.map((item , i) => i < 5 && <Text>{item['name']}</Text>) : <Text>Nothing to show</Text>}
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
