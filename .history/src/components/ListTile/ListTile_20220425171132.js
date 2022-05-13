import { Text , View} from "react-native"
import styles from "./style"

const handleName = (name) => {
    const nameParts = name.split(' ')
    return nameParts[2]
}

const ListTile = ({id,name,symbol}) => {
    return(
        <View style={styles.container}>
            {/* <Text>id {id}</Text> */}
            <Text>{handleName(name)}</Text>
            {/* <Text>symbol {symbol}</Text> */}
        </View>
    )
}

export default ListTile