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
            icon: 'paw',
            header:false
        }, {
            name: 'Cat',
            title: 'My Cat',
            component: Cat,
            icon: 'cat',
            header: true
        },
        {
            name: 'OrderList',
            title: 'Purchase History',
            component: ListOrder,
            icon: 'scroll',
            header: true
        }
        , {
            name: 'Setting',
            title: 'Setting',
            component: Settings,
            icon: 'user-cog',
            header: true
        }
    ]
    return (
        <TabNavigator.Navigator screenOptions={{...TransitionPresets.ScaleFromCenterAndroid, headerShown:false}}>
            {
                LIST_MENUS.map((item, index) => (
                    <TabNavigator.Screen
                        component={item.component}
                        name={item.name}
                        key={index}
                        options={
                            {
                                headerShown:item.header,
                                tabBarActiveTintColor: colors.focused,
                                tabBarInactiveTintColor: colors.gray,
                                tabBarIcon: ({focused}) => (
                                    <Icon
                                        icon={item?.icon}
                                        name={item?.focused}
                                        color={focused ? colors.focused : colors.gray}
                                    />
                                ),
                                title:item.title,
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