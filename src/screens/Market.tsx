import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../common/colors';
import AppText from '../components/shared/AppText';
import { useCryptoSocket } from '../contexts/CryptoContext';
import useSocketConnection from '../services/useCryptoConnection';

const Market = () => {
  const { socketData } = useCryptoSocket();

  console.log('SOCKET_DATA:', socketData);

  return (
    <View style={styles.container}>
      <AppText>
      </AppText>
    </View>
  );
}

export default Market;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  }
});
