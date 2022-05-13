import { StatusBar } from 'expo-status-bar';
import {React , useState ,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinButton from './src/components/Button/CoinButton';
import ListContainer from './src/components/ListContainer/ListContainer';

export default function App() {
  const [coins ,  setCoins] = useState()
  const [hasError , setHasError] = useState(false)

  useEffect(() => {
    fetchCoins()
  }, [])

  const fetchCoins = () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(value => value.json().then(json => handleCoins(json , 'current_price')))
      .catch(err => setHasError(true))
  }

  const handleCoins = (arr , filter) => {
    const coins = arr && arr.slice(0,20)
    const coinOrder = coins.sort((a,b) => (b[filter] - a[filter]))
    setCoins(coinOrder)
  }

  return (
    <View style={styles.container}>
      {!hasError ? 
        coins ? <ListContainer coins={coins} handleCoins={handleCoins}/> : <Text>Loading</Text> :
        <CoinButton title="Reintentar" callback={fetchCoins} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
