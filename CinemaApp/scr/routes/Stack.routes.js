import { createStackNavigator } from '@react-navigation/stack';

import CarregamentoScreen from '../screen/CarregamentoFirts';
import Login from '../screen/Login';
import Splash from '../screen/Splash';
import Principal from '../screen/Principal';




const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Carregamento" component={CarregamentoScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Principal" component={Principal} />
     


    </Stack.Navigator>
  );
}


