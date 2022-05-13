import { View } from "react-native"
import { FlatList , SafeAreaView } from "react-native"
import { useState } from "react/cjs/react.production.min"
import CoinButtton from "../Button/CoinButton"
import ListTile from "../ListTile/ListTile"
import styles from "./style"

const filtros = [
    {name : 'Precio' , key : 'current_price'} , 
    {name : 'Capi' , key : 'market_cap'} , 
    {name : '24hs' , key : 'price_change_percentage_24h'}
]

const ListContainer = ({coins}) => {
    const [coins , setCoins] = useState(coins)

    const orderBy = (filter) => {
        const newOrder = coins.sort((a,b) => (a[filter] - b[filter]))
        setCoins(newOrder)
    }
    const renderItem = ({item}) => {

        return <ListTile 
                    key={item.id} 
                    name={item.name} 
                    image={item.image} 
                    price={item.current_price}
                    />
    }

    return (
        <View>
        <SafeAreaView style={styles.filtersContainer}>{
            filtros.map(
                ({name , key}) => <CoinButtton title={name} callback={ () => orderBy(key)}/>)}
        </SafeAreaView>
            <FlatList
                style={styles.coinsContainer}
                data={coins}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}/>
        </View>
    )
}

export default ListContainer