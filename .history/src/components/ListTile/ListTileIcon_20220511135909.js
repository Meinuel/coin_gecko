import { TouchableOpacity } from "react-native"
import styles from "./style"
const ListTileIcon = ({data}) => {
    return (
        <TouchableOpacity>
            <Image style={styles.container} source={{uri:data}}/>
        </TouchableOpacity>
    )
}

export default ListTileIcon