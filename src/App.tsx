import React from 'react';
import { View } from 'react-native';
import RootNavigation from './navigation';
import { CryptoProvider } from './contexts/CryptoContext';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <CryptoProvider>
        <RootNavigation />
      </CryptoProvider>
    </View>
  );
}

export default App;
