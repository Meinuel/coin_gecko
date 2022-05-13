import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    filtersContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginVertical: 10
    },
    coinsContainer: {
        flex: 1,
        width: '100%',
    },
    boardContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
})

export default styles;