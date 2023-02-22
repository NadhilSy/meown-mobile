import {Text, View} from "react-native";
import {memo} from "react";
import Card from "@/components/Card/Card";
import {colors} from "@/theme";
import style from "@/screens/Main/Details/User/style";

const UserDetails = ({user})=>{
    return (
        <Card styles={style.container}>
            {
                user && (
                    <Text style={{fontSize:26,fontWeight:'bold',color:'white',marginLeft:5}}>Welcome, {user.name}</Text>
                )

            }
        </Card>
    )
}
export default memo(UserDetails)