import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../common/colors';
import AppText from '../components/shared/AppText';
import { useCryptoSocket } from '../contexts/CryptoContext';

const Market = () => {
  const { socketData } = useCryptoSocket();

  const btcValue = useMemo(() => socketData?.data?.[5], [socketData]);

  return (
    <View style={styles.container}>
      <AppText size={18} bold>
        BTC:
      </AppText>
      <AppText size={16}>
        {btcValue || 'N/A'}
      </AppText>
    </View>
  );
}

export default Market;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  }
});
