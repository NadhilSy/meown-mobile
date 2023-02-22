import {Text, View} from "react-native";
import style from "@/screens/Main/Details/Packet/style";
import Card from "@/components/Card/Card";
import {colors} from "@/theme";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import Button from "@/components/Button/Button";

const PacketDetails = (props)=>{
    const {packet} = props.route.params
    return (
        <View style={[style.container]}>
            <Text style={[style.title,{marginBottom:15,color:colors.darkGray}]}>Packet details</Text>
            <Card styles={{padding:15,width:'100%',alignItems:'center',justifyContent:'center'}}>
                <View style={style.row}>
                    <Text style={style.title}>{packet.packageName}</Text>
                </View>
                <View style={{alignItems:'center',marginTop:15}}>
                    <Text style={style.subtitle}>Price</Text>
                    <Text style={[style.title]}>{packet.price}</Text>
                </View>
                <View style={{alignItems:'center',marginTop:15,flexWrap:'wrap'}}>
                    <Text style={style.subtitle}>Description</Text>
                    <Text style={{textAlign:'center',marginBottom:30}}>{packet.description}</Text>
                </View>
                <View style={[style.row]}>
                    <Button style={{
                        backgroundColor:colors.primary,
                        borderRadius:15,
                        marginRight:10
                    }}
                            onPress={()=>props.navigation.navigate("Order",{
                                packet
                            })}
                    >
                        <Text style={{color:'white'}}>Order now</Text>
                    </Button>
                    <Button style={{
                        backgroundColor:colors.darkGray,
                        borderRadius:15
                    }}
                            onPress={()=>props.navigation.goBack()}
                    >
                        <Text style={{color:'white'}}>Back</Text>
                    </Button>
                </View>
            </Card>
        </View>
    )
}
export default PacketDetails