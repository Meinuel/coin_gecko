import { TouchableOpacity , Image } from "react-native"
import styles from "./style"

const ListTileIcon = ({data}) => {
    return (
        <TouchableOpacity>
            <Image style={styles.container} source={{uri:data , height : 20 , width : 20}}/>
        </TouchableOpacity>
    )
}

export default ListTileIcon