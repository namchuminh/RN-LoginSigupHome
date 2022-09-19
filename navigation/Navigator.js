import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react'
import {LogIn, SignUp, Welcome} from '../screens/index.js';

const Stack = createNativeStackNavigator();

function Navigator(props){
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
                <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator