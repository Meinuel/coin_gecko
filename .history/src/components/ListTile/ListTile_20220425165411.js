import { Text , View} from "react-native"
import styles from "./ListTileStyle"

const ListTile = ({id,name,symbol}) => {
    return(
        <View style={styles.container}>
            <Text>id {id}</Text>
            <Text>name {name}</Text>
            <Text>symbol {symbol}</Text>
        </View>
    )
}

export default ListTile