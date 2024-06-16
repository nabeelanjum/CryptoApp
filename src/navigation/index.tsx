import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppTabNavigation from './AppTabNavigation';
import useCryptoConnection from '../services/useCryptoConnection';

const RootNavigation = () => {
  // Establish socket connection as soon as navigation is mounted
  useCryptoConnection();

  return (
    <NavigationContainer>
      <AppTabNavigation />
    </NavigationContainer>
  );
}

export default RootNavigation;
