import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import React, {useState} from 'react';

const Stack = createStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    );
}








