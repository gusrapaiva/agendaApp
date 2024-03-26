import { createStackNavigator } from '@react-navigation/stack';
import Home from './pagesApp/Home';
import Login from './pagesLogin/Login';
import Register from './pagesLogin/Register';

const Stack = createStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} options={{headerTintColor: '#000'}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    );
}