import {createStackNavigator} from "@react-navigation/stack";
import TabNavigation from "../navigations/TabNavigation"
import UpdateCat from "@/screens/Main/Cat/UpdateCat";
import PacketDetails from "@/screens/Main/Details/Packet/Index";
import {Order} from "@/screens";

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
            <Stack.Screen name={'PacketDetails'}
                          component={PacketDetails}
            />
            <Stack.Screen
                name={'UpdateCat'}
                component={UpdateCat}
            />
            <Stack.Screen name={'Order'}
                          component={Order}/>
        </Stack.Navigator>
    )
}
export default HomeStack