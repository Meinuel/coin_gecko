import { View } from "react-native"
import { FlatList , SafeAreaView , StatusBar} from "react-native"
import CoinButtton from "../Button/CoinButton"
import FlatListContainer from "../FlatList/FlatListContainer"
import ListTile from "../ListTile/ListTile"
import ListTileIcon from "../ListTile/ListTileIcon"
import styles from "./style"

const renderName  = ({item}) => <ListTile data={item.name}/>
const renderImage = ({item}) => <ListTileIcon data={item.image}/>
const renderPrice = ({item}) => <ListTile  data={`${item.current_price} $`}/>

const filtros = [
    {name : 'Precio' , key : 'current_price'} , 
    {name : 'Capi' , key : 'market_cap'} , 
    {name : '24hs' , key : 'price_change_percentage_24h'}
]
const columns = [
    {id : 'Image' , callback : renderImage()} , 
    {id : 'Name'  , callback : renderName()} , 
    {id : 'Price' , callback : renderPrice()}
]
const ListContainer = ({coins , handleCoins}) => {
    const renderName  = ({item}) => <ListTile data={item.name}/>
    const renderImage = ({item}) => <ListTileIcon data={item.image}/>
    const renderPrice = ({item}) => <ListTile  data={`${item.current_price} $`}/>
    const columns = [
        {id : 'Image' , callback : renderImage()} , 
        {id : 'Name'  , callback : renderName()} , 
        {id : 'Price' , callback : renderPrice()}
    ]
    return (
        <View style={styles.coinsContainer}>
        <StatusBar backgroundColor={'black'}/>
            <SafeAreaView style={styles.filtersContainer}>{
                filtros.map(
                    ({name , key}) => <CoinButtton key={key} title={name} callback={() => handleCoins(coins , key)}/>)}
            </SafeAreaView>
            <View style={styles.boardContainer}>
                {columns.map(({id , callback}) => <FlatListContainer coins={coins} callback={callback} key={id}/>)}
            </View>
        </View>
    )
}

export default ListContainer