import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabRoutes } from './routes';
import { Home } from '../screens';

const TabNavigator = createBottomTabNavigator();

const AppTabNavigation = () => {
  return (
    <TabNavigator.Navigator screenOptions={stackConfig}>
      <TabNavigator.Screen
        name={TabRoutes.Home}
        component={Home}
        options={{ headerTitle: 'Home' }}
      />
    </TabNavigator.Navigator>
  );
}

export default AppTabNavigation;
