const FlatListContainer = ({coins , callback}) => {
    <FlatList
        scrollEnabled={true}
        data={coins}
        renderItem={callback}
        keyExtractor={(item) => item.id}/>
}

export default FlatListContainer