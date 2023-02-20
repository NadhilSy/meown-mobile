import {View} from "react-native";
import Icon from "@/components/Icon/Icon";

export const options = {
    tabBarStyle: {
        borderRadius: 50,
        marginBottom: 15,
        marginHorizontal: 10,
        height: 50,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: '#fa1605'
    },
    headerShown: true,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: '#ab291c',
    headerStyle: {
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2
    },
    headerRight: () => {
        return (
            <View style={{marginRight: 15}}>
                <Icon name={'cart'}
                />
            </View>
        )
    }
}