import {StyleSheet} from "react-native";
import {colors} from "@/theme";

export default StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'100%',
        paddingHorizontal:30
    },
    title:{
        fontWeight:'bold',
        fontSize:24
    },
    subtitle:{
        fontWeight:'bold',
        fontSize:18,
        color:colors.gray
    },
    row:{
        flexDirection:'row'
    }
})