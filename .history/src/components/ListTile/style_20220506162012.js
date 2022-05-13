import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderStyle: "solid",
        borderWidth: 0.25,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 20
    },
    fragment: {
        borderStyle:"solid",
        borderWidth: 0.25,
        paddingHorizontal: 10
    }
});

export default styles;