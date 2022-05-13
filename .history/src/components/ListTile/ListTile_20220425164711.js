import { Text } from "react-native"
import styles from "./ListTileStyle"

const ListTile = ({id,name,symbol}) => {
    return(
        <div className={styles.container}>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{symbol}</Text>
        </div>
    )
}

export default ListTile