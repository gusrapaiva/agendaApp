import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';

const Stack = createStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}








