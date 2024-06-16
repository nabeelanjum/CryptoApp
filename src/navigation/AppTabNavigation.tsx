import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabRoutes } from './routes';
import HomeStack from './HomeStack';
import Market from '../screens/Market';

const TabNavigator = createBottomTabNavigator();

const AppTabNavigation = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen
        name={TabRoutes.HomeTab}
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <TabNavigator.Screen
        name={TabRoutes.Live_Market}
        component={Market}
      />
    </TabNavigator.Navigator>
  );
}

export default AppTabNavigation;
