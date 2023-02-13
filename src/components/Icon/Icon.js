import FontAwesome from "react-native-vector-icons/FontAwesome5";
import {colors} from "@/theme";

const Icon = (props) => {
    return (
        <FontAwesome name={props.icon} size={24 || props.size} color={colors.primary || props.color}/>
    )
}

export default Icon;