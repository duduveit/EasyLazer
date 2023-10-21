import { NavigationContainer, TabRouter } from '@react-navigation/native';
import TabRoutes from './TabRoutes';
import StackRoutes from './StackRoutes';

export default function Routes(){
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}