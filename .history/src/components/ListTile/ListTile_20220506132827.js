import { Text , View , TouchableOpacity , Image} from "react-native"
import styles from "./style"

const handleName = (name) => {
    const nameParts = name.split(' ')
    return nameParts[2]
}

const ListTile = ({id,name,image,backgroundColor,textColor,setSelectedItem}) => {
    return(
        <TouchableOpacity style={[styles.container , backgroundColor]} >
            <Image source={{uri:image , height:'100'}}/>
            <Text style={textColor}>{name}</Text>
        </TouchableOpacity>
    )
}

export default ListTile