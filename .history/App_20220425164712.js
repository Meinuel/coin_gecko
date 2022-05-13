import { StatusBar } from 'expo-status-bar';
import {React , useState ,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListTile from './src/components/ListTile/ListTile';

export default function App() {
  const [coins ,  setCoins] = useState([])
  const [hasError , setHasError] = useState(false)

  useEffect(() => {
    console.log('Se disparo useEffect')
    fetch('https://api.coingecko.com/api/v3/coins/list')
      .then(value => value.json().then(json => handleCoins(json)))
      .catch(err => setHasError(true))
  }, [])

  const handleCoins = (arr) => {
    const coins = arr && arr.slice(0,18)
    setCoins(coins)
  }

  return (
    <View style={styles.container}>
      {!hasError ? 
        coins ? coins.map((item , i) => <ListTile id={item.id} name={item.name} symbol={item.symbol}/>) : <Text>Nothing to show</Text> : 
        <Text>Error</Text>}
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
