import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';

const AuthenticateStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthenticateStack.Navigator headerMode={'none'}>
    <AuthenticateStack.Screen name="Login" component={Login} />
  </AuthenticateStack.Navigator>
);

export default AuthRoutes;
