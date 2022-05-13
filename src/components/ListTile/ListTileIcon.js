import { TouchableOpacity , Image } from "react-native"
import styles from "./style"

const ListTileIcon = ({data}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{uri:data , height : 25 , width : 25}}/>
        </TouchableOpacity>
    )
}

export default ListTileIcon