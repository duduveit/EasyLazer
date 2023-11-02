import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./TabRoutes";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Busca from "../screens/Busca";
import DetalhesEvento from "../screens/DetalhesEvento";
import Home from "../screens/Home";
import Ingresso from "../screens/Ingresso";
import Perfil from "../screens/Perfil";
import Tickets from "../screens/Tickets";
import ReplacePassword from "../screens/ReplacePassword"
import ReplaceName from "../screens/ReplaceName";
import ReplacePicture from "../screens/ReplacePicture";


const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Inicio" component={TabRoutes} options={{ headerShown: false }}/>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
            <Stack.Screen name="Busca" component={Busca} options={{ headerShown: false }}/>
            <Stack.Screen name="DetalhesEvento" component={DetalhesEvento} options={{ headerShown: true, title: "Detalhes do evento" }}/>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Ingresso" component={Ingresso} options={{ headerShown: false }}/>
            <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }}/>
            <Stack.Screen name="Tickets" component={Tickets} options={{ headerShown: false }}/>
            <Stack.Screen name="ReplacePassword" component={ReplacePassword} options={{ headerShown: true, title: "Trocar senha"}}/>
            <Stack.Screen name="ReplaceName" component={ReplaceName} options={{ headerShown: true, title: "Trocar nome de usuário"}}/>
            <Stack.Screen name="ReplacePicture" component={ReplacePicture} options={{ headerShown: true, title: "Trocar foto de perfil"}}/>
        </Stack.Navigator>
    )
}