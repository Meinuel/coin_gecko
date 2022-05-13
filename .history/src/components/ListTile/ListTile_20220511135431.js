import { Text , View , TouchableOpacity , Image} from "react-native"
import styles from "./style"

const ListTile = ({data}) => {
    return(
        <TouchableOpacity style={[styles.container]} >
            <Text>{data}</Text>
        </TouchableOpacity>
    )
}

export default ListTile