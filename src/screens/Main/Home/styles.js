import {StyleSheet} from "react-native";
import {colors} from "@/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.border,
        justifyContent:'center',
        alignItems:'center'
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
        padding: 20,
        borderRadius: 20,
        elevation:5
    }
})