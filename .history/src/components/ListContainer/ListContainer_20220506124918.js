import { View } from "react-native"
import { FlatList } from "react-native"
import ListTile from "../ListTile/ListTile"
import styles from "./style"

const ListContainer = ({coins}) => {

    const renderItem = ({item}) => {

        return <ListTile 
                    id={item.id} 
                    name={item.name} 
                    symbol={item.symbol} />
    }

    return (
        //<View style={styles.container}>
            <FlatList
            style={styles.container}
                data={coins}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}/>
        //</View>
    )
}

export default ListContainer