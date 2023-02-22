import {createStackNavigator} from "@react-navigation/stack";
import TabNavigation from "../navigations/TabNavigation"
import UpdateCat from "@/screens/Main/Cat/UpdateCat";

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
            <Stack.Screen
                name={'UpdateCat'}
                component={UpdateCat}
            />
        </Stack.Navigator>
    )
}
export default HomeStack