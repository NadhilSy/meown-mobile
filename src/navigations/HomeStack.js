import {createStackNavigator} from "@react-navigation/stack";
import TabNavigation from "../navigations/TabNavigation"

const Stack = createStackNavigator()

const HomeStack = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
            disableBackButtonMenu: true
        }}>
            <Stack.Screen
                name={'Home'}
                component={TabNavigation}
            />
        </Stack.Navigator>
    )
}
export default HomeStack