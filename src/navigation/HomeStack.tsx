import { createStackNavigator } from '@react-navigation/stack'
import { StackRoutes } from './routes';
import { Home, Profile } from '../screens';

const StackNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name={StackRoutes.Home}
        component={Home}
      />
      <StackNavigator.Screen
        name={StackRoutes.Profile}
        component={Profile}
      />
    </StackNavigator.Navigator>
  );
}

export default HomeStack;
