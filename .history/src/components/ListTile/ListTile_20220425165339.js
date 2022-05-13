import { Text , View} from "react-native"
import styles from "./ListTileStyle"

const ListTile = ({id,name,symbol}) => {
    return(
        <View style={styles.container}>
            <Text>nana {id}</Text>
            <Text>{name}</Text>
            <Text>{symbol}</Text>
        </View>
    )
}

export default ListTile