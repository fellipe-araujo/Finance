import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Account from './pages/Account';
import Category from './pages/Category';
import Transaction from './pages/Transaction';
import Home from './pages/Home';
import Objective from './pages/Objective';
import Login from './pages/Login';

const AccountStack = createStackNavigator();

const AccountScreen = () => (
  <AccountStack.Navigator headerMode={'none'}>
    <AccountStack.Screen name="Account" component={Account} />
  </AccountStack.Navigator>
);

const CategoryStack = createStackNavigator();

const CategoryScreen = () => (
  <CategoryStack.Navigator headerMode={'none'}>
    <CategoryStack.Screen name="Category" component={Category} />
  </CategoryStack.Navigator>
);

const TransactionStack = createStackNavigator();

const TransactionScreen = () => (
  <TransactionStack.Navigator headerMode={'none'}>
    <TransactionStack.Screen name="Transaction" component={Transaction} />
  </TransactionStack.Navigator>
);

const HomeStack = createStackNavigator();

const HomeScreen = () => (
  <HomeStack.Navigator headerMode={'none'}>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const ObjectiveStack = createStackNavigator();

const ObjectiveScreen = () => (
  <ObjectiveStack.Navigator headerMode={'none'}>
    <ObjectiveStack.Screen name="Objective" component={Objective} />
  </ObjectiveStack.Navigator>
);

const AuthenticateStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Routes() {
  const signed = false;

  return (
    signed? (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Account':
                iconName = 'credit-card';
                break;
              case 'Transaction':
                iconName = 'add';
                break;
              case 'Objective':
                iconName = 'flag';
                break;
              case 'Category':
                iconName = 'category';
                break;
              default:
                iconName = 'circle';
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#B8C0FF',
          inactiveTintColor: '#fff',
          showLabel: false,
          style: { backgroundColor: '#39393a' },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen
          name="Transaction"
          component={TransactionScreen}
          options={() => ({
            tabBarIcon: () => (
              <View style={styles.iconTabRound}>
                <LinearGradient
                  style={styles.iconTabRound}
                  start={{ x: 0.3, y: 0.3 }}
                  end={{ x: 1, y: 1 }}
                  colors={['#B9C0FF', '#42A1DC']}
                >
                  <Icon name="add" size={26} color="#FFF" />
                </LinearGradient>
              </View>
            ),
          })}
        />
        <Tab.Screen name="Objective" component={ObjectiveScreen} />
        <Tab.Screen name="Category" component={CategoryScreen} />
      </Tab.Navigator>
    </NavigationContainer> ) : (
      <NavigationContainer>
        <AuthenticateStack.Navigator headerMode={"none"}>
          <AuthenticateStack.Screen name="Login" component={Login} />
        </AuthenticateStack.Navigator>
      </NavigationContainer>
    )
  );
}

const styles = StyleSheet.create({
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default Routes;
