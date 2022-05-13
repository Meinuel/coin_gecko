import { View } from "react-native"
import ListTile from "../ListTile/ListTile"
import styles from "./style"

const ListContainer = (props) => {
    return (
        <View style={styles.container}>
            {props.coins.map(item => <ListTile id={item.id} name={item.name} symbol={item.symbol}/>)}
        </View>
    )
}

export default ListContainer