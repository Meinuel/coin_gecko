import { View } from "react-native"
import { FlatList } from "react-native"
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes"
import { useState } from "react/cjs/react.production.min"
import ListTile from "../ListTile/ListTile"
import styles from "./style"

const ListContainer = ({coins}) => {
    const [selectedItem , setSelecteditem] = useState()

    const renderItem = ({item}) => {
        const backgroundColor = selectedItem == item.id ? "#6e3b6e" : "#f9c2ff"
        const color = item.id === selectedId ? 'white' : 'black';

        return <ListTile 
                    id={item.id} 
                    name={item.name} 
                    symbol={item.symbol} 
                    backgroundColor={backgroundColor} 
                    textColor={color} 
                    //setSelecteditem={setSelecteditem}

                    />
    }

    return (
        <View>
            <FlatList
                data={coins}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedItem} 
            />
        </View>
    )
}

export default ListContainer