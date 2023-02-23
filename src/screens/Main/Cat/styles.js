import {StyleSheet} from "react-native";
import {colors} from "@/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.border
    },
    text: {
        fontSize: 18,
    },
    title: {
        fontSize: 25,
        padding: 25,
        fontWeight: "bold"
    },
    table: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignSelf: "center",
    },
    button: {
        width: 20,
        alignItems:"flex-end",
    },
    buttonText:{
        color:"white",
        textAlign:"center",
    },
    card: {
        marginVertical: 9,
        backgroundColor: colors.white,
        margin: 20,
        padding: 5,
        borderRadius: 20,
        elevation:5
    },
    roundButton: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#e7fc86',
        elevation:10,
    }
})