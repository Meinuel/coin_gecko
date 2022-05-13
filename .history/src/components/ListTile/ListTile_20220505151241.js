import { Text , View , TouchableOpacity} from "react-native"
import styles from "./style"

const handleName = (name) => {
    const nameParts = name.split(' ')
    return nameParts[2]
}

const ListTile = ({id,name,symbol,backgroundColor,textColor,setSelectedItem}) => {
    return(
        <TouchableOpacity style={[styles.container , backgroundColor]} onPress={() => setSelectedItem(id)} >
            <Text style={textColor}>{handleName(name)}</Text>
        </TouchableOpacity>
    )
}

export default ListTile