import {Text, TouchableOpacity, View} from "react-native";
import {colors, shadow, typography} from "@/theme";

const PrimaryButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[shadow.primary,{
                height: 50,
                marginVertical:12,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: props.optionalColor ? colors.secondary : colors.primary

            }]}>
                <Text
                    style={
                        [typography.title,
                            {
                                color: colors.white
                            }
                        ]
                    }
                >{props.buttonText}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default PrimaryButton;