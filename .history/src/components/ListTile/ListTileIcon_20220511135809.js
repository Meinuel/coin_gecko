import { TouchableOpacity } from "react-native"
import styles from "./style"
const ListTileIcon = () => {
    return (
        <TouchableOpacity>
            <Image style={styles.container} source={{uri:item.image}}/>
        </TouchableOpacity>
    )
}

export default ListTileIcon