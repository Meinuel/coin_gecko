import { FlatList } from "react-native"

const FlatListContainer = ({coins , callback}) => {
    return <FlatList
        scrollEnabled={true}
        data={coins}
        renderItem={callback}
        keyExtractor={(item) => item.id}/>
}

export default FlatListContainer