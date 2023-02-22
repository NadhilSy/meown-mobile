import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        // padding: 10
    },
    button: (disabled) => ({
        backgroundColor: "#fc3a72",
        padding: 15,
        margin: 5,
        opacity: disabled ? 0.5 : 1
    }),
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default styles;