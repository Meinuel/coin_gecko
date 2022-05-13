import { Text , View , TouchableOpacity , Image} from "react-native"
import styles from "./style"

const ListTile = ({data}) => {
    return(
        <TouchableOpacity>
            <Text>{data}</Text>
        </TouchableOpacity>
    )
}

export default ListTile