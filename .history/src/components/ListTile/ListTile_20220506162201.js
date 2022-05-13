import { Text , View , TouchableOpacity , Image} from "react-native"
import styles from "./style"

const handleName = (name) => {
    const nameParts = name.split(' ')
    return nameParts[2]
}

const ListTile = ({id,name,image,price}) => {
    return(
        <TouchableOpacity style={[styles.container]} >
            <Image source={{uri:image , height:15 ,width: 15}}/>
            <Text style={styles.fragment}>{name}</Text>
            <Text style={styles.fragment}>{price}</Text>
        </TouchableOpacity>
    )
}

export default ListTile