import {Text, View} from "react-native";
import Card from "@/components/Card/Card";
import {colors} from "@/theme";
import style from "@/screens/Main/Order/List/RenderItem/style";
const RenderItem = (props) =>{
    return (
        <View
            style={style.container}>
            <Card styles={{padding:15}}>
                <Text style={{color:colors.black,fontSize:14,marginVertical:5}}>Id: {props?.data.transactionId}</Text>
                <Text style={style.text}>Cat: {props?.data?.cat.name}</Text>
                <Text style={style.text}>Packet: {props?.data.packet.packageName}</Text>
                <Text style={style.text}>Price: {props?.data.packet.price}</Text>
                <Text style={{...style.text,color:props?.data?.status === 'PAID'?colors.primary:colors.gray,fontWeight:'bold',marginTop:10,fontSize:16,alignSelf:'flex-end'}}>{props?.data?.status}</Text>
            </Card>
        </View>
    )
}
export default RenderItem