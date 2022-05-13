import { Text } from "react-native"

const ListTile = ({id,name,symbol}) => {
    return(
        <>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{symbol}</Text>
        </>
    )
}

export default ListTile