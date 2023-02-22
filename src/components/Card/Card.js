import {View} from "react-native";
import style from "@/components/Card/style";

const Card = (props) => {
    const {children} = props
    return (
        <View
            style={[style.container,{...props.styles}]}
        >
            {children}
        </View>
    )
}
export default Card