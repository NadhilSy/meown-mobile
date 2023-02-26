import FontAwesome from "react-native-vector-icons/FontAwesome5";
import {colors} from "@/theme";

const Icon = (props) => {
    console.log(props.color)
    return (
        <FontAwesome name={props.icon} size={24 || props.size} color={props.color||colors.primary}
                     style={props.style}
        />
    )
}

export default Icon;