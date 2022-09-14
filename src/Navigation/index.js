import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
 * Screens
 */

import Home from '../Screens/Home';
import Settings from '../Screens/Settings';


// Context Api
const UserContext = React.createContext()
export const useAuth = () => React.useContext(UserContext)

const Stack = createNativeStackNavigator();


/**
 * Main Stack
 */

const MainNavigator = ()=>(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
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
            {
                isUser?
                <MainNavigator/>
                :
                <AuthNavigator/>
            }
        </UserContext.Provider>
    )
}

export default Navigation