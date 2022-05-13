import { Text , View} from "react-native"
import styles from "./ListTileStyle"

const ListTile = ({id,name,symbol}) => {
    return(
        <View className={styles.container}>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{symbol}</Text>
        </View>
    )
}

export default ListTile