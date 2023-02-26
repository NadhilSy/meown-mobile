import {Text, TextInput, View} from "react-native";
import Icon from "@/components/Icon/Icon";
import {colors, typography} from "@/theme";

const FormInput = (props) => {
    return (
        <View style={{marginVertical:10,width:'100%'}}>
        <Text
        style={[typography.text,{marginBottom:5, color: colors.primary}]}
        >{props.label}</Text>
        <View style={{
            flexDirection: 'row',
            borderWidth: 0.5,
            borderRadius: 12,
            alignItems:'center',
            borderColor: colors.gray
        }}>
            <View style={{marginLeft:10}}><Icon icon={props.icon} /></View>
            <TextInput
                placeholder={props.placeholder}
                value={props.value}
                {...props}
                style={{marginLeft: 12,padding:10,width:'100%'}}
            />
        </View>
        </View>
    )
}

export default FormInput;