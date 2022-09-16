import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



/**
 * Screens
 */

import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Splash from '../Screens/Splash';
import Detail from '../Screens/Detail';
import Favorite from '../Screens/Favorite';
import Login from '../Screens/Login';
import { useTranslation } from 'react-i18next';


// Context Api
const UserContext = React.createContext()
export const useAuth = () => React.useContext(UserContext)

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




/**
 * Main Stack
 */

const TabNavigator = ()=>{
    const {t} = useTranslation();
    const {colors} = useTheme()
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.gray
        }}
        >
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({ focused, color, size })=>(<Ionicons name={"home"} color={color} />),tabBarLabel: t("common:news")}}/>
            <Tab.Screen name="Favorite" component={Favorite} options={{tabBarIcon: ({ focused, color, size })=>(<Ionicons name={"heart"} color={color} />),tabBarLabel: t("common:favorite")}}/>
            <Tab.Screen name="Profile" component={Profile}  options={{tabBarIcon: ({ focused, color, size })=>(<Ionicons name={"settings"} color={color} />),tabBarLabel: t("common:settings"), headerShown: true, headerTitle: t("common:settings")}}/>
      </Tab.Navigator>
    )
}

const MainNavigator = ()=>(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
)



/**
 * Auth Stack
 */
const AuthNavigator = ()=>(
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
)



/**
 * Init Component
 */

const Navigation = () => {


    return (
        
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
            <Stack.Screen name="MainNavigator" component={MainNavigator} />    
        </Stack.Navigator>
     
    )
}

export default Navigation