import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabRoutes } from './routes';
import HomeStack from './HomeStack';

const TabNavigator = createBottomTabNavigator();

const AppTabNavigation = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen
        name={TabRoutes.HomeTab}
        component={HomeStack}
        options={{ headerShown: false }}
      />
    </TabNavigator.Navigator>
  );
}

export default AppTabNavigation;
