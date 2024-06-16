import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabRoutes } from './routes';
import HomeStack from './HomeStack';
import Market from '../screens/Market';
import { Image } from 'react-native';
import images from '../assets/images';

const TabNavigator = createBottomTabNavigator();

const AppTabNavigation = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen
        name={TabRoutes.HomeTab}
        component={HomeStack}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <Image source={images.homeIcon} tintColor={color} />
        }}
      />
      <TabNavigator.Screen
        name={TabRoutes.Live_Market}
        component={Market}
        options={{
          title: 'Market',
          tabBarIcon: ({ color }) => <Image source={images.stockIcon} tintColor={color} />
        }}
      />
    </TabNavigator.Navigator>
  );
}

export default AppTabNavigation;
