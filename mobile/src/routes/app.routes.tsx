import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Account from '../pages/Account';
import Category from '../pages/Category';
import Transaction from '../pages/Transaction';
import Home from '../pages/Home';
import Objective from '../pages/Objective';

const AccountStack = createStackNavigator();

const AccountScreen: React.FC = () => (
  <AccountStack.Navigator headerMode={'none'}>
    <AccountStack.Screen name="Account" component={Account} />
  </AccountStack.Navigator>
);

const CategoryStack = createStackNavigator();

const CategoryScreen: React.FC = () => (
  <CategoryStack.Navigator headerMode={'none'}>
    <CategoryStack.Screen name="Category" component={Category} />
  </CategoryStack.Navigator>
);

const TransactionStack = createStackNavigator();

const TransactionScreen: React.FC = () => (
  <TransactionStack.Navigator headerMode={'none'}>
    <TransactionStack.Screen name="Transaction" component={Transaction} />
  </TransactionStack.Navigator>
);

const HomeStack = createStackNavigator();

const HomeScreen: React.FC = () => (
  <HomeStack.Navigator headerMode={'none'}>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const ObjectiveStack = createStackNavigator();

const ObjectiveScreen: React.FC = () => (
  <ObjectiveStack.Navigator headerMode={'none'}>
    <ObjectiveStack.Screen name="Objective" component={Objective} />
  </ObjectiveStack.Navigator>
);

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
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
        inactiveTintColor: '#FFF',
        labelStyle: {
          fontFamily: 'Nunito_400Regular',
        },
        style: { backgroundColor: '#39393A'},
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={() => ({
          tabBarIcon: () => (
            <LinearGradient
              style={styles.iconTabRound}
              start={{ x: 0.3, y: 0.3 }}
              end={{ x: 1, y: 1 }}
              colors={['#B9C0FF', '#42A1DC']}
            >
              <Icon name="add" size={26} color="#FFF" />
            </LinearGradient>
          ),
        })}
      />
      <Tab.Screen name="Objective" component={ObjectiveScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 25,
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
