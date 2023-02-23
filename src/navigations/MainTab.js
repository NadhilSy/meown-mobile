import Home from "../screens/Main/Home/Home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Cat from "../screens/Main/Cat/Cat";
import Settings from "../screens/Main/Settings/Settings";
import Order from "../screens/Main/Order/Order";
import TabNavigation from "@/navigations/TabNavigation";

const Tabs = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name={"MainNav"} component={TabNavigation}/>
        </Tabs.Navigator>
    )
}

export default MainTab