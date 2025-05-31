import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import LoginView from './screens/LoginView';
import UserView from './screens/UserView';
import ClientView from './screens/ClientView';
import UpdateClientView from './screens/UpdateClientView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Usuario" component={UserView} />
        <Stack.Screen name="Clientes" component={ClientView} />
        <Stack.Screen name="ActualizarCliente" component={UpdateClientView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
