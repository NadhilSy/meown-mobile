import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home, Order, Settings, Cat} from "../screens/index"
import Icon from "@/components/Icon/Icon";
import {TransitionPresets} from "@react-navigation/stack";
import {options} from "@/navigations/TabNavigationOptions";
import {colors} from "@/theme";
import ListOrder from "@/screens/Main/Order/List/Index";

const TabNavigator = createBottomTabNavigator()

const TabNavigation = () => {
    const LIST_MENUS = [
        {
            name: 'Packet',
            title: 'Home',
            component: Home,
            icon: 'paw'
        }, {
            name: 'Cat',
            title: 'MyCat',
            component: Cat,
            icon: 'cat'
        },
        {
            name: 'OrderList',
            title: 'Purchase History',
            component: ListOrder,
            icon: 'scroll'
        }
        , {
            name: 'Setting',
            title: 'Setting',
            component: Settings,
            icon: 'user-cog'
        }
    ]
    return (
        <TabNavigator.Navigator screenOptions={{...TransitionPresets.ScaleFromCenterAndroid, headerShown: false}}>
            {
                LIST_MENUS.map((item, index) => (
                    <TabNavigator.Screen
                        component={item.component}
                        name={item.name}
                        key={index}
                        options={
                            {
                                tabBarActiveTintColor: colors.focused,
                                tabBarInactiveTintColor: colors.gray,
                                tabBarIcon: ({focused}) => (
                                    <Icon
                                        icon={item?.icon}
                                        name={item?.focused}
                                        color={focused ? colors.focused : colors.gray}
                                    />
                                ),
                                tabBarLabel: item.title,
                                unmountOnBlur: true
                            }
                        }
                    />
                ))
            }
        </TabNavigator.Navigator>
    )
}

export default TabNavigation