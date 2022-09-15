import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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
import { colors } from '../theme';
import Favorite from '../Screens/Favorite';


// Context Api
const UserContext = React.createContext()
export const useAuth = () => React.useContext(UserContext)

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




/**
 * Main Stack
 */

const TabNavigator = ()=>(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.gray
        }}
        >
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({ focused, color, size })=>(<Ionicons name={"home"} color={color} />),tabBarLabel: "Home"}}/>
            <Tab.Screen name="Favorite" component={Favorite} options={{tabBarIcon: ({ focused, color, size })=>(<Ionicons name={"heart"} color={color} />),tabBarLabel: "Favorite"}}/>
            <Tab.Screen name="Profile" component={Profile}  options={{tabBarIcon: ({ focused, color, size })=>(<Ionicons name={"settings"} color={color} />)}}/>
      </Tab.Navigator>
    
)

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
        <Stack.Screen name="Login" component={Home} />
    </Stack.Navigator>
)



/**
 * Init Component
 */

const Navigation = () => {
    
    const [isUser, setIsUser] = React.useState(true)

    const signIn = () => setIsUser(true);
    const signOut = () => setIsUser(false);



    return (
        <UserContext.Provider value={{}}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen name="app" component={isUser?MainNavigator:AuthNavigator} />
            </Stack.Navigator>
        </UserContext.Provider>
    )
}

export default Navigation