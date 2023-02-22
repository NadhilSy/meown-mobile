import {TouchableOpacity, View} from "react-native";
import {Icon} from '../Icon/Icon'
import style from "@/components/ActionBar/style";

const ActionBar = (props) => {
    const {children} = props
    return(
        <TouchableOpacity
            style={style.container}
            onPress={props.onPress}>
            <View>
                <Icon name={'add'} color={'white'}/>
                <View style={style.actionBarBody}>
                    {props.isActive && children}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const ActionBarBody = (props) => {
    return (
        <View style={{
            backgroundColor: 'white',
            width: 150,
            borderRadius: 15,
            padding: 15,
            justifyContent: 'center'
        }}>
            {props.children}
        </View>
    )
}

export {
    ActionBar,
    ActionBarBody
}