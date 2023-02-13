import {Text, TextInput, View} from "react-native";
import Icon from "@/components/Icon/Icon";
import {colors, typography} from "@/theme";

const FormInput = (props) => {
    return (
        <View style={{marginVertical:6}}>
        <Text
        style={[typography.text,{marginBottom:5, color: colors.primary}]}
        >{props.label}</Text>
        <View style={{
            flexDirection: 'row',
            borderWidth: 0.5,
            borderRadius: 12,
            padding: 12,
            borderColor: colors.gray
        }}>
            <Icon icon={props.icon}/>
            <TextInput
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChange}
                style={{marginLeft: 12}}
            />
        </View>
        </View>
    )
}

export default FormInput;