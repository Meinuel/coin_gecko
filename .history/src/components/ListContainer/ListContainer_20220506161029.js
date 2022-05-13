import { View } from "react-native"
import { FlatList , StatusBar } from "react-native"
import CoinButtton from "../Button/CoinButton"
import ListTile from "../ListTile/ListTile"
import styles from "./style"

// const orderByCap = (filter) => {

// }

// const orderByPrice = (filter) => {

// }

// const orderByPer = (filter) => {

// }
// const filtros = [
//     {name : 'Precio' , callback : orderByPrice}, 
//     {name : 'Capitalizacion' , callback:orderByCap},
//     {name : '24hs' , callback : orderByPer}
// ]

const filtros = ['Precio' , 'Capi' , '24hs']

const ListContainer = ({coins}) => {

    const orderBy = (filter) => {
        coins.sort((a,b) => {
            console.log(a.filter , b.filter)
        })
    }
    const renderItem = ({item}) => {

        return <ListTile 
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    price={item.current_price}
                    />
    }

    return (
        <View>
              <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        hidden={false} />
            <View style={styles.filtersContainer}>{filtros.map(filtro => <CoinButtton title={filtro} callback={orderBy}/>)}</View>
            <FlatList
                style={styles.coinsContainer}
                data={coins}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}/>
        </View>
    )
}

export default ListContainer