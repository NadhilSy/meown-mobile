import {TouchableOpacity} from "react-native";
import style from "@/components/Toast/style";

const Toast = (props) => {
    let backgroundColor;
    switch (props.variant.toLowerCase()) {//hati2 variants -> variant
        case 'success':
            backgroundColor = '#4a934a'
            break;
    }
    if (props.active) {
        return (
            <TouchableOpacity
                style={{...style.container, backgroundColor}}
                onPress={props.close}
            >
                {props.children}
            </TouchableOpacity>
        )
    }
}

export default Toast