import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Splash from "../screens/Splash/Splash";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import MainTab from "./MainTab";
import TabNavigation from "@/navigations/TabNavigation";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Splash"}
                    component={Splash}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={"Auth Stack"}
                    component={AuthStack}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={"Main Tab"}
                    component={HomeStack}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator