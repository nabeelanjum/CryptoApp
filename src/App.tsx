import React from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import RootNavigation from './navigation';
import { CryptoProvider } from './contexts/CryptoContext';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <CryptoProvider>
        <RootNavigation />
      </CryptoProvider>
      <Toast />
    </View>
  );
}

export default App;
