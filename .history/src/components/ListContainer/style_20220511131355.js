import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    filtersContainer: {
        display: "flex",
        flexDirection: "row",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    coinsContainer: {
        flex: 1,
        backgroundColor: 'yellow',

    }
})

export default styles;