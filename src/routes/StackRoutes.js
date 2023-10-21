import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./TabRoutes";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro"

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Inicio" component={TabRoutes} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
}