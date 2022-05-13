import { View } from "react-native"
import { FlatList , SafeAreaView } from "react-native"
import CoinButtton from "../Button/CoinButton"
import ListTile from "../ListTile/ListTile"
import styles from "./style"

const filtros = [
    {name : 'Precio' , key : 'current_price'} , 
    {name : 'Capi' , key : 'market_cap'} , 
    {name : '24hs' , key : 'price_change_percentage_24h'}
]

const ListContainer = ({coins , handleCoins}) => {

    const renderItem = ({item}) => {

        return <ListTile 
                    name={item.name} 
                    image={item.image} 
                    price={item.current_price}
                    />
    }

    return (
        <View>
            <SafeAreaView style={styles.filtersContainer}>{
                filtros.map(
                    ({name , key}) => <CoinButtton title={name} callback={() => handleCoins(coins , key)}/>)}
            </SafeAreaView>
            <View style={styles.coinsContainer}>
                <FlatList
                        
                        data={coins}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}/>
            </View>
        </View>
    )
}

export default ListContainer