import { Text , View , TouchableOpacity , Image} from "react-native"
import styles from "./style"

const ListTile = ({key,name,image,price}) => {
    return(
        <TouchableOpacity style={[styles.container]} >
            <Image source={{uri:image , height:15 ,width: 15}}/>
            <Text style={styles.fragment}>{name}</Text>
            <Text style={styles.fragment}>{price}</Text>
        </TouchableOpacity>
    )
}

export default ListTile