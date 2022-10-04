import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useContext } from "react"
import {LogIn, SignUp, Welcome,Home} from '../screens/index.js';
import { AuthContext } from '../context/AuthContext.js';
const Stack = createNativeStackNavigator();

function Navigator(props){
    const {userInfo} = useContext(AuthContext)
    return(
        <NavigationContainer>
            <Stack.Navigator >
                {userInfo.access ? (
                    <>
                        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    </>
                    
                ) : (
                    <>
                        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
                        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
                        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator