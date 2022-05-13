import { View } from "react-native"
import { FlatList , SafeAreaView , Image} from "react-native"
import CoinButtton from "../Button/CoinButton"
import ListTile from "../ListTile/ListTile"
import styles from "./style"
import styles

const filtros = [
    {name : 'Precio' , key : 'current_price'} , 
    {name : 'Capi' , key : 'market_cap'} , 
    {name : '24hs' , key : 'price_change_percentage_24h'}
]

const ListContainer = ({coins , handleCoins}) => {

    const renderName = ({item})  => <ListTile data={item.name}/>
    const renderImage = ({item}) => <Image style={{display:'flex' , justifyContent:'center', alignItems:'center'}} source={{uri:item.image , height:40 ,width: 40}}/>
    const renderPrice = ({item}) => <ListTile  data={item.current_price}/>
    

    return (
        <View style={styles.coinsContainer}>
            <SafeAreaView style={styles.filtersContainer}>{
                filtros.map(
                    ({name , key}) => <CoinButtton key={key} title={name} callback={() => handleCoins(coins , key)}/>)}
            </SafeAreaView>
            <View style={styles.boardContainer}>
                <FlatList
                    data={coins}
                    renderItem={renderImage}
                    keyExtractor={(item) => item.id}/>
                <FlatList
                    data={coins}
                    renderItem={renderName}
                    keyExtractor={(item) => item.id}/>
                <FlatList
                    data={coins}
                    renderItem={renderPrice}
                    keyExtractor={(item) => item.id}/>
            </View>
        </View>
    )
}

export default ListContainer