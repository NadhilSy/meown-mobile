import FontAwesome from "react-native-vector-icons/FontAwesome5";
import {colors} from "@/theme";

const Icon = (props) => {
    return (
        <FontAwesome name={props.icon} size={props.size || 24} color={props.color||colors.primary}/>
    )
}

export default Icon;