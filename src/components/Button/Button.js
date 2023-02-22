import {
    TouchableOpacity, View, Text
} from "react-native";

import styles from "./styles";

const Button = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{...styles.button(props.disabled),...props.style,...props.styleTxtBtn}}
                onPress={props.onPress}
                disabled={props.disabled}
            >
                {props.children}
            </TouchableOpacity>
        </View>
    )
}

export default Button;
